import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
interface LayoutProps {
  appname?: string;
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
}

export default function Layout({
  appname,
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
      <Header appname="website_1" />
      <main className="mx-auto px-8 md:px-0 flex flex-col min-h-screen">
        {children}
      </main>
      <Footer appname="website_1" />
    </div>
  );
}

Layout.defaultProps = {
  title: "The independent Swiss IT company | ELCA",
  description:
    "Jeune et internationale, nous sommes une tribu de développeurs, ingénieurs, designers, spécialistes, analystes, architectes et consultants.",
  keywords: "word1, word2, word3, word4, word5",
};
