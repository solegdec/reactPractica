
import React from 'react';
import SideBar from './SideBar';
import GenresInDb from './GenresInDb.js';
import LastMovieInDb from './LastMovieInDb.js';
import ContentRowMovies from'./ContentRowMovies.js';
import ContentWrapper from'./ContentWrapper';
import NotFound from './NotFound.js';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
     
      	<div id="wrapper">
          <SideBar/>
              
        <Routes>
      	<Route path ='/ContentWrapper' element={<ContentWrapper/>}/>
        <Route path="/genres" element={<GenresInDb/>} />
        <Route path ="/last" element={<LastMovieInDb/>}/>
        <Route path ="/content" element={<ContentRowMovies/>}/>
        <Route path= "*" element = {<NotFound/>}/>

        </Routes>
        
        </div>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

