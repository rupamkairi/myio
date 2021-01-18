import Head from "next/head";
import NavBar from "../components/general/NavBar";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
    </div>
  );
}
