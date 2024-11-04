let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode'); // Добавляем класс darkmode
    localStorage.setItem('darkmode', 'active');
    updateThemeIcon(); // Обновляем иконку
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode'); // Убираем класс darkmode
    localStorage.setItem('darkmode', 'inactive');
    updateThemeIcon(); // Обновляем иконку
};

const updateThemeIcon = () => {
    const sunIcon = themeSwitch.querySelector('img:first-child');
    const moonIcon = themeSwitch.querySelector('img:last-child');
    if (darkmode === "active") {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
};

// Устанавливаем начальное состояние темы
if (darkmode === "active") {
    enableDarkmode();
} else {
    disableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode'); // Обновляем значение
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
