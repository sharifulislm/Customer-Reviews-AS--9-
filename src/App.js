
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dasboard from './components/Dasboard/Dasboard'


import Header from './components/Header/Header';
import Home from './components/Home/Home';




function App() {
  return (
    <div className="">
<Header> </Header>
<Home></Home>
 <Routes>
 <Route path='/' element="{<Home/>}"> </Route>
 <Route path='/Dasboard' element="{<Dasboard>}"> </Route>
 <Route path='/Reviews' element="<{Reviews/>}"> </Route>
 <Route path='Blogs' element="{<Blogs}"></Route>
 

 </Routes>


    </div>
  );
}

export default App;
