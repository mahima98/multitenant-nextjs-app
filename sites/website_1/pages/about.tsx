import { get_about } from "./api/main";
import { NextPage } from "next";
import { RenderComponents } from "@/utils/RenderComponents";
import Layout from "@/components/LayoutW1";

const About: NextPage = ({ data }: any) => {
  // console.log(data);

  return (
    <>
      <Layout title="About us">
        <main className="about">
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
export default About;

export async function getServerSideProps() {
  const data = await get_about();

  return {
    props: {
      data: data,
    },
  };
}
