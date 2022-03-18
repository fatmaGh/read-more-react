import React from 'react'
import { items } from '../data'
import Article from './Article'
import '../App.css'

const Articles = () => {
  return (
    <div className='container'>
        {items.map((item) => (
            <Article item={item}/>
        ))}
    </div>
  )
}

export default Articles