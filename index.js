// Add your code here
function submitData (name, email){
  const submission = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    })
}
  return fetch("http://localhost:3000/users", submission)
  
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    return document.body.innerHTML = json.id;
  })
  .catch(function (error) {
    document.body.innerHTML = error.message
    
  })
}
