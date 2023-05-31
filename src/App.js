import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import Header from './components/Header';
import SectionMain from './components/SectionMain';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SectionMain />
      <Footer />
    </Provider>
  );
}

export default App;