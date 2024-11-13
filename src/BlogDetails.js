import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Corrected import
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  const [blog, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch('https://6530e6096c756603295f481c.mockapi.io/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    });
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setIsPending(true);
      setError(null);
      
      try {
        const response = await axios.get(`https://6530e6096c756603295f481c.mockapi.io/blogs/${id}`);
        setBlog(response.data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
      }
      setIsPending(false);
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="blog-details">
      {isPending && <div>Hang tight, we’re getting things ready😀! ....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="Blog-details-inner">{blog.title}</h2>
          <div>{blog.body}</div>
          <p className="blog-details-para">
            <span className="writer-name">Author :-</span> {blog.author}
          </p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
