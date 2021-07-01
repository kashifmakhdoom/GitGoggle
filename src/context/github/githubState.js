import React, {useEffect, useReducer} from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'

const github_client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
const github_client_key = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubState = props => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, intialState);

  useEffect(() => {
    // comment below to stop initial github user fetching
    searchUsers();

    // eslint-disable-next-line
  }, [])

  // search
  const searchUsers = async (text) => {
    setLoading()

    const { data } =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${github_client_id}&client_secret=
        ${github_client_key}`)

    dispatch({
      type: SEARCH_USERS,
      payload: data.items
    })

  }

  // clear
  const clearUsers = () => dispatch({type: CLEAR_USERS})

  // get user
  const getUser = async (username) => {
    setLoading()
    const { data } =
      await axios.get(`https://api.github.com/users/${username}?client_id=
      ${github_client_id}&client_secret=
      ${github_client_key}`)

    dispatch({
      type: GET_USER,
      payload: data
    })
  }

  // get user repos
  const getUserRepos = async (username) => {
    setLoading()

    const { data } =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
      ${github_client_id}&client_secret=
      ${github_client_key}`)

    dispatch({
      type: GET_REPOS,
      payload: data
    })
  }

  // Set Loading
  const setLoading = () => dispatch({type: SET_LOADING});

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }}>
      {props.children}
  </GithubContext.Provider>
};

export default GithubState;