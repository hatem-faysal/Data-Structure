//create stack
//intial stacks
//push 5 stack = 10 
class MinStack {
    constructor() {
        this.stack = [];
        this.MinStack = [];
    }
    push (ele){
        if(!this.stack.length){
            this.MinStack.push(ele);
        }else{
            let min = Math.min(ele , this.MinStack[this.MinStack.length -1]);
            this.MinStack.push(min);
        }
        this.stack.push(ele)
    }

    pop(ele){
        this.stack.pop();
        console.log('this.stack.pop(): ', this.stack.pop());
        this.MinStack.pop();
    }
    top(){
        return this.stack[this.stack.length - 1];
    }
    getMin(){
        // console.log('this.MinStack: ', this.MinStack);
        return this.MinStack[this.MinStack.length - 1];
    }
}
let  minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2