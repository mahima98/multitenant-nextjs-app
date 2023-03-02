import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TestComponent from "../../components/testComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homepage}>
        <div className="bg-red-300">Homepage App</div>
        <TestComponent />
      </main>
    </>
  );
}
