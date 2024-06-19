import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditTheater() {
  const { id } = useParams();
  const history = useHistory();
  const [theater, setTheater] = useState({
    name: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    axios.get(`/api/theaters/${id}`).then((response) => {
      setTheater(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheater({
      ...theater,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/theaters/${id}`, theater).then(() => {
      history.push('/theaters');
    });
  };

  return (
    <div>
      <h1>Sửa thông tin rạp</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên rạp</label>
          <input type="text" name="name" value={theater.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Địa chỉ</label>
          <input type="text" name="address" value={theater.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Số điện thoại</label>
          <input type="text" name="phone" value={theater.phone} onChange={handleChange} required />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default EditTheater;
