<<<<<<< HEAD
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
=======
function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

function PriorityQueue() {
    this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e) { 
    for (var i = 0;
         i < this.size() && e.priority > this.queue[i].priority;
         ++i);

    this.queue.splice(i, 0, e);
}
PriorityQueue.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueue.prototype.front = function() { return this.queue[this.queue.length - 1]; }
PriorityQueue.prototype.size = function() { return this.queue.length; }
PriorityQueue.prototype.isEmpty = function() { return this.size() == 0; }



/* callback */

function PriorityQueueC(sortfunction) {
    this.queue = [];
    this.callback = sortfunction;
}

PriorityQueueC.prototype.enqueue = function(e) { 
    for (var i = 0;
         i < this.size() && this.callback(e.priority, this.queue[i].priority) == 1;
         ++i);

    this.queue.splice(i, 0, e);
}

PriorityQueueC.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueueC.prototype.front = function() { return this.queue[this.queue.length - 1]; }
PriorityQueueC.prototype.size = function() { return this.queue.length; }
PriorityQueueC.prototype.isEmpty = function() { return this.size() == 0; }
>>>>>>> 561c4d7f27bcc8cb9438abd82b7fe330d70f1486
