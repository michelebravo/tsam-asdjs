function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

/*Verificare la correttezza dell'array creato da initialArray(), verificando che la sommma degli elementi sia pari a 11340 */


function sommaElemArray(array){
	if(array.length==0){
		return 0;
	}
	else{
		return array[0]+sommaElemArray(array.slice(1));
	}
}


/*Dato l'array A creato dalla funzione initialArray() sviluppare un algoritmo ricorsivo non di coda in javascript che restituisca il numero di elementi presenti in A che corrispondono al valore 5070*/

var array=initialArray();

function countElem(array){
	if(array.length==0){
		return 0;
	}else{
		if(array[0]==5070){
			return 1+countElem(array.slice(1));
		}else{
			return 0+countElem(array.slice(1));
		}
	}
}
/*Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript che restituisca la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
* Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi dell’oggetto Array: filter,map e reduce.
*/

function sqrtSumSquarePositiveEvenElem(array){
	return Math.sqrt(array.filter(x => x>=0 && x%2==0)
					.map(x => x*x)
					.reduce((acc,x) => acc+x ,0)
					);
}



/*Si implementi una funzione in javascript che implementi l’algoritmo che valuta il valore di un’espressione fully parentherized, ovvero un’espressione in cui ogni singola operazione è all’interno di parentesi. 
*/
function Stack(){
    this.myarray = [];
}
var a = new Stack();

Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}

function evaluateExpression(expression){
	var exprArray=expression.split(" ");
	var numStack=new Stack();
	var opStack=new Stack();
	for(var i=0;i<exprArray.length;++i){
		switch(exprArray[i]){
			case "+": 
				opStack.push(exprArray[i]);
				break;
			case "-":
				opStack.push(exprArray[i]);
				break;
			case "*":
				opStack.push(exprArray[i]);
				break;
			case "/":
				opStack.push(exprArray[i]);
				break;
			case "(":
				opStack.push(exprArray[i]);
				break;
			case ")":
				var oper=opStack.pop();
				switch(oper){
					case "+":
						var b=numStack.pop();
						var a=numStack.pop();
						opStack.pop();
						numStack.push(a+b);
						break;
					case "-":
						var b=numStack.pop();
						var a=numStack.pop();
						opStack.pop();
						numStack.push(a-b);
						break;
					case "*":
						var b=numStack.pop();
						var a=numStack.pop();
						opStack.pop();
						numStack.push(a*b);
						break;
					case "/":
						var b=numStack.pop();
						var a=numStack.pop();
						opStack.pop();
						numStack.push(a/b);
						break;
				}
				break;
			default:numStack.push(parseInt(exprArray[i]));
		}
	}

	return numStack.peek();

}





/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */


/*Si implementi un albero binario di ricerca in javascript e si inseriscano gli elementi contenuti nell'array A[0..n-1], ottenuto da initialArray(), nell’ordine dall’indice 0 all’indice n-1.
* Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.
*/



function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

//qui si crea l'albero
function BST(array) {
    this.root = null;
    for(var i=0;i<array.length;++i){
    	this.add(array[i]);
    }
}


BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }

}


BST.prototype.max= function(){
	return this.maxNode(this.root);
}

BST.prototype.maxNode= function(valore){
	if(valore.right==null){
		return valore.item;
	}else{
		return this.maxNode(valore.right);
	}
}