import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const NavBar = (props) => {
  const { icon, title } = props
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>
            <i className='fas fa-search' />
            &nbsp;Search
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <i className='fas fa-user' />
            &nbsp;About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

NavBar.defaultProps = {
  title: 'Gitgoggle',
  icon: 'fab fa-github',
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default NavBar
