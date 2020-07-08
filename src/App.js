import './App.scss';
import React, { lazy,Suspense } from 'react';
import {BrowserRouter as Router,Route,} from 'react-router-dom';
import Navbar from './components/Navbar'

const Home = lazy(()=>
  import('./components/Home')
)

function App() {
  const pages = 
    {
      pageLink:'/',
      view:Home,
      displayName:'Home',
    }
      
  return (
    <div className="App">
      <Suspense fallback={<div />}>
      <Router>
        <Navbar/> 
        <Route path={pages.pageLink} render={({match}) => <pages.view />} />
      
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
