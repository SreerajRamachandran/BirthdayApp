import {React,useState} from 'react'
import './Home.css';
import List from '../List/List';
import { data } from '../../StaticData/data';
function Home() {
  const [people, setPeople] = useState(data)
  return (
    <div className='container'>
   <h3>
    {people.length} BirthDay'S Today
   </h3>
   <List people={people}/>
    <button onClick={()=>setPeople([])}>clear all</button>
  </div>
  )
}

export default Home