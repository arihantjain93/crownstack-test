import axios from 'axios';

const API_URL = 'https://xyz/com';

function checkStatus(response, fullData) {
  const data = response.data;
  if (data.statusCode >= 200 && data.statusCode < 300 && !data.errorMessage) {
    if (fullData) {
      return data;
    }
    return data.result;
  }

  const error = new Error(data.errorMessage);
  error.response = response;
  throw error;
}

function checkAuth(error) {
  if (error.response) {
    if (error.response && error.response.status === 401) {
      document.getElementById('logout').click();
    } else {
    // this part is to let the saga take care of the error
      const { data } = error.response;
      const err = new Error(data.errorMessage);
      err.response = error;
      throw err;
    }
  } else {
    throw new Error('network');
  }
}

export function getRequest(path, data) {
  const getOptions = {
    url: API_URL + path,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(getOptions)
    .then(checkStatus)
    .catch(checkAuth);
}

export function postRequest(path, data) {
  const postOptions = {
    url: API_URL + path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(postOptions)
    .then(checkStatus)
    .catch(checkAuth);
}