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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
      {/* <pre className="text-xs">{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
}
