import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { HomaPage } from '../pages/HomaPage';
import { Dashboard } from '../pages/Dashboard';
import { Protected } from '../assets/components/protected/protected';
import { Render } from '../pages/Render';
import { HasilSearch } from '../pages/HasilSearch';
import { MoviePopular } from '../pages/auth/MoviePopular';
import { Register } from '../pages/auth/Register';

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomaPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Render/:id' element={<Render/>}/>
      <Route path='/HasilSearch' element={<HasilSearch/>}/>
      <Route path='/PopulerMovie' element={<MoviePopular/>}/>
      <Route path='/dashboard' element={
    <Protected>
      <Dashboard/>
    </Protected>
      }/>
    </Routes>
    </BrowserRouter>
  )
}
