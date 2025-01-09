class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class singlyLinkedList{
    constructor(){
        this.head = null;
    }

    appendData(val){
        let temp =  new Node(val);
        let current = this.head;
        if(this.head == null){
            this.head = temp;
        }

        while(current.next != null){
            current = current.next
        }
        current.next = temp
    }
}