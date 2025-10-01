
async function Comments({ params }) {
    const { SEO } = await params;
    console.log(SEO)
  return (
    <div>
      All Comments on <b>{SEO}</b> page
    </div>
  )
}

export default Comments
