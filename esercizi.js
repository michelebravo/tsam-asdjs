function somma(x) {
    var sum = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] >= 0 || x.length>0) {
            sum = sum + x[i];
        } 
        else {
            return sum;
        }
    }
    return sum;
}
var a = [1, 2, 3, 4, 5];
console.log(somma(a));

function ex_1_I(x){
    return somma(x);
}




/*function somma(n) {
    var sum = 0;
    var i=0;
    var j=0;
    while (i!=n){
        if(j%2==1){
            sum+=j;
            i++;
            j+=2;
        }
        else{j++;}
    }

    return sum;
}
var n=10;
console.log(somma(n));*/






/*function media(x) {
    var sum = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] >= 0) {
            sum = sum + x[i];
        } 
        else {
            return sum;
        }
    }
    return sum/x.length;
}
var a = [1, 2, 3, 4, 5,6,7,8,9,10];
console.log(media(a));*/






/*function somma(a,b){
    var sum=0;
    if (a<b){
        var i=a;
        var n=b;
    }
    else{
        var i=b;
        var n=a;
        }
    for(i;i<n+1;i++){
        sum=sum+i;
    }
    return sum;
}

var a=5;
var b=2;
console.log(somma(a,b));*/







/*function mult(a,b){
    var per=0;
    for(i=0;i<b;i++){
        per+=a;
    }
    return per;
}

var a=2;
var b=3;
console.log(mult(a,b))*/





/*function divisione(a,b){
    var q=0;
  
    while(a-b>=0){
        var c=a-b;
        a=c;
        q++;
    }
      var r=a;
      var a=[q,r];
      return a;
}

var a=16;
var b=4;
console.log(divisione(a,b));*/


/*function mult(a,b){
    var per=0;
    for(i=0;i<b;i++){
        per+=a;
    }
    return per;
}

function pow(x,y){
    var i=0;
    var c=x;
    while(i!=y-1){
        c=mult(c,x);
        i++;
    }
    return c;
}

console.log(pow(25,4));*/


/*function inverti(a){
    var c=new Array;
    var i=a.length-1;
    for(j=0;j<a.length;j++){
        c[j]=a[i];
        i--;
    }
    return c;
}

var a=[1,2,3,4,5,6,7,8,9];
console.log(inverti(a));*/




/*function bidimensionale(a){
    n=Math.sqrt(a.length);
    b=new Array;
    for(var i=0; i<n; i++){
        b[i]=new Array;
        b[i].length=n;
         
    }
    return b;

}

var a=new Array(16);
console.log(bidimensionale(a));*/





/*function replicate(a,b){
    var c=new Array;
    for (i=0;i<b;i++){
        c[i]=a;
    }
    return c;

}

console.log(replicate(3,4));*/




/*function ordina(a){
    var pari=new Array;
    var dispari=new Array;
    var j=0;
    var k=0;
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            pari[j]=a[i];
            j++;
        }
        else{
            dispari[k]=a[i];
            k++;
        }
    }

    for(i=0;i<dispari.length;i++){
        a[i]=dispari[i];
    }
    k=0;
   for(i=dispari.length;i<a.length;i++){
       a[i]=pari[k];
       k++;
   }
   
    return a;
}

var a=[1,2,3,4,5,6];
console.log(ordina(a));*/