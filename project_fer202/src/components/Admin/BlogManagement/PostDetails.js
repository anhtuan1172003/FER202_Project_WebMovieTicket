import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chi tiết bài viết</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;
