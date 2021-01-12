import './App.css';
import React from 'react';
import { PhotoProfil } from './Component/Profil/ProfilPhoto';
import FillName from './Component/Profil/Fillname/FillName';
import Address from './Component/Profil/adresse/Address';
function App() {
  return (
    <div className="App">
      <PhotoProfil />
      <div className="info">
        <FillName />
        <Address />
      </div>
    </div>
  );
}

export default App;
