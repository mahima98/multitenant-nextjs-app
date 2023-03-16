import { readFileSync } from "fs";
import { join } from "path";
import { NextApiRequest } from "next";

export async function get_Website_1_Homepage() {
  const filePath = join(process.cwd(), "data/website_1/homepage.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const homepage = [...data];
  return homepage;
}
export async function get_Website_2_Homepage() {
  const filePath = join(process.cwd(), "data/website_2/homepage.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const homepage = [...data];
  return homepage;
}

export async function getSlugPage(locale: NextApiRequest) {
  const filePath = join(process.cwd(), "data/website_1/about.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const page = [...data];

  return page;
}
