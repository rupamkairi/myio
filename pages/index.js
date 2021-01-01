import Head from 'next/head';
import {useState, useEffect} from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data.message);
    })
  }, [setData])

  return (
    <div >
      <Head >
        <title>Myio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="py-2 text-2xl text-center">{data}</p>
    </div>
  )
}
