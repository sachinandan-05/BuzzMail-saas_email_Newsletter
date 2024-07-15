"use server";

import Email from "@/models/email.model";
import { connectDb } from "@/shared/libs/db";

export const getEmails = async ({
    newsLetterOwnerId,
}: {
    newsLetterOwnerId: string;
}) => {
    try {
        await connectDb();
        const email = await Email.find({ newsLetterOwnerId });
        return email;
    } catch (error) {
        console.log(error);
    }
};