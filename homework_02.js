<<<<<<< HEAD
function sumuntilnegF(myarray){
    var tot=0;
    myarray.every(function(x){
        if(x>0){
            tot+=x;
        }
        return x>0;
=======
/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function sumuntilnegF(myarray) {
    var tot = 0;
    myarray.every( x => { 
        if (x > 0) {
            tot += x;
        }
        return x > 0; 
>>>>>>> 561c4d7f27bcc8cb9438abd82b7fe330d70f1486
    });
    return tot;
}

<<<<<<< HEAD
function sumuntilnegF2(myarray){
    var tmparray=[];
    myarray.every(x =>{
        if(x>0){
            tmparray.push(x);
        }
        return x>0;
    });
    return tmparray.reduce((acc,x) => acc+x, 0 );
}


function ex_1_F(x){
    return sumuntilnegF(x);
}





function range(n){
    a=[];
    for(var i=0;i<n;++i){
        a[i]=i;
    }
    return a;
}

function sumdispari(n){
    return range(n).map(x =>2*x+1).reduce((acc,x) => acc+x);
}

function ex_2_F(n){
    return sumdispari(n);
}



function media(n){
    if(n.length==10){
    var sum=0;
    n.forEach(x => sum+=x);
    return sum/n.length;
    }
    else return console.log('ERRORE:elementi diversi da come previsto');
}

function ex_3_F(n){
    return media(n);
}


function somma(a,b){
    
    var c=[];
    if(a>b){
       
        for(i=0;i<=a-b;i++){
            c[i]=b+i;
        }
      return c.reduce(function(x,y){return x+y}, 0);
    }
    if(a<b){
       
        for(i=0;i<=b-a;i++){
            c[i]=a+i;
            
        }
       return c.reduce(function(x,y){return x+y}, 0);
    }
   
   
     if(a==b)
        return a+b;
    
}

function ex_4_F(a,b){
    return somma(a,b);
}


function mult(a,b){
    if(a<0 || b<0){ return console.log('numeri negativi');}

    var c=[];

    for(i=0;i<b;i++){
        c[i]=a;
    }

    return c.reduce((x,y) => x+y, 0);
}


function ex_5_F(a,b){
    return mult(a,b);
}



function pow(x,y){
     if(x<0 || y<0){ return console.log('numeri negativi');}

     var c=[];

    for(i=0;i<y;i++){
        c[i]=x;
    }

    return c.reduce((x,y) => mult(x,y) ,1);

}


function ex_7_F(x,y){
    return pow(x,y);
}


function inverti(a){
    var z=[];
    a.every(i => z.unshift(i) );
    return z;
}


function ex_9_F(a){
    return inverti(a);
}



function replicate(a,n){
    var c=[];
    for (i=0;i<n;i++){
        c.push(a);
    }
    return c;
}

function ex_10_F(a,n){
    return replicate(a,n);
}



function riordina(a){
    var pari=[];
    var dispari=[];
    a.every(i=> {
        if (i%2==0){
            pari.push(i);
        }else{
            dispari.push(i);
        }
        return true;
    });
    var finale=dispari.concat(pari);
    return finale;

}


function ex_11_F(a){
    return riordina(a);
}




=======
function sumuntilnegF2(myarray) {
    var tmparray = [];
    myarray.every( x => { 
        if (x > 0) {
            tmparray.push(x);
        }
        return x > 0; 
    });
    return tmparray.reduce((acc, x) => acc + x, 0);
}

function buildUntil(myarray, check) {
    var tmparray = [];
    myarray.every( x => { 
        if (check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}

function sumuntilnegF3(myarray) {
    return buildUntil(myarray, x => x > 0).reduce((acc, x) => acc + x, 0);
}




// Per Tiziano
function ex_1_I(x) {
    return sumwhileneg(x);
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}

function ex_1_F(x) {
    return sumuntilnegF(x);
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function range(n) {
    a = [];
    for(var i = 0; i < n; ++i) {
        a[i] = i;
    }
    return a;
}

function sumOddRF(n) {
    return range(n).map(x => 2 * x + 1).reduce((acc, x) => acc + x);
}

// Per Tiziano
function ex_2_I(x) {
    return sumOdd(x);
}

function ex_2_R(x) {
    return sumOddR(x);
}

function ex_2_F(x) {
    return sumOddRF(x);
}

/*
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
*/
>>>>>>> 561c4d7f27bcc8cb9438abd82b7fe330d70f1486

