function Stack(){
<<<<<<< HEAD
    this.myarray = [];
}
var a = new Stack();

Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
Stack.prototype.popall = function (callback) {
=======
    this.myarray = []
}

Stack.prototype.push = function(e){ this.myarray.push(e); }
Stack.prototype.pop = function(){ return this.myarray.pop(); }
Stack.prototype.peek = function(){ return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

Stack.prototype.popall = function(callback) {
>>>>>>> 561c4d7f27bcc8cb9438abd82b7fe330d70f1486
    while (!this.isEmpty()){
        callback(this.pop());
    }
}
<<<<<<< HEAD
function callback(x){
    console.log(x);
}

function dec2bin(n){
   output = [];
   for(i = n; i > 0; i = (i - rest)/2){
       rest = i%2
       output.unshift(rest);
   }
   return output;
}
=======

function dec2bin(x){

    function rec(remStack, n) {
        if (n == 0) {
            return remStack;
        } else {
            remStack.push(Math.floor(n % 2));
            return rec(remStack, Math.floor(n / 2));
        }
    }

    var binaryString = '';
    rec(new Stack(), x).popAll(function(e) { binaryString += e.toString(); } )
    return binaryString;
}


>>>>>>> 561c4d7f27bcc8cb9438abd82b7fe330d70f1486
