import './App.css'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Country from './components/Country'
import useLocalStorage from './useLocalStorage'


function App () {

  const [dark,setDark]=useLocalStorage('dark',false)

  return (
      <div className='app'>    
     <NavBar Dark={dark} SetDark={setDark}/>
     <Routes>
      <Route path='/' element={<Home Dark={dark}/>}/>
      <Route path='/alpha/:code' element={<Country Dark={dark}/>}/>
     </Routes>
      </div>
  )
}

export default App
