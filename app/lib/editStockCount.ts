import { google } from "googleapis";
import connectToGoogleSheets from "./googleSheetsConnect"
export default async function editStock(row: number, value: string) {

   try {

    const auth = connectToGoogleSheets();
    const sheets = google.sheets({
        version: "v4",
        auth

    })

    const response = await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.SHEET_ID,
        range: `new one-yeshaya!K${row}`,
        valueInputOption: "USER-ENTERED",
        requestBody: {
            values: [[value]]
        }

    });

    console.log(response);

    return response;
    

   } catch (error) {
    return console.error("Error Editing The Product", error);

   }
}