customSelect('select');

const picker = new easepick.create({
    element: document.getElementById('date'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: 'DD.MM.YY'
  });



// time - по таску 1 время
function updateDateTime() {
  const now = new Date();
  const options = {
      weekday: 'long', // e.g., 'Friday'
      year: 'numeric',
      month: 'long',   // e.g., 'October'
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // 24-hour format; set to true for 12-hour format
  };
  
  const dateTimeString = now.toLocaleString('en-US', options);
  document.getElementById('currentDateTime').textContent = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to set the date and time immediately on page load
updateDateTime();



// login 
const profileBtn = document.getElementById('profile-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const formOpenBtn = document.querySelector("#login-btn"),
    home = document.querySelector(".home"),
    formCloseBtn = document.querySelector(".form-close");

// Переключение видимости меню профиля
profileBtn.addEventListener('click', () => {
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block'; // Переключаем видимость
});

// Закрыть меню, если кликнули вне его
window.addEventListener('click', (event) => {
    if (!profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none'; // Скрыть меню, если кликнули вне
    }
});

// Открытие формы логина и закрытие выпадающего меню
formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
    dropdownMenu.style.display = 'none'; // Закрыть меню профиля
});

// Закрытие формы логина
formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
});



