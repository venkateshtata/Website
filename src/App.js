import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cover from './components/Cover';
import VisionSection from './components/VisionSection';
import BotSection from './components/BotSection';
import Topic from './components/Topic';
// import Hr from './components/Hr';
import PrintingSection from './components/PrintingSection';
import IPSSection from './components/IPSSection';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Cover/>
      <Topic text="Our Technologies"/>
      <VisionSection/>
      <BotSection/>
      <PrintingSection/>
      {/* <IPSSection/> */}
      <Team/>
      <Footer/>
     
      
    </div>
  );
}

export default App;
