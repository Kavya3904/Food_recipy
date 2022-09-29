import React from 'react';







// {title,image}
const Recipi= ({title,image,calories,incredents})=>{
    return(
      
        <div className='Appchilddiv'>
            <h1>{title}</h1>
            <ol className='ordered-list'>
                {incredents.map(incredent=>(
<li>{incredent.text}</li>
                ))}
            </ol>
            <p className='calories'>Calories:{calories}</p>
            <img src={image} alt="" className='image'/>
        </div>
       
    );
}
export default Recipi;