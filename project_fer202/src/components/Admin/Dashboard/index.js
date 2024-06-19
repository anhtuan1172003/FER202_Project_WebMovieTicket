import React from 'react';
import DailyRevenue from './DailyRevenue';
import MonthlyRevenue from './MonthlyRevenue';
import MovieRevenue from './MovieRevenue';
import TheaterRevenue from './TheaterRevenue';
import NewCustomers from './NewCustomers';
import TotalTicketsSold from './TotalTicketsSold';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <DailyRevenue />
      <MonthlyRevenue />
      <MovieRevenue />
      <TheaterRevenue />
      <NewCustomers />
      <TotalTicketsSold />
    </div>
  );
}

export default Dashboard;
