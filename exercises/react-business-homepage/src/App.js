import React from 'react';
import Navbar from './Navbar';
import Info from './Info';
import List from './List';
import Images from './Images';
import Footer from './Footer';

const App = () => {
  return (
     <div>
        <Navbar />
        <Images />
        <Info />
        <List />
        <Footer />
    </div>
  )
}

export default App;
