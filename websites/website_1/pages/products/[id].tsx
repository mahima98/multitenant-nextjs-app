import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function productPage() {
  const router = useRouter();

  const productName = router.query.id;
  const slug = (router.query.slug as string[]) || [];
  // console.log(productName);

  return (
    <>
      <Layout title="products">
        <div className="flex flex-col w-full justify-center items-center">
          product name : {productName}{" "}
        </div>
      </Layout>
    </>
  );
}
