import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ComboManagement() {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    axios.get('/api/combos').then((response) => {
      setCombos(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Quản lý combo</h1>
      <Link to="/combos/add">Thêm combo mới</Link>
      <ul>
        {combos.map((combo) => (
          <li key={combo.id}>
            {combo.name} - {combo.price} VND
            <Link to={`/combos/edit/${combo.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComboManagement;
