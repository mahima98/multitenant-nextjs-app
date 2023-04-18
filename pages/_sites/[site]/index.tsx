import { useRouter } from "next/router";
import { getHostnameDataBySubdomain, getSubdomainPaths } from "@/lib/db";
import { RenderComponents } from "@/utils/RenderComponents";
import Layout from "@/components/Layout";
import { NextPage } from "next";

// Our types for the site data
export interface Props {
  name: String;
  description: String;
  subdomain: String;
  customDomain: String;
  data: [];
}

const Home: NextPage<Props> = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  let data = props.data.homepage;

  console.log("data", data);

  return (
    <>
      {/* <h1 className="text-red-200">{props.name}</h1> */}
      <Layout title={props.subdomain}>
        <main className="website-1">
          {data &&
            data.map((value: any, key: number) => (
              <section key={key}>
                {RenderComponents(value.component, value.id)}
              </section>
            ))}
        </main>
      </Layout>
    </>
  );
};

export default Home;

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
