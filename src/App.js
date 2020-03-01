import React from 'react';
import Layout from './App/Common/Layout';
import RestrictedContainer from './App/Common/RestrictedContainer'
import './App.scss';

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
