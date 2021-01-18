import Head from "next/head";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Myio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
    </div>
  );
}
