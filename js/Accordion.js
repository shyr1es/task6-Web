// Получаем элементы
const viewMoreBtn = document.getElementById('viewMoreBtn');
const moreHotels2Section = document.getElementById('more-hotels2');

// Добавляем событие клика на кнопку
viewMoreBtn.addEventListener('click', function () {
    // Проверяем, скрыта ли секция
    if (moreHotels2Section.style.display === 'none' || moreHotels2Section.style.display === '') {
        moreHotels2Section.style.display = 'grid'; // Показываем секцию как grid
        viewMoreBtn.textContent = 'View less'; // Меняем текст кнопки
    } else {
        moreHotels2Section.style.display = 'none'; // Скрываем секцию
        viewMoreBtn.textContent = 'View all'; // Возвращаем оригинальный текст
    }
});
