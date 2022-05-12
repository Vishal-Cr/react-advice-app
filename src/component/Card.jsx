import {useEffect, React,useState} from 'react'
import  './cardStyle.css';
import axios from 'axios';

import diceIconDesktop from '../assets/icon-dice.svg';
const Card = () => {
    const [advice,setAdvice]=useState('');
    const [adviceNumber,setAdviceNumber]=useState('');
   
    function fetchData(){
      const data= axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
          let dataAdvice=response.data.slip['advice'];
          let dataAdviceNumber=response.data.slip['id'];
         setAdvice(dataAdvice);
         setAdviceNumber(dataAdviceNumber);
      })
      .catch((e)=>{console.log(e)});
    }
   
     
      
      //function call on first page load.
      useEffect(()=>{
        
        fetchData(); 
        
      },[]);
     
      //clicked button function call.
      const adviceHeadText=document.querySelector('.advice_head_text');
      const adviceBodyText=document.querySelector('.advice_body_text');
      const adviceBody=document.querySelector('.advice_body_container');
      const changeAdvice=(e)=>{
      
      
        e.preventDefault();
      
        fetchData();
      
       
        adviceBody.classList.add('button-click');
        adviceHeadText.classList.add('button-click');
        adviceBodyText.classList.add('button-click');

        adviceBody.addEventListener('webkitAnimationEnd',()=>{
          adviceBody.classList.remove('button-click');
          adviceHeadText.classList.remove('button-click');
          adviceBodyText.classList.remove('button-click');
          
        })
         }

        return (
    <div className='wholeCard'>
        <div className="advice_head_container">

        <small className='advice_head_text'>ADVICE #{adviceNumber}</small>
        </div>
        <div className="advice_body_container">
        <h1 className='advice_body_text'>"{advice}"</h1>

        </div>
         <div className="divider">

         </div>
        
          <div className="diceIconContainer" onClick={changeAdvice}  id='dice_image_id'>
      <button type='submit' >

        <img src={diceIconDesktop}  alt="dice image svg"  />
      </button>
          </div>
        </div>
  )
}

export default Card