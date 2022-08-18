document.querySelectorAll('.question-title').forEach(item => {
    item.addEventListener('click', function(){
        this.closest('.question').classList.toggle('opened');
    })
})

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.header__menu').classList.add('open');
})

document.querySelector('.header__menu .close').addEventListener('click', function(){
    document.querySelector('.header__menu').classList.remove('open');
})