function convertToRoman(num) {
    let numStr = [...num.toString()].reverse();
    let len = numStr.length;
    
    let thou = len >= 4 ? getThou(numStr[3]) : "";
    let hund = len >= 3 ? getHund(numStr[2]) : "";
    let tens = len >= 2 ? getTens(numStr[1]) : "";
    let ones = getOnes(numStr[0]);
    
    let roman = thou + hund + tens + ones;
    return roman;
}

function getThou(num) {
    let int = parseInt(num);
    if (int == 0 || isNaN(int)) return "";
    return "M".repeat(int);
}

function getHund(num) {
    let int = parseInt(num);
    if (int == 0 || isNaN(int)) return "";
    if (int < 4) return "C".repeat(int);
    if (int == 4) return "CD";
    if (int == 9) return "CM";
    return `D${"C".repeat(int - 5)}`;
}

function getTens(num) {
    let int = parseInt(num);
    if (int == 0 || isNaN(int)) return "";
    if (int < 4) return "X".repeat(int);
    if (int == 4) return "XL";
    if (int == 9) return "XC";
    return `L${"X".repeat(int - 5)}`;
}

function getOnes(num) {
    let int = parseInt(num);
    if (int == 0 || isNaN(int)) return "";
    if (int < 4) return "I".repeat(int);
    if (int == 4) return "IV";
    if (int == 9) return "IX";
    return `V${"I".repeat(int - 5)}`;
}

// IV
console.log(convertToRoman(9));
// DCCLXXXII
console.log(convertToRoman(782));
// MMXCIX
console.log(convertToRoman(2099));
