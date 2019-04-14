// Классы 

class Options {
    constructor(height, width, bg, fonSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fonSize = fonSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
        elem.textContent = 'Это новый див'
    }
}

const item = new Options(300, 500, 'red', 14, 'center');

item.createDiv()

// class Rectamgle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);

// console.log(square.calcArea());