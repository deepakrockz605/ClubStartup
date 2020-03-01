import React from 'react';
import Layout from './Common/Layout';
import RestrictedContainer from './Common/RestrictedContainer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Layout>
            <RestrictedContainer />
        </Layout>
    </div>
  );
}

export default App;
