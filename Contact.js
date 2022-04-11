var contactlist = JSON.parse(localStorage.getItem('contact')) || [];

var favouritelist = JSON.parse(localStorage.getItem('favorite')) || [];

function displayData(contact) {
    document.querySelector('tbody').innerHTML = '';
    contact.forEach(list => {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText = list.name;

        var td2 = document.createElement('td');
        td2.innerText = list.number;

    

      
    });
}

window.addEventListener('load', function() {
    displayData(a);
});


