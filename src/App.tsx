import './App.css'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Country from './components/Country'

function App () {


  return (
      <div className='app'>    
     <NavBar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/alpha/:code' element={<Country/>}/>
     </Routes>
      </div>
  )
}

export default App
