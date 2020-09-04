import React from 'react';

type PropsType = {
  state: number
  maxValue: number
  error: string
}

function Tablo(props: PropsType) {




  return (
    
        <div className={props.state===props.maxValue ? "limit" : ""} >
        <h1>{props.error ? "Некорректное значение" : props.state}</h1>
       
          </div>
  
  );
}

export default Tablo;
