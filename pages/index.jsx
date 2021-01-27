import React from "react";
import Head from "next/head";
import NavBar from "../components/home/NavBar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Pricing from "../components/home/Pricing";
import Footer from "../components/home/Footer";

export default function Home() {
  // const [state, setState] = useState();

  // useEffect(() => {
  //   console.log(process.env.NEXT_PUBLIC_API_HOST);
  //   fetch(process.env.NEXT_PUBLIC_API_HOST)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <Head>
        <title>MyIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
