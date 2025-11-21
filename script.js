 const btn =document.getElementById('mybtn');
        btn.addEventListener('click',function() {
            alert('تم استلام رسالتك , سنرد عليك في اقرب وقت ممكن');
            btn.style.backgroundColor="#27ae60";
            btn.textContent="تم الارسال";
});
        const togglebutton = document.getElementById('mode-toggle');
        const body = document.body;
        
        togglebutton.addEventListener('click', function(){
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')){
            togglebutton.textContent='Dark mode';
        }else{
            togglebutton.textContent='Light mode';
        }
        });