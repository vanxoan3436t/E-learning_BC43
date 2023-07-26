import React from 'react'
type Props = {
  className: string;

  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number | string) => void;
  value: string | number
}

const ButtonMouseEvent = (props: Props) => {
  return <button className={`${props.className}`} onClick={(event) => props.handleClick(event, '')}>{props.value}</button>
}

export default ButtonMouseEvent 