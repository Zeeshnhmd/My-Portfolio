import fs from "node:fs";
import path from "node:path";

export const ABOUT_PORTRAIT_PATH = "images/About us.png";

export function publicImageExists(relativePath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relativePath));
  } catch {
    return false;
  }
}
