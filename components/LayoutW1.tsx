import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
interface LayoutProps {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
}

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script src="https://cdn.tailwindcss.com" defer></script>
      </Head>
      <Header appname="Website_1" />
      <main className="mx-auto lg:px-8 flex flex-col min-h-screen">
        {children}
      </main>
      <Footer appname="Website_1" />
    </div>
  );
}

Layout.defaultProps = {
  title: "The independent Swiss IT company | ELCA",
  description:
    "Jeune et internationale, nous sommes une tribu de développeurs, ingénieurs, designers, spécialistes, analystes, architectes et consultants.",
  keywords: "word1, word2, word3, word4, word5",
};
