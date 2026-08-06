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
            range: "new one-yeshaya!A3:K",
        });

        const rows = response.data.values ?? [];

        const products = rows.map((row) => ({
            name: row[0],
            type: row[1],
            material: row[2],
            color: row[3],
            origin: row[5],
            size: row[6],
            picture: row[7],
            application_picture: row[8],
            slug: row[9]

        }))

        return products;



        



        
    } catch (error) {
        console.error("Failed to initialize Google Sheets client", error);
        throw error;
    }
}