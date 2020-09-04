import React from 'react';
import Button from '../Button/Button';



type PropsType = {
  state: number
  inc: () => void
  reset: () => void
  maxValue: number
  startValue: number
  isChange: boolean
}

function Buttons(props: PropsType) {
  return (
    
    <div>
      <Button title={"inc"} disabled={props.state===props.maxValue || props.isChange} onClick={() => {props.inc()}} />
      <Button title={"reset"} disabled={props.state===props.startValue || props.isChange} onClick={() => {props.reset()}} />
    </div>

 
  
  );
}

export default Buttons;
