const supportChat = document.getElementById('supportChat');
const supportLink = document.getElementById('supportLink');
const closeChat = document.getElementById('closeChat');
const sendMessage = document.getElementById('sendMessage');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Функция для открытия чата с поддержкой
supportLink.onclick = function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    supportChat.style.display = 'block'; // Открываем чат
}

// Функция для закрытия чата
closeChat.onclick = function() {
    supportChat.style.display = 'none'; // Закрываем чат
}

// Закрытие чата при клике вне его
window.onclick = function(event) {
    if (event.target === supportChat) {
        supportChat.style.display = 'none';
    }
}

// Обработка отправки сообщения
sendMessage.onclick = function() {
    const message = chatInput.value.trim(); // Получаем текст сообщения
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message; // Добавляем текст сообщения
        chatMessages.appendChild(messageElement); // Показываем сообщение в чате
        chatInput.value = ''; // Очищаем поле ввода
        chatMessages.scrollTop = chatMessages.scrollHeight; // Прокручиваем вниз
    }
}

  