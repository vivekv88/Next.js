import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { SEO } = await params;
  return {
    title: `SEO ${SEO}`,
  }
}

async function Seo({ params }) {
  const { SEO } = await params;
  if(!/^\d+$/.test(SEO)){
    notFound();
  }
  return (
    <div>
      SEO Optimisation <b>{SEO}</b>
    </div>
  )
}

export default Seo
