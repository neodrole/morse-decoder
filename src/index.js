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
    // write your solution here
    let decoded_msg = '';
    let msg_length = expr.length;
    let msg_sliced = [];
    for (let i=0; i<(msg_length/10); i++) {
        //console.log(i*10, i*10+10);
        msg_sliced.push(expr.slice(i*10, i*10+10));
    }
    //console.log(msg_sliced);
    msg_sliced.forEach(element => {
        if (element==='**********') {
            decoded_msg = decoded_msg + ' ';
        } else {
            
            while (element.startsWith('0')) {
                element = element.slice(1, element.length);
            }
            let element_sliced = [];
            for (let i=0; i<(element.length/2); i++) {
                element_sliced.push(element.slice(i*2, i*2+2));
            }
    
            let decoded_char = '';
            element_sliced.forEach(e => {
                if (e==='10') {
                    decoded_char = decoded_char + '.';
                }
                if (e==='11') {
                    decoded_char = decoded_char + '-';
                }
            
            });
            decoded_msg = decoded_msg + MORSE_TABLE[decoded_char];
        }
        
        
    });
    return decoded_msg;

}

module.exports = {
    decode
}