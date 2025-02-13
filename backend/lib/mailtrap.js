import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME;

if (!TOKEN) {
    throw new Error("MAILTRAP_TOKEN is not defined in environment variables.");
}

if (!EMAIL_FROM) {
    throw new Error("EMAIL_FROM is not defined in environment variables.");
}

if (!EMAIL_FROM_NAME) {
    throw new Error("EMAIL_FROM_NAME is not defined in environment variables.");
}

export const mailtrapClient = new MailtrapClient({
    token: TOKEN,
});

export const sender = {
    email: EMAIL_FROM,
    name: EMAIL_FROM_NAME,
};
