import React from 'react';
import Navbar from './componets/navbar/navbar';
import Filter from './componets/filter/filter';
import Card from './componets/card/card';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Filter />
        <div className="card-group">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
