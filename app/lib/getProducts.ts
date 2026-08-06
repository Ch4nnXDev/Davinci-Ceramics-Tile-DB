import { google } from "googleapis";
import connectToGoogleSheets from "./googleSheetsConnect";
export default async function getAllProducts() {
    try {
        const auth = connectToGoogleSheets();
        const sheets = google.sheets({
            version: "v4",
            auth: auth
        });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range: "new one-yeshaya!A2:G",
        });

        const rows = response.data.values;

        return rows;



        
    } catch (error) {
        console.error("Failed to initialize Google Sheets client", error);
        throw error;
    }
}