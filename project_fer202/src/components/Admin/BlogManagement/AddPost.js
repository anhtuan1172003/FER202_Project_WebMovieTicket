import React, { useState } from 'react';
import axios from 'axios';

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, content })
      .then(() => {
        setTitle('');
        setContent('');
      });
  };

  return (
    <div>
      <h1>Thêm bài viết</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Nội dung</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <button type="submit">Thêm bài viết</button>
      </form>
    </div>
  );
}

export default AddPost;
