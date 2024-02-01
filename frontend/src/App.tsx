import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Chat from './pages/Chat.tsx'
import NotFound from './pages/NotFound.tsx'


function App() {

  return (
    <> 
      <main>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
          
          
        </Routes>
      </main>
    </>
  )
}

export default App
