import React from 'react';
import s from './Button.module.css'


type PropsType = {
  onClick?: () => void
  disabled?: boolean
  title: string
}

function Button(props: PropsType) {
  const {disabled,title,onClick}=props

  const onClickHandler = () => {
    onClick && onClick()


  }

  let mainClass = [s.button]


  return (

    <button className={mainClass.join(" ")} 
            onClick={onClickHandler}
            disabled={disabled} >
      {
        title
      }
    </button>

    //<button disabled={props.state===5} onClick={() => {props.inc()}} className='inc' >inc</button> 
    //<button disabled={props.state===0} onClick={() => {props.reset()}} className='reset'  >reset</button>


  );
}

export default Button;
