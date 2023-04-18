import React from "react";
import { useRouter } from "next/router";
import { getHostnameDataBySubdomain, getSubdomainPaths } from "@/lib/db";

function products() {
  return <div>products</div>;
}

export default products;

// Getting the paths for all the subdomains in our database
export async function getStaticPaths() {
  const paths = await getSubdomainPaths();

  return {
    paths,
    fallback: true,
  };
}

// Getting data to display on each custom subdomain
export async function getStaticProps({ params: { site } }: any) {
  const sites = await getHostnameDataBySubdomain(site);

  return {
    // data: data,
    props: sites,
    revalidate: 3600,
  };
}
