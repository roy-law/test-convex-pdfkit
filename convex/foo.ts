"use node";
import { action } from "./_generated/server";

export const foo = action(() => {
  console.log(process.env.hello);
  const PDFDocument = require("pdfkit");
  const doc = new PDFDocument({ size: [4 * 72, 6 * 72] });
});
