import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryManagement() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('/api/countries').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Quản lý quốc gia</h1>
      <Link to="/countries/add">Thêm quốc gia mới</Link>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            {country.name}
            <Link to={`/countries/edit/${country.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryManagement;
