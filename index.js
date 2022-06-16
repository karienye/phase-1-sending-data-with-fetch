// Add your code here
const submitData = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "shiku",
      email: "shiku@gmail.com",
    }),
  };
  
  fetch("http://localhost:3000/users", submitData())
  
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("error occured");
    console.log(error.message);
  });
  console.log(submitData);