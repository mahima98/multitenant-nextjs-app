import { readFileSync } from "fs";
import { join } from "path";

export async function getHomepage() {
  const filePath = join(process.cwd(), "data.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const homepage = [...data];
  return homepage;
}
