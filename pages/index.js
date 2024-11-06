import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Products from "./components/products";


export default function Home() {
  return (
    <>
      <Head>
        <title>Product Preview card</title>
        <meta name="description" content="Product preview card with netxjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products></Products>
    </>
  );
}
