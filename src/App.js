import React from 'react';
import './App.css';
import Header from './header/header';
import BestSellers from './best-sellers/bestSellers';
import NewCollection from './newCollections/newCollection';
import ShoeSize from './shoeSize/shoeSize';
import GetInTouch from './getInTouch/getInTouch';
import Footer from './footer/footer';
function App() {
  return (
    <>
     <Header /> 
     <BestSellers />
     <NewCollection />
     <ShoeSize />
     <GetInTouch />
     <Footer />
    </>
  );
}

export default App;
