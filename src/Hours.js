import React, {useState, useEffect} from 'react'

export default function Hours() {

  const [time, setTimeur] = useState(0);
  const [heure, setHeure] = useState();
  const [minute, setMinute] = useState();
  const [seconde, setSeconde] = useState();
  const [count, setCount] = useState(1);

  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }
  
  const heureValue = (e) => {
    setHeure(parseInt(e.target.value) * 3600); 
  }

  const minuteValue = (e) => {
     setMinute((parseInt(e.target.value) * 60));       
  }

  const secondeValue = (e) => {
    setSeconde(parseInt(e.target.value)); 
  }

  const Start = (event) => {
    if(isNaN(minute + seconde + heure) !== true && heure<=86400 && minute<=3540 && seconde<=59 && (heure+minute+seconde)<=86400){
      setTimeur(heure + minute + seconde);
      setCount(0)
    }
    else{
      alert("Way letieee! ")
    }
  }

  const Stop = (e) => {
    setTimeur(0);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      if(time===0){
        return () => clearInterval(timerId);
      }
       setTimeur(time => time-1)
      
     }, 1000);
     
     if(time===0 && count===0){
      setCount(count => count+1);
      alert("Tapitra lelenkie");}
     return () => clearInterval(timerId);
     
    });


  return (
    <>
      <div className='form'>
        <input type="text" placeholder='heure' id="heure" onChange={heureValue}/>
        <span className='separated'> : </span> 
        <input type="text" placeholder='min' id="minute" onChange={minuteValue}/> 
        <span className='separated'> : </span> 
        <input type="text" placeholder='sec' id="seconde" onChange={secondeValue}/> 
        <div id="result">{`${padStartDigit(Math.floor(time/3600))} : ${padStartDigit(Math.floor((time%3600)/60))} : ${padStartDigit(time%60)}`}</div>
        <div onClick={Start} id="Start">Start</div>
        <div onClick={Stop} id="Stop">Stop</div>
      </div>
    </>
  )
}
