"use client";
import Link from "next/link";

   // used to introduce client side functionality in next.js means it enables the log functionality in the browser


export default async function Home({searchParams,params}) {
  console.log(await searchParams)
  console.log(await params)
  return (
    <>
      <h1>Welcome to my Home.</h1>
      <Link href="/about">About</Link>{" "}
      <Link href="/servicess">Services</Link>
    </>
  );
}
