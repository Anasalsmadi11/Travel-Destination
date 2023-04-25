import Header from './components/header/Header';
import Home from './components/home/Home'
import Tours from './components/tours/Tours'
import { Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// const data = require('./components/data/db.json')

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/city/:id' element={<Tours/>} />
    </Routes>
    

   </> 

  )
}

export default App;
