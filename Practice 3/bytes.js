let convert = function(bytes) {
    let megabytes = bytes / (1024 * 1024);
    let formattedString = megabytes.toFixed(2) + " Mb";
    return formattedString;
};

let bytes = 10000;
let result = convert.call(null, bytes);

console.log(result);