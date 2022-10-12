import React, { lazy, Suspense, useState } from 'react';
import './App.css';
const Home = lazy(()=>import('./Home'));
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<h1>Please wait.......</h1>}>
          <Home />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
