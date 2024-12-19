import React from 'react'
import * as F from './Styles'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <F.Footer>
        <F.Links>
            <Link to='https://www.linkedin.com/in/andersonvitor1801/' target='_blank'> Design by and</Link>
        </F.Links>
    </F.Footer>
  )
}
