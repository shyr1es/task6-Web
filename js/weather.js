document.getElementById('discoverBtn').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    // Show loading text
    document.getElementById('cityName').innerText = 'City: Loading...';
    document.getElementById('temp').innerText = 'Temp: --°C';
    document.getElementById('desc').innerText = 'Description: Loading...';
    document.getElementById('error').style.display = 'none';  // Hide error message

    const apiKey = '97289358dddbe6f03be907fe0848d774';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').innerText = `City: ${data.name}`;
            document.getElementById('temp').innerText = `Temp: ${data.main.temp}°C`;
            document.getElementById('desc').innerText = `Description: ${data.weather[0].description}`;
        })
        .catch(error => {
            document.getElementById('cityName').innerText = 'City: ----';
            document.getElementById('temp').innerText = 'Temp: ----°C';
            document.getElementById('desc').innerText = 'Description: ----';
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerText = error.message;
        });
});

// Display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').innerText = dateTimeString;
}

setInterval(displayCurrentDateTime, 1000);  // Update every second
displayCurrentDateTime();  // Initial call to display the current date/time