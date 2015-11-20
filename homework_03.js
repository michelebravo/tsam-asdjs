Array.prototype.ex_1 = function () {

    function buildUntil(a, check) {
        var b = [];
        a.every(x => {
            if (check(x)) {
                b.push(x);
                return true;
            } else {
                return false;
            }
        });
        return b;
    }

    return buildUntil(this, x => x > 0).reduce((acc, x) => acc + x, 0);
}





Array.prototype.ex_3 = function () {
        if (this.length == 0){
        return 0;
    }else{
       return this.reduce((acc,x) => acc + x,0) / this.length;
    }
}





var array = [3,5,6,1,2,7,8,9,0]; 

Array.prototype.ex_8 = function () {

    function magic(myarray, matrix) {
        matrix.unshift(myarray);
        return matrix;
    }  

    function bidimensionaleRInternal(myarray, n) {
        if (myarray.length == n) {
            return [myarray];
        } else {
            return magic(myarray.slice(0, n),
                         bidimensionaleRInternal(myarray.slice(n), n));
        }
    }

    return bidimensionaleRInternal(this, Math.sqrt(this.length));
}




Array.prototype.ex_9 = function() {
    var result = [];
    
    this.forEach(x => {
        result.unshift(x);
    });

    return result;
}





Array.prototype.ex_11 = function () {
    return this.filter(x => x%2!=0).concat(this.filter(x => x%2==0));
}


