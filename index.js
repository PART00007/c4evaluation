document.querySelector('#form').addEventListener('submit', myFunction);

var contactlist = JSON.parse(localStorage.getItem('contactlist')) || [];

function myFunction() {
    event.preventDefault();
    var ContactObj = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
      
    };
    contactlist.push(ContactObj);
    localStorage.setItem('contactlist', JSON.stringify(contactlist));
    alert('number added successfully');
}