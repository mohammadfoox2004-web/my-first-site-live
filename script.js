// 🌟 1. تعريف المتغيرات أولاً (الترتيب مهم جداً!) 🌟

// متغيرات الوضع الداكن
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
// يجب أن يأتي modeIcon بعد toggleButton
const modeIcon = toggleButton.querySelector('i'); 

// متغيرات زر التواصل
const btn = document.getElementById('mybtn');


// ----------------------------------------------------
// 2. مستمعات الأحداث (Event Listeners)

// كود زر التواصل (alert)
btn.addEventListener('click', function() {
    alert('تم استلام رسالتك , سنرد عليك في اقرب وقت ممكن');
    btn.style.backgroundColor = "#27ae60";
    btn.textContent = "تم الارسال";
});


// كود الوضع الداكن (تبديل الأيقونات)
toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // تبديل الأيقونات
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
        