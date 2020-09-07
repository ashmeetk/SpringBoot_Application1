/*function sendJSON(){ 
               
            let firstName = document.querySelector('#firstName'); 
            let lastName = document.querySelector('#lastName'); 
	    let password = document.querySelector('#password'); 
	    let email = document.querySelector('#email');
               
            // Creating a XHR object; 
            let xhr = new XMLHttpRequest();
	    //let url = "http://localhost:8011/users-ws/users"; 
            let url = "http://desktop-5t7nkhl:50384/users"; 
        
            // open a connection; 
            xhr.open("POST", url, true); 
  
            // Set the request header i.e. which type of content you are sending ;
            xhr.setRequestHeader("Content-Type", "application/json"); 
  
  
            // Converting JSON data to string;
            var data = JSON.stringify({ "firstName": firstName.value, "lastName": lastName.value, "password": password.value, "email": email.value }); 
  
            // Sending data with the request;
            xhr.send(data); 
        } */

function sendJSON(){

 let firstName = document.querySelector('#firstName'); 
            let lastName = document.querySelector('#lastName'); 
	    let password = document.querySelector('#password'); 
	    let email = document.querySelector('#email');

	var url = 'http://localhost:8011/users-ws/users';
  var data = JSON.stringify({ "firstName": firstName.value, "lastName": lastName.value, "password": password.value, "email": email.value }); 
fetch(url, {
  method: 'POST', // or 'PUT'
  body: data, // data can be `string` or {object}!
  headers:{
     'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
}
