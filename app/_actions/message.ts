"use server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function sendMessage({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // Auth client
    const auth = new JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    // Initialize spreadsheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEETS_SHEET_ID!,
      auth
    );
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["aurok"];

    await sheet.addRows([{ name, email, subject, message }]);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
