import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/posts/${id}`, post).then(() => {
      history.push('/posts');
    });
  };

  return (
    <div>
      <h1>Sửa bài viết</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Nội dung</label>
          <textarea name="content" value={post.content} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default EditPost;
