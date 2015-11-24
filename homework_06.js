function Queue(){
    this.myarray = [];
}
var q = new Queue();

Queue.prototype.enqueue = function (e){this.myarray.push(e);}
Queue.prototype.dequeue = function (){return this.myarray.shift();}
Queue.prototype.front = function (){return this.myarray[0];}
Queue.prototype.isEmpty = function (){return this.myarray.length == 0;}
Queue.prototype.size = function (){return this.myarray.length;}



function CircularQueue(n){
    this.myarray = [];
    this.myarray.length=n;
    this.en=0;
    this.de=0;
}
var c = new CircularQueue(3);

CircularQueue.prototype.enqueue = function (e){
    if(this.en<this.myarray.length){
        this.myarray[this.en]=e;
        this.en++;  
    }
    else{
        /*this.en=0;
        this.myarray[this.en]=e;
        this.en++;*/
        return console.log("ERRORE:coda piena, elimina il primo elemento per inserirne uno nuovo!")
    }
}
CircularQueue.prototype.dequeue = function (){
    if(this.de<this.myarray.length){
        this.myarray[this.de]=undefined;
        this.en=this.de;
        this.de++;    
    }
    else{
        return console.log("ATTENZIONE: stai eliminando l'inizio della coda!")
        this.de=0;
        this.myarray[this.de]=undefined;
        this.en=this.de;
        this.de++;
    }
}
CircularQueue.prototype.front = function (){return this.myarray[0];}
CircularQueue.prototype.isEmpty = function (){return this.myarray.length == 0;}
CircularQueue.prototype.size = function (){return this.myarray.length;}


function prova(){
    return c;
}
