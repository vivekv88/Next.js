import Link from "next/link";

export default function Servicess() {
  console.log("Running in Next.js")
  return (
    <>
      <h1>All Services</h1>
      <p>
        <Link href="/servicess/web-dev">Web_Dev</Link>
      </p>
      <p>
        <Link href="/servicess/app-dev">App_Dev</Link>
      </p>
      <p>
        <Link href="/servicess/seo">SEO</Link>
      </p>
    </>
  );
}