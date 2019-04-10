// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    // let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    // box.addEventListener('touchmove', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchmove');
    //     console.log('Red box: ' + e.touches[0].pageX);
    // });
    
    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchend');
    // });



                                                    // Регулярные выражения

    // new RegExp('pattern', 'flags');
    // /pattern/


    // let ans = prompt('введите ваше имя');

    // let reg = /n/i;

    // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));
    
    // флаги
    // i вне регистра
    // g  глобально
    // m многострочность

    // классы символов
    // \d все цифры  \D не цивры
    // \w все слова  \W не слова
    // \s все пробелы \S не пробелы

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, '*'));
    // alert('12-34-56'.replace(/-/g, ':'));
});