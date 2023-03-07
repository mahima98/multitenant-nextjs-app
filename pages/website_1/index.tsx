import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TestComponent from "../../components/testComponent";
import { getHomepage } from "./api/main";
import { NextPage } from "next";
import { RenderComponents } from "@/utils/RenderComponents";
import CardHero from "@/components/CardHero";
import { useEffect } from "react";
import React from "react";

const Home: NextPage = ({ data }: any) => {
  console.log(data);

  return (
    <>
      <Head>
        <title>website_1 app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homepage}>
        <div className="bg-red-300">website_1 App</div>
        <TestComponent />
        {data &&
          data.map((value: any, key: number) => (
            <section key={key}>
              {RenderComponents(value.component, value.id)}
            </section>
          ))}
      </main>
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const data = await getHomepage();

  return {
    props: {
      data: data[0].data.homepage,
    },
  };
}
