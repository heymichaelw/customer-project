// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  var url = 'https://randomuser.me/api/?results=12';
  var customerList = document.querySelector('.customers');
  var customer;
  var customerArray = [];

  fetch(url).then((resp) => resp.json())
  .then(function(data){
    customerArray = data.results;
    var heading = document.createElement('h3');
    heading.textContent = 'INTERNAL COMPANY DIRECTORY';
    customerList.appendChild(heading);
    var customerBody = document.createElement('div');
    customerBody.className = 'customer-body';
    customerList.appendChild(customerBody);
    for (var i = 0; i < customerArray.length; i++) {
      customer = customerArray[i];
      var customerDiv = document.createElement('div');
      customerDiv.className = 'customer-div';
      customerBody.appendChild(customerDiv);
      var customerPic = document.createElement('img');
      customerPic.className = 'customer-pic';
      customerPic.src = customer.picture.large;
      customerDiv.appendChild(customerPic);
      var customerInfo = document.createElement('div');
      customerDiv.appendChild(customerInfo);
      var customerName = document.createElement('span');
      customerName.className = 'customer-name';
      customerName.textContent = customer.name.first + ' ' + customer.name.last;
      customerInfo.appendChild(customerName);
      var customerEmail = document.createElement('span');
      customerEmail.className = 'customer-email';
      customerEmail.textContent = customer.email;
      customerInfo.appendChild(customerEmail);
      var customerAddress = document.createElement('div');
      customerAddress.className = 'customer-address';
      customerInfo.appendChild(customerAddress);
      var street = document.createElement('span');
      street.textContent = customer.location.street;
      customerAddress.appendChild(street);
      var city = document.createElement('span');
      city.textContent = customer.location.city + ' ' + customer.location.state + ' ' + customer.location.postcode;
      customerAddress.appendChild(city);
      var number = document.createElement('span');
      number.textContent = customer.phone;
      customerAddress.appendChild(number);
    }
  }
);



})();
