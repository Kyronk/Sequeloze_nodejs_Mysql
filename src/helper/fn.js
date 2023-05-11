




// tạo code
// ví dụ từ "xin chao viet nam" => "xcvn" or "xichvina"
export const generateCode = (value) => {
    let outPut = '';
    value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').forEach(item => {
        // outPut += item.charAt(0);
        outPut += item.charAt(0) + item.charAt(1);
    });

    return outPut.toUpperCase()  + value.length;
}


// console.log(generateCode('xin chào việt nam'));