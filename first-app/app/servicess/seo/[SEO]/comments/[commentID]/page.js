
async function Comment({ params }) {
    const text = await params;
  return (
    <div>
      Welcome to read the Comment of <b>{text.SEO}</b> Number with CommentID <b>{text.commentID}</b>
    </div>
  )
}

export default Comment
