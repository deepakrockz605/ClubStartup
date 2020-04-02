import React from 'react';
import Layout from './Common/Layout';
import RestrictedContainer from './Common/RestrictedContainer';
import Header from './Components/Header';
import './App.scss';
import '../styles/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Header /> */}
        <RestrictedContainer />
      </Layout>
    </div>
  );
}

export default App;
