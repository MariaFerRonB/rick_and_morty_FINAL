import './App.css';
import Cards from '../src/components/Cards/Cards';
import Nav from './components/Nav/Nav'
import About from "../src/components/About/About"
import Detail from './components/Detail';
import Form from "./components/Form"
import {useState, useEffect} from 'react';
import axios from 'axios'
import {Route,Routes, useLocation, useNavigate} from 'react-router-dom'
import Favorites from './components/Favorites';

const URL = 'http://localhost:3001/rickandmorty/login';
// const email = "fernanda@gmail.com"
// const password  = "123asd"


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access,setAccess] =useState(false);

   //le enviamos la info al servidor
   const login = async (userData) => {

      try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch(error){
         console.log(error.message)
      }
   }


   useEffect (() => {
      !access && navigate('/');
   }, [access])

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !==id)
         setCharacters(charactersFiltered)
   }
    const onSearch = async (id) => {
      try {
      const {data} = await axios (`http://localhost:3001/rickandmorty/character/${id}`)

      if(data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
      } catch(error) {
         alert('¡No hay personajes con este ID!')

      }
    } 

   return (

      <div className='App'>
         {
         location.pathname !== "/" 
         ? <Nav onSearch={onSearch} setAccess={setAccess}/>
         : null
         }
         <Routes>
           
            <Route path ="/home" element= { <Cards characters={characters} onClose={onClose}/>}/>
            <Route path ="/About" element ={<About/>} />
            <Route path ="/favorites" element = {<Favorites/>} />
            <Route path ="/detail/:id" element ={<Detail/>} />
            <Route path ="/" element ={<Form login ={login}/>}/>
           
         </Routes>
      </div>
   );
}

export default App;
