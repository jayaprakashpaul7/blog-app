// Write your JS code here
const BlogItem = props => {
  const {blogPost} = props
  const {title, description, publishedDate} = blogPost
  return (
    <li className="blog-item">
      <div className="blog-details">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
