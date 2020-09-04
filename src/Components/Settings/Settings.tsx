import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import InputNumber from '../Input/InputNumber';
import s from './Settings.module.css'
import Button from '../Button/Button';

type PropsType = {
  setMaxValue: (value: number) => void
  error: string
  setError: (error: string) => void
  setStartValue: (value: number) => void
  setCount: (value: number) => void
  maxValue: number
  setIsChange: (isChange: boolean) => void
}


function Settings(props: PropsType) {
  const {error,maxValue,setCount,setError,setMaxValue,setStartValue,setIsChange}=props
  let [minValueLocal, setMinValueLocal] = useState(0);
  let [maxValueLocal, setMaxValueLocal] = useState(maxValue);
  
  const isError = useCallback( () => {
    if(minValueLocal<0) {
      setError("Min value не должно быть меньше 0")
    } else if (minValueLocal===maxValueLocal) {
      setError("Min value и Max value не должны быть равны")
    } else if (minValueLocal > maxValueLocal) {
      setError("Min value не должен быть больше Max value")
    } else {
      setError("")
    }
  }, [minValueLocal, maxValueLocal, setError])

  useEffect(() => {
    isError()
  }, [minValueLocal, maxValueLocal, isError])

  const onClickHandler = () => {
    setMaxValue(maxValueLocal)
    setStartValue(minValueLocal)
    setCount(minValueLocal)
    setIsChange(false)
  }

  const onChangeHandler = () => {
    setIsChange(true) 
  }

  let mainClass = [s.input]

  return (

    <div className={mainClass.join(" ")}>
      <InputNumber title={"Max value"} value={maxValueLocal} setValue={setMaxValueLocal} onChange={onChangeHandler} />
      <InputNumber title={"Min value"} value={minValueLocal} setValue={setMinValueLocal} onChange={onChangeHandler} />
      <span>{error ? error : null}</span>
      <Button title={"Set"} disabled={error!==""} onClick={onClickHandler} />
    </div>

  );
}

export default Settings;
