import { get_Website_1_Homepage } from "./api/main";
import { NextPage } from "next";
import { RenderComponents } from "@/utils/RenderComponents";
import Layout from "@/components/LayoutW1";

const Home: NextPage = ({ data }: any) => {
  console.log(data);

  return (
    <>
      <Layout title="Homepage" appname="website_1">
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

export async function getServerSideProps() {
  const data = await get_Website_1_Homepage();

  return {
    props: {
      data: data,
    },
  };
}
