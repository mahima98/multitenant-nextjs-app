import Head from "next/head";
import Script from "next/script";
import { get_Website_1_Homepage } from "./api/main";
import { NextPage } from "next";
import { RenderComponents } from "@/utils/RenderComponents";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import LayoutW1 from "@/components/LayoutW1";

const Home: NextPage = ({ data }: any) => {
  console.log(data);

  return (
    <>
      <LayoutW1 title="Homepage">
        <main className="website-1">
          {data &&
            data.map((value: any, key: number) => (
              <section key={key}>
                {RenderComponents(value.component, value.id)}
              </section>
            ))}
        </main>
      </LayoutW1>
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const data = await get_Website_1_Homepage();

  return {
    props: {
      data: data,
    },
  };
}
