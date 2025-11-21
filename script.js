// 🌟 كود الوضع الداكن فقط 🌟

// تعريف المتغيرات
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const modeIcon = toggleButton.querySelector('i'); 

// مستمع حدث الضغط (Click Listener)
toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // تبديل الأيقونات (شمس ☀️ / قمر 🌙)
    if (body.classList.contains('dark-mode')) {
        // الوضع الداكن: إظهار القمر
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        // الوضع الفاتح: إظهار الشمس
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
});