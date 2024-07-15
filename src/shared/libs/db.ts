import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

export const connectDb = async () => {
    try {
        const uri = createAstraUri(
            process.env.ASTRA_DB_API_ENDPOINT! || "https://1b89d063-89ba-415f-86a5-e5484d044eb0-us-east-2.apps.astra.datastax.com",
            process.env.ASTRA_DB_APPLICATION_TOKEN! || "AstraCS:JjlkqOkybWchBnUzZwxhbOxY:2daaa9891c6e48730cbe48ba6337c1551662ee236161438a5e2f385a2ba8f89e"
        );

        // Check if there's an existing connection
        if (mongoose.connection.readyState !== 0) {
            // Disconnect the existing connection
            await mongoose.disconnect();
        }
        mongoose.set("autoCreate", true);
        mongoose.setDriver(driver);

        await mongoose
            .connect(uri, {
                isAstra: true,
            })
            .then((res) => {
                console.log("connected");
            })
            .catch((r) => {
                console.log(r);
            });
    } catch (error) {
        console.log(error);
    }
};