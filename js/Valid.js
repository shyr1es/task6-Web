document.getElementById('bookingForm').addEventListener('submit', function(event) {
    let formIsValid = true;

    // Получаем все поля
    const locationInput = document.getElementById('location');
    const dateInput = document.getElementById('date');

    // Сообщения об ошибке
    const locationError = document.getElementById('locationError');
    const dateError = document.getElementById('dateError');

    // Сбрасываем ошибки перед проверкой
    locationError.style.display = 'none';
    dateError.style.display = 'none';

    // Проверка поля Location
    if (locationInput.value.trim() === '') {
        locationError.style.display = 'block';
        formIsValid = false;
        console.error('Error: The "location" can not be empty   ')
        
    }

    // Проверка поля Date
    if (dateInput.value.trim() === '') {
        dateError.style.display = 'block';
        formIsValid = false;
        console.error('Error: The "date" field can not be empty')
    }

    // Если форма не валидна, предотвращаем отправку
    if (!formIsValid) {
        event.preventDefault();
    }else{
        console.log("The form has been successfully submitted",{
            location: locationInput.value,
            date: dateInput.value
        }); 
        alert('Форма успешно отправлена!'); 
    }
});


// FOOTER email_Valid
const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');

inputSubscribe.addEventListener('input', () => {
    if (inputSubscribe.value.trim() !== '') {
        label.classList.add('subscribe__label--top');
    } else {
        label.classList.remove('subscribe__label--top');
    }
});