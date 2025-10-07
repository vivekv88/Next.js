import Link from "next/link";

export const metadata = {
  title : "About",
}

export default function About() {
  console.log("Running in Next.js")
  return (
    <>
      <h1>About Page.</h1>
      <Link href="/">Home</Link>
    </>
  );
}