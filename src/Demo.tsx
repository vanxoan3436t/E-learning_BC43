import React from 'react'

 interface SwitchProps {
value:boolean ;
onChange :() => void ;

}

const Demo = (props : SwitchProps) => {
  return (
    <div onClick = {props.onChange} className={`$p`}>


    </div>
  )
}

export default Demo