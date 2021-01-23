import { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/general/NavBar";
import Hero from "../components/home/Hero";

export default function Home() {
  const [state, setState] = useState();

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_HOST);
    fetch(process.env.NEXT_PUBLIC_API_HOST)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>MyIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <pre className="text-xs">{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
