import React from "react";
import { readFileSync } from "fs";
import { join } from "path";
import { NextApiRequest } from "next";

export async function getHomepage() {
  const filePath = join(process.cwd(), "data/homepage.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const homepage = [...data];
  return homepage;
}

export async function getSlugPage(locale: NextApiRequest) {
  const filePath = join(process.cwd(), "data.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const page = [data];

  return page;
}
