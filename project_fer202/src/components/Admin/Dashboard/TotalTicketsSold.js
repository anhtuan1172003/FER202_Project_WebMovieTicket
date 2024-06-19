import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TotalTicketsSold() {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios.get('/api/tickets/total').then((response) => {
      setData(response.data.total);
    });
  }, []);

  return (
    <div>
      <h2>Tổng số vé bán ra</h2>
      <p>{data} vé</p>
    </div>
  );
}

export default TotalTicketsSold;
