console.log('Client side javascript file is loaded')

const form = document.querySelector('form');
const input = document.querySelector('input');
const message = document.querySelector('#message');
const loading = document.querySelector('#loading');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = input.value;

    loading.textContent = 'loading...';
    fetch('http://localhost:3000/weather?address=' + location)
    .then((response) => {
        loading.textContent = '';
        response.json().then((data) => {
            if(!data.error) {
                loading.textContent = 'Location: ' + data.location + '. Forecast: ' + data.forecast;
            }
            else
                loading.textContent = data.error;
        });
    });
});