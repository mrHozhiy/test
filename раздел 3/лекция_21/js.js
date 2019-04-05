let box = document.querySelector('.box'),
    btn = document.querySelector('button');

// let width = box.clientWidth, // ширина без скролла
//     height = box.clientHeight; // высота без скролла

// console.log(width);
// console.log(height);


// let width = box.offsetWidth, // ширина c скролла
//     height = box.offsetHeight; // высота c скролла

// console.log(width);
// console.log(height);

// let width = box.scrollWidth, // вся ширина c скролла
//     height = box.scrollHeight; // вся высота c скролла

// console.log(width);
// console.log(height);



let width = box.scrollWidth, // вся ширина c скролла
    height = box.scrollHeight; // вся высота c скролла

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);


btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + "px"
});

scrollBy(0, 200);
scrollTo(0, 200);