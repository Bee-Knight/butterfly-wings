import errors from './commonerror'

export function get(url, options) {
  let {
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    timeout = 5000
  } = options

  return fetch(url, {
    method: 'GET',
    timeout: timeout,
    headers: headers
  }).then(response => handleResponse(response)
  ).then(data => data)
    .catch(error => {
      return error
    })
}

export function post(url, options) {
  let {
    method = 'POST',
    params = {},
    data = {},
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    timeout = 5000
  } = options

  return fetch(url, {
    method: method,
    params: params,
    body: JSON.stringify(data),
    timeout: timeout,
    headers: headers
  }).then(response => handleResponse(response)
  ).then(data => data)
    .catch(error => {
      return error
    })
}

function handleResponse(response) {
  if (response && response.status === 200) {
    return response.json()
  } else {
    return {error: {message: errors.getCommonNetworkErr()}}
  }
}
