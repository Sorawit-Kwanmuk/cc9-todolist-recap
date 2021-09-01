import React from 'react';
import './App.css';
import AddForm from './components/AddForm';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Lists from './components/Lists';
import { ListProvider } from './contexts/ListContext';

function App() {
  return (
    <ListProvider>
      <AppContainer>
        <Header />
        <AddForm />
        <Lists />
      </AppContainer>
    </ListProvider>
  );
}

export default App;
