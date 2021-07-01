import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext =  useContext(GithubContext);
  const {searchUsers, clearUsers} = githubContext;

  const alertContext =  useContext(AlertContext);
  const {showAlert} = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '')
      showAlert('Please enter search text', 'warning')
    else {
      searchUsers(text)
      setText('')
    }
  }

  const onChange = (e) => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search