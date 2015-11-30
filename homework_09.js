//Ricorsione


function T(a){
    if(a.length==0){
        return 10;
    }
    return 5*a[0]+T(a.slice(1));
    
}


function ex_1a(a){
    return T(a);
}



function sumSquareEven(a){
    if(a.length==0){
        return 0;
    }

    if(a[0]%2==0){
        return a[0]*a[0]+sumSquareEven(a.slice(1));
    }else{
       return 0+sumSquareEven(a.slice(1));
    }
}


function ex_1b(a){
    return sumSquareEven(a);
}

//esercizio 2

function sumSquareEvenF(a){
    return a.filter(x => x%2==0).reduce((acc,x) => acc+x*x,0);
}

function ex_2(a){
    return sumSquareEvenF(a);
}


//esercizio 3


function Stack(){
    this.myarray = [];
}
Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}

function evenPerOdd(a){
    var even=new Stack();
    var odd=new Stack();
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            even.push(a[i]);
        }else{
            odd.push(a[i]);
        }
    }

    var result=new Stack();

    while(even.isEmpty()==false && odd.isEmpty()==false){
        result.push(even.pop()*odd.pop());
    }

    if(result.length>=1){
        var p=result.pop();
        var s=result.pop();
        result.push(p+s);
    }
    
    return result.peek();
}

function ex_3(a){
    return evenPerOdd(a);
}


//esercizio 4

function LNode(indexNode,value,succNode){
    this.item=value;
    this.index=indexNode;
    this.succ=succNode;
}


function LinkedList(){
    this.root=null;
}

function ex_4(){
    return LinkedList();
}

//add

LinkedList.prototype.addNode=function(prevNode,index,e,nextNode){
  
    if (index>prevNode.index){
        if(index<nextNode.index || nextNode==0){
            prevNode.succ=new LNode(index,e,nextNode);
            }else{
              this.addNode(nextNode,index,e,nextNode.succ);  
            }
    }else{
          this.root=new LNode(index,e,prevNode); 
    }

}


LinkedList.prototype.add=function(index,e){
    if (this.root==null){
        this.root=new LNode(index,e,0);
    }else {
        this.addNode(this.root, index, e, this.root.succ);

    }
}

//get

LinkedList.prototype.getNode= function(nextNode,index){
    if(nextNode.index==index){
        return nextNode;
    }else{
        return this.getNode(nextNode.succ,index);
    }
}


LinkedList.prototype.get= function (index){
    return this.getNode(this.root,index);

}


var list=new LinkedList();

list.add(2,20);
list.add(1,30);
list.add(6,10);
list.add(3,15);
list.add(4,25);




//esercizio 5

function Node(value,leftNode,rightNode){
    this.item=value;
    this.left=leftNode;
    this.right=rightNode;
}


function BST(){
    this.root=null;
}

//add

BST.prototype.addNode=function(currentNode, e){
  
    if (e<currentNode.item){
        if(currentNode.left==null){
            currentNode.left=new Node(e,null,null)
        }else{
            this.addNode(currentNode.left,e);
        }
        
    } else{
        if(currentNode.right==null){
            currentNode.right=new Node(e,null,null)
        }else{
            this.addNode(currentNode.right,e);
        }
    }

}

BST.prototype.add=function(e){
    if (this.root==null){
        this.root=new Node(e,null,null);
    }else {
        this.addNode(this.root, e);

    }
}

//exist

BST.prototype.existNode= function(currentNode, e){
    if(currentNode==null){
        return false;
    }

    if (currentNode.item==e){
        return true;
    } else{
        if(e<currentNode.item)
            return this.existNode(currentNode.left,e)
        else
            return this.existNode(currentNode.right,e)
    }
}


BST.prototype.exist=function(e){
    return this.existNode(this.root,e);
}

//inOrder
function inOrder(node, callback){
    if(node!=null){
        inOrder(node.left, callback);
        callback(node.item);
        inOrder(node.right, callback);
    }
}
//inOrder(tree.root,function(e){console.log(e); })


//search

BST.prototype.searchNode= function(currentNode, e){
    if(currentNode==null){
        return null;
    }
    
    if (currentNode.item==e){
        return currentNode;
    } else{
        if(e<currentNode.item)
            return this.searchNode(currentNode.left,e)
        else
            return this.searchNode(currentNode.right,e)
    }
}


BST.prototype.search=function(e){
    return this.searchNode(this.root,e);
}


function ex_5(e){
    return this.search(e);
}



var tree=new BST();

tree.add(20);
tree.add(30);
tree.add(10);
tree.add(15);
tree.add(25);