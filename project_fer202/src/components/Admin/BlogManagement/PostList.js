import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <Link to="/posts/add">Thêm bài viết mới</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <Link to={`/posts/edit/${post.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
