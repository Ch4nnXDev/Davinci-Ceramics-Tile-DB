import { google} from "googleapis";

export default function connectToGoogleSheets() {
    try {
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL ?? "";
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "";

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        return auth;
    } catch (error) {
        console.log("Error Connection To Google Sheets", error);
    }
}