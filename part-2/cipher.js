const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function createKey(){
    let newAlphabet = alphabet.slice();
    let key = [];
    let currIndex = newAlphabet.length;
    while(currIndex > 0){
        ranIndex = Math.floor(Math.random() * currIndex);
        key.push(newAlphabet.splice(ranIndex,1)[0]);
        currIndex--;
    }
    return(key);
}

function cipherEncrypt(str, key){
    encStr = [];
    for(let i = 0; i < str.length; i++){
        encStr.push(key[alphabet.findIndex(letter => letter === str[i].toUpperCase())])
    }
    return encStr.join('')
}

function cipherDecrypt(str, key){
    decStr = [];
    // console.log(key);
    for(let i = 0; i < str.length; i++){
        decStr.push(alphabet[key.findIndex(letter => letter === str[i].toUpperCase())])
    }
    return decStr.join('');
}

let newKey = createKey();
// console.log(newKey)
// console.log(cipherEncrypt('Hello',newKey));
console.log(cipherDecrypt(cipherEncrypt('hello',newKey),newKey));