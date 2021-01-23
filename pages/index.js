import Head from "next/head";
import NavBar from "../components/general/NavBar";
import Hero from "../components/home/Hero";

export default function Home() {
  fetch("/api/")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
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
