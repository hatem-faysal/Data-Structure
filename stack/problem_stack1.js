const isValid = function(s) {
    const obj = {
        "(":")",
        "[":"]",
        "{":"}"
    };
    let stack = [];
   for(let i=0;i<s.length;i++){
        let curr = s[i];
        if(obj[curr]){
            stack.push(obj[curr]);
        }else if(stack.pop() !== curr){
            return false;
        }
   } 
   return stack.length === 0;
};
console.log(isValid('()[]{}'));