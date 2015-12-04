<<<<<<< HEAD
function merge(firstArray, secondArray){
    var result = [];
    while(firstArray.length!=0 && secondArray.length!=0){
        (firstArray[0]<=secondArray[0])?result.push(firstArray.shift()):result.push(secondArray.shift());
    }
    if(firstArray.length==0){
        result = result.concat(secondArray);
    }else if(secondArray.length==0){
        result = result.concat(firstArray);
    }
    return result;
}

function mergeSort(array){
    if(array.length == 1)
        return array;
    var a = array.slice(0,Math.floor(array.length/2));
    var b = array.slice(Math.floor(array.length/2));
    return merge(mergeSort(a),mergeSort(b));
}
=======
function merge(ar1, ar2) {
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {
        if(ar1[i1] < ar2[i2]) {
            result.push(ar1[i1]);
            i1++;
        } else {
            result.push(ar2[i2]);
            i2++;
        }
    }
    return result.concat(ar1.slice(i1)).concat(ar2.slice(i2))
}
>>>>>>> 561c4d7f27bcc8cb9438abd82b7fe330d70f1486
