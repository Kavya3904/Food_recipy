import React , {useEffect, useState} from 'react';
import './App.css';

import Recipi from './Recipie';
const App = ()=>{
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e484bfcd1msh2be44a2e0062a0fp16306djsnfba5cf1df642',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};
// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${App_ID}&app_key=${APP_Key}
// https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options
 const App_ID='ff09e799';
const APP_Key='e2f90d7bcb7da7e19397e6d2f3445109'

 
 
const[recipes ,setRecipies] = useState([])
 const[search,setSearch]=useState('');
 const [query, setquery]=useState('chicken')

 useEffect( () =>{
getrecipy()
 },[query])
 
 const getrecipy = async()=>{
  const respons = await fetch(` https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${App_ID}&app_key=${APP_Key}`   )

const data = await respons.json();
setRecipies(data.hits)


}
const updatesearch = e =>{
setSearch(e.target.value)

}

const getsearch = e =>{
  e.preventDefault();
  setquery (search);
  setSearch('')
}

console.log(recipes)
 return(

    
    <div className="App">
    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" width='100%'  alt="" />
<form onSubmit={getsearch} className="search-form">
<input type="text" className="search-input"  value={search} onChange={updatesearch}/>
<button type="Submit"  className="search-btn" >Search</button>
</form>
<div className="App1" >
{recipes.map(recipe => (

  <Recipi 
  key={recipe.recipe.label}
  title={recipe.recipe.label} 
  calories={recipe.recipe.calories} 
   image={recipe.recipe.image}
   incredents={recipe.recipe.ingredients} />
  
))}</div>
    </div>
  )
}

export default App;
