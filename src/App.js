import './App.css';
import React from 'react';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App" style ={{background :'#150050'}}>
      <MovieList/>
    </div>
  );
}
export default App;