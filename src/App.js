import React from 'react';
import './App.css';
import BookList from './BookList';
import BookData from './BookData';
import CardBook from './CardBook';
    function App(){
      return(
        <div className='App'>
          <BookList />
          <BookData />
          <CardBook />
        </div>
      )
    };

export default App;   

