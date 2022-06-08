import React, {useState, useEffect} from 'react'

export function Clock() {
    const [date, setDate] = useState(new Date());
  
    function padStartDigit(digit) {
      return digit.toString().padStart(2, "0");
    }
  
    useEffect(() => {
     const timerId = setInterval(() => {
        setDate(new Date());
      }, 1000);
  
      return () => clearInterval(timerId);
    });

  
    return (
      <>
      <div className="clock">
        <span>{padStartDigit(date.getHeure())}: </span>
        <span>{padStartDigit(date.getMinute())}: </span>
        <span>{padStartDigit(date.getSeconde())}</span>
      </div>
      
      </>
    );
  }
  export default Clock;
