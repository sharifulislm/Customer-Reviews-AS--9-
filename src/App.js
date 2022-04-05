
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dasboard from './components/Dasboard/Dasboard';
import HomePage from './components/HomePage/HomePage';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';


import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';




function App() {
  const [RevewsCard, setRevewsCard]=useState([]);

  useEffect(() => {
  fetch('data.json')
  .then(res => res.json())
  .then (data => setRevewsCard(data));


  } ,[])



  return (

<>
<Header/>



 <Routes>
 <Route path='/' element={<HomePage RevewsCard={RevewsCard} />}/>
 <Route path='/Reviews' element={<Reviews RevewsCard={RevewsCard}/>}/>
 <Route path='/Dasboard' element={<Dasboard/>}/>
 <Route path='/Blogs' element={<Blogs/>}/>
 <Route path='/About' element={<About/>}/>
 <Route path='*' element={<NotFound/>}/>

 

 </Routes>

<Footer></Footer>

 </>


   
  );
}

export default App;
