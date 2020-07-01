import React, { lazy,Suspense } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

const Navbar = lazy(()=>
  import('./components/Navbar')
)
function App() {
  const pages = 
    {
      pageLink:'/Navbar',
      view:Navbar,
      displayName:'Navbar',
      
    }
  
  return (
    <div className="App">
      <Suspense fallback={<div />}>
      <Router>
        <div>
      <Route path={pages.pageLink} render={({match}) => <pages.view />} />
      </div>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
