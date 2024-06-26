import React from 'react'
import * as N from './Styles'
import { Link } from "react-router-dom";
import {ShoppingCart} from 'phosphor-react'

export const NavBar = () => {
  return (
    <N.NavBar>
        <N.logo>
          <h3>ChicCloset</h3>
        </N.logo>

        <N.Links>
            <Link to='/'>Shop</Link>
            <Link to='/cart'><ShoppingCart size={32}/></Link>
        </N.Links>
    </N.NavBar>
  )
}
