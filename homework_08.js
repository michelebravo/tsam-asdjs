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