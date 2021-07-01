import React, { useContext } from 'react'
import UserItem from './userItem'
import Spinner from '../layout/spinner'
//import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const UserList = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

    if(loading) {
      return <Spinner />
    } else {
      return (
        <div style={userStyle}>
          {users.map(user => (
            <UserItem key={user.id} item={user}/>
          ))}
        </div>
      )
    }
}

/*
UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
*/

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem'
}

export default UserList
