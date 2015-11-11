/*Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo.*/

function ex_1_I(x) {
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


function ex_1_R(x) {
   if(x[0]<0 || x.length==0){
       return 0;
   }
   else{
       return x[0]+ex_1_R(x.slice(1));
   }
}




/*Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari*/

function ex_2_I(n) {
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




function ex_2_R(n) {
    
    if(0<n){
        sum=sum+i;
        i+=2;
        return ex_2_R(n-1);
    }
   else {return sum;}
}



/*Dato un array di 10 elementi, calcolarne la media*/


function ex_3_I(x) {
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


function somma(x) {
   if( x.length==0){
       return 0;
   }
   else{
       return x[0]+somma(x.slice(1));
   }
}

function ex_3_R(x){
	return somma(x)/x.length;
}


/*Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]*/


function ex_4_I(a,b){
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



function ex_4_R(a,b){
    var sum=0;
    if (a==b){
        return sum + a;
    }
    else{
        sum+=a;
        return sum+ex_4_R(a+1,b);
    }
}



/*Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.*/


function ex_5_I(a,b){
    var per=0;
    for(i=0;i<b;i++){
        per+=a;
    }
    return per;
}




function ex_5_R(a,b){
	var per=0;
	for(i=0;i<b;i++){
		per+=a;
		return per+ex_5_R(a,b);
	}
	return per;
}



/*Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.*/


function ex_6_I(a,b){
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



function ex_6_R (a,b)
{
    var count=0;
	if(a<b)
	{
		return a;
	}
	else
	{
		a-=b;
		count++;
		return ex_6_R(a,b);
	}
}



/*Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli

operatori somma, sottrazione e della funzione mult.*/


function ex_7_I(x,y){
    var i=0;
    var c=x;
    while(i!=y-1){
        c=ex_5_I(c,x);
        i++;
    }
    return c;
}


function ex_7_R(x,y){

	for(i=y;i>0;i--){
		c=ex_5_I(x,ex_7_R(x,y-1));
		return c;
	}
	return c;
}




/*Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.*/



function ex_8_I(a){
    n=Math.sqrt(a.length);
    b=new Array;
    for(var i=0; i<n; i++){
        b[i]=new Array;
        b[i].length=n;
         
    }
    return b;

}


function ex_8_R(a){
	n=Math.sqrt(a.length);
    b=new Array;

}

/*Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.*/



function ex_9_I(a){
    var c=new Array;
    var i=a.length-1;
    for(j=0;j<a.length;j++){
        c[j]=a[i];
        i--;
    }
    return c;
}


function ex_9_R(a){
	var c=new Array;
	c.length=a.length;
	while(a.length>0){
		c[a.length-1]=a[0];
		return a[0];
	}
	return c;
}


/*Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.*/


function ex_10_I(a,b){
    var c=new Array;
    for (i=0;i<b;i++){
        c[i]=a;
    }
    return c;

}


function ex_10_R(a,b){
	var c=new array;
	var i=0;
	while(b>0){
	c[i]=a;
	i++;
	return ex_10_R(a,b-1);
	}
	return c;
}



/*Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.*/



function ex_11_I(a){
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