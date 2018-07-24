import React from 'react';
import ChampionsList from './containers/ChampionsList';
import Header from './components/Header';
import Footer from './components/Footer';

const Route = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Header/>
      <ChampionsList />
      <Footer/>
    </div>
  )
}

export default Route;

