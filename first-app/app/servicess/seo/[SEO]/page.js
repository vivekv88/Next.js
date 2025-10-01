
async function Seo({ params }) {
    const { SEO } = await params;
  return (
    <div>
      SEO Optimisation <b>{SEO}</b>
    </div>
  )
}

export default Seo
