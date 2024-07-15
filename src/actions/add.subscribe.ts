"use server";
import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";
import { clerkClient } from "@clerk/nextjs/server";

export const subscribe = async ({
    email,
    username,
}: {
    email: string;
    username: string;
}) => {
    try {
        await connectDb();

        // Fetch all users
        const allUsersResponse = await clerkClient.users.getUserList();
        const allUsers = allUsersResponse.data;

        // Find the newsletter owner
        const newsletterOwner = allUsers.find((i) => i.username === username);
        console.log(newsletterOwner)
        if (!newsletterOwner) {
            throw Error("Username is not valid!");
        }

        // Check if subscriber already exists
        const isSubscriberExist = await Subscriber.findOne({
            email,
            newsLetterOwnerId: newsletterOwner.id,
        });

        if (isSubscriberExist) {
            return { error: "Email already exists!" };
        }

        // Validate email
        const validationResponse = await validateEmail({ email });
        if (validationResponse.status === "invalid") {
            return { error: "Email not valid!" };
        }

        // Create new subscriber
        const subscriber = await Subscriber.create({
            email,
            newsLetterOwnerId: newsletterOwner.id,
            source: "By BuzzMail website",
            status: "Subscribed",
        });
        return subscriber;
    } catch (error) {
        console.error(error);
        return { error: "An error occurred while subscribing." };
    }
};