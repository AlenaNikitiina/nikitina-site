import { React } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

export default function App() {

  return (
      <div className='app'>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
  )
}
