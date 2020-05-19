export const getHeroes = () =>{
  return fetch('http://localhost:3000/heros')
    .then(r => r.json())
    .then(obj => {
      return obj
    })
}

export const getArtifacts = () =>{
  return fetch('http://localhost:3000/artifacts')
  .then(r => r.json())
  .then(obj => obj)
}




 export const login = (username,password) =>{
  return fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: username, password: password })
    })
      .then(r => {
        if (!r.ok) {
          alert('u no get in ')
          throw r
        }
        return r.json()
      }
      )
 }

 export const autoLogin = () =>{
   return fetch("http://localhost:3000/autologin", {
    credentials: "include"
  })
    .then(r => {
      if (!r.ok) {
        throw r
      }
      return r.json()
    })
    .catch(console.error)
 }