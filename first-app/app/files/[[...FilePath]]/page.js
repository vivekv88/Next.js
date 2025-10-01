
async function Files({ params }) {
    const { FilePath } = await params;
  return (
    <div>
      Welcome back !!! <i>/{FilePath?.join('/')}</i>
    </div>
  )
}

export default Files