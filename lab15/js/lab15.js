// Lab 15 - Ajax
// Author: Stephen Francoeur
// Date: 6/9/2024

document.getElementById('fetchButton').addEventListener('click', function () {
    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            const responseDiv = document.getElementById('response');
            responseDiv.innerHTML = `<p>My brother under Allah</p><img src="${data.image}" alt="Yes or No Image">`;
        })
        .catch(error => {
            console.error('Error Fetching data:', error);
            document.getElementById('response').innerHTML = '<p>Sorry, something went wrong. Please try again.</p>';
        });
});