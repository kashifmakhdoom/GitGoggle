import React from 'react'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types';

const UserItem = (props) => {

    const {item} = props;

    return (
      <div className='card text-center'>
        <img src={item.avatar_url} 
          className='round-img' 
          style={{width: '60px'}}
          alt=''/>
        <h3>{item.login}</h3>
        <div>
          <Link to={`/user/${item.login}`} className="btn btn-dark btn-sm my-1">
            More...
          </Link>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default UserItem
