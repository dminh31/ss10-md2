import React, { Suspense } from 'react'
import Header from './components/Header'
import { Routes, Route, Outlet, Link, NavLink, useNavigate } from "react-router-dom"
// import Home from './components/Home'
import Price from './components/Price'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import News from './components/News/News'
import Contact from './components/Contact/Contact'
import Product from './components/Product/Product'
import NotFound from './components/NotFound/NotFound'
import Category from './components/Category/Category'
import CategoryDetail from './components/CategoryDetail/CategoryDetail'
import { lazy } from 'react'
export default function App() {
  const abc = useNavigate()
  const handleClick = () => {
    // trong dấu ngoặc truyền path vào
    abc("")
  }

  const timeOutLazy = (path, delay) => {
    return new Promise((resolve) => setTimeout(() => {
      resolve(import(path))
    }, delay))
  }
  const Lazy1 = lazy(() => timeOutLazy("./components/About/About", 3000))
  return (
    <>
      <Header />
      <Routes
        path="/"
        element={
          <>
            <Header /> <Outlet /> <Footer />
          </>
        }>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/price' element={<Price />} />
        <Route path='/features' element={<Features />} />

      </Routes>


      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>

        </li>
        <li>
          <NavLink to="/news">News</NavLink>

        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <Suspense fallback={<div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          }>
            <Lazy1></Lazy1>
          </Suspense>
        }></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/product/:idProduct' element={<Product></Product>}></Route>

        <Route path='/category' element={<Category></Category>}>
          <Route path=':categoryId' element={<CategoryDetail></CategoryDetail>}></Route>
        </Route>

        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <button onClick={handleClick}>Quay ve trang chu</button>

    </>
  )
}
