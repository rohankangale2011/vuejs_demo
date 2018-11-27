export function getDataFromServer () {
  return fetch('https://reqres.in/api/users').then(resp => {
    return resp.json()
  }).then(resp => {
    return resp
  })
}
