import Link from "next/link";

export default function AppDev() {
  console.log("Running in Next.js")
  return (
    <>
      <h1>App Development Service Page</h1>
      <Link href="/">Home</Link>
    </>
  );
}