const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const dot = '10';
    const dash = '11';
    let splitString = expr.split('**********'); //разделение входящей строки на массив, разделенный по пробелу;
    let result = '';
    let decodedChar = '';
    let codedChar = ''; //буква из точек и тире
    let binaryChar = ''; //буква из 10 символов
    let chunk = ''; //часть буквы из двух символов
    let decodedWord = ''

    for (let i = 0; i < splitString.length; i++) { //цикл проходится по каждому элементу массива (закодированному слову)
        for (let n = 0; n < splitString[i].length; n += 10) { //в каждом элементе массива (закодированном слове) проходится по каждым десяти символам, которые равные одной букве
            binaryChar = splitString[i].slice([n], [n + 10]); // буква, состоящая из десяти 0 и 1
            
            for (let k = 0; k < binaryChar.length; k+= 2) { //цикл, который проходится по каждым двум 0 и 1 и возвращает точку или тире;
                chunk = binaryChar.slice([k], [k + 2]);
                if (chunk === dot) { codedChar += '.' }
                else if (chunk === dash) { codedChar += '-' }
                else { codedChar = codedChar }
            } //возвращает букву;
            
            for (let key in MORSE_TABLE) {
                if (key === codedChar) {
                decodedChar = MORSE_TABLE[key];
            } 
        }  
            decodedWord += decodedChar;
            codedChar = ''

        } result = result + decodedWord + ' ';
        decodedWord = ''// возвращает слово
    } return result.trim() 
}

module.exports = {
    decode
}


