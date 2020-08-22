'use strict';

// Register a page visit event.
let host = window.location.hostname;
let path = window.location.pathname;
if (host && path) sendPageVisitInfo();

function sendPageVisitInfo() {
  let apiUrl = 'https://l086.herokuapp.com/api/newpageview';
  let data = { host: host, path: path };
  let postOptions = { method: 'POST', headers: {'Content-Type': 'application/json'} };

  fetch('https://ifconfig.me/ip')
    .then(response => response.text())
    .then(ip => {
      if (ip) data.ip = ip; 
      // console.log('IP:', ip);
      postOptions.body = JSON.stringify(data);
      fetch(apiUrl, postOptions)
        // .then(response => response.json())
        // .then(record => console.log('POST Success:', record))
        .catch(error => console.error('POST Error:', error));
    })
    .catch(error => console.error('GET IP Error:', error));
}