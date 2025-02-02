import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
  return ( 
    <div className="blog-list">
    <h2>{title}</h2>
      <div className="container-blog">
        {blogs.map((blog)=> (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className="blog-preview">
              <h2>{blog.title}</h2>
              <p>Written by: {blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
   );
}
 
export default BlogList;