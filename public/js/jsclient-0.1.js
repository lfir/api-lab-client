'use strict';

// Register a page visit event.
const host = window.location.hostname;
const path = window.location.pathname;
if (host && path) sendPageVisitInfo();

function sendPageVisitInfo() {
  const apiUrl = 'https://l086.herokuapp.com/api/newpageview';
  const data = { host: host, path: path };
  const postOptions = { method: 'POST', headers: {'Content-Type': 'application/json'} };

  fetch('https://ifconfig.me/ip', { mode: 'no-cors' })
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
