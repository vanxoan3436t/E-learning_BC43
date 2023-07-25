import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function PageNotFound({}: Props) {
  return (
    <div className='page-404'>
        <NavLink to="/">TRANG CHỦ</NavLink>
    </div>
  )
}