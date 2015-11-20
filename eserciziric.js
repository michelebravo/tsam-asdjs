/*function sommaric(x) {
   if(x[0]<0 || x.length==0){
       return 0;
   }
   else{
       return x[0]+sommaric(x.slice(1));
   }
}
var a = [1, 2, 3, -4, 5];
console.log(sommaric(a));

function ex_1_R(x){
	return sommaric(x)
}*/




/*var sum = 0;
 var i=1;
function sommaric(n) {
    
    if(0<n){
        sum=sum+i;
        i+=2;
        return sommaric(n-1);
    }
   else {return sum;}
}
var n=10;
console.log(sommaric(n));*/




/*function sommaric(x) {
   if( x.length==0){
       return 0;
   }
   else{
       return x[0]+sommaric(x.slice(1));
   }
}
var a = [1, 2, 3, 4, 5,6,7,8,9,10];
var l=a.length;
console.log(sommaric(a)/l);*/





/*var a=0;
var b=5;
var sum=0;

function somma (x,y)
{
	if (x==y)
	{
		return sum+y;
	}
	else
	{
		sum=sum+x;
		x++;
		return somma (x,y);
	}
}
if (a<b)
{
	console.log(somma(a,b));
}
else
{
	console.log(somma(b,a));
}*/

/* var per=0;
 var i=1;
function mult(a,b){
	var i=1;
	per=a;
	if(i==b)
    return per;
    	else{
    		i++;
    		return per+mult(a,b);
			
    	}
}
	

var a=25;
var b=5;
console.log(mult(a,b));*/

/*var a=15;
var b=5;
var count=0;
function divisione (a,b)
{
	if(a<b)
	{
		return a;
	}
	else
	{
		a-=b;
		count++;
		return divisione(a,b);
	}
}

if (a>=0&&b>=0)
{
	if (a>b)
	{
		a=divisione(a,b);
	}
	else
	{
		a=divisione(b,a);
	}
}
else 
{
	console.log('a e b devono essere maggiori o uguali a 0')
}
console.log('divisione:');
console.log(count);
console.log('resto:');
console.log(a);*/
function mult(a,b){
    var per=0;
    for(i=0;i<b;i++){
        per+=a;
    }
    return per;
}
	
function pow(x,y){

	for(i=y;i>0;i--){
		c=mult(x,pow(x,y-1));
		return c;
	}
	return c;
}


