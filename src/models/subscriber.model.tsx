import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriberShema = new Schema(
    {
        email: {
            type: String,
        },
        newsLetterOwnerId: {
            type: String,
        },
        source: {
            type: String,
            default:"By BuzzMail website"
        },
        status: {
            type: String,
            default:"subscribed"
            
        },
    },
    { timestamps: true }
);

const Subscriber =
    mongoose.models.Subscribers || mongoose.model("Subscribers", subscriberShema);

export default Subscriber;