import React, { ChangeEvent } from 'react';

type PropsType = {
  //setMaxValue: (value: number) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  title: string
  value: number
  setValue?: (value: number) => void
  minValue?: number
}


function InputNumber(props: PropsType) {
  const { title, value, onChange, setValue, minValue = -1 } = props
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setValue && setValue(+e.currentTarget.value);
  }
  return (
    <>
      <label>
        <span>{title}</span>
        <input type="number"
          min={minValue}
          value={value}
          onChange={onChangeHandler} />
      </label>
    </>
  );
}

export default InputNumber;
