import { RenderComponents } from "../../utils/RenderComponents";
import { useRouter } from "next/router";

import { getSlugPage } from "./api/main";
// eslint-disable-next-line
export default function PageSlug({ data }: any) {
  const router = useRouter();
  const { pid } = router.query;
  // eslint-disable-next-line
  console.log(pid);
  return (
    <>
      {/* eslint-disable-next-line */}
      {data &&
        data.map((value: any, key: number) => (
          <section key={key}>
            {RenderComponents(value.component, value.id)}
          </section>
        ))}
    </>
  );
}

export async function getServerSideProps({ locale, params }: any) {
  const id = params.id;
  console.log(id);
  const data = await getSlugPage(locale);

  return {
    props: {
      data: data,
    },
  };
}
