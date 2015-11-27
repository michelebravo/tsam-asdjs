function PriorityQueue(){
    this.myarray=[];
}

function QueueItem(val,priority){
    this.val=val;
    this.priority=priority;
}


PriorityQueue.prototype.enqueue= function(e,p){
    if(this.isEmpty()){
        var first=new QueueItem(e,p);
        this.myarray.push(first);
    }
    else{
        i=0;
        var n= new QueueItem(e,p)
        while(this.myarray[i].priority<p){
            i++
        }
        this.myarray.splice(i,0,n);
    }

}


PriorityQueue.prototype.dequeue = function (){return this.myarray.shift();}
PriorityQueue.prototype.front = function (){return this.myarray[0];}
PriorityQueue.prototype.isEmpty = function (){return this.myarray.length == 0;}
PriorityQueue.prototype.size = function (){return this.myarray.length;}



var a= new PriorityQueue();