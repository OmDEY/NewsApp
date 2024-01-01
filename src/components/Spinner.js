import React, { Component } from 'react'
import spinner from './Spinner-5.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={spinner} alt="loading" />
    </div>
  )
}
