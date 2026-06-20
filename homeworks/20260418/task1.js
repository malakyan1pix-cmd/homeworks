const myRange = {
    from: 1,
    to: 5,
    [Symbol.iterator](){
        let current = this.to;
        let last = this.from;
        return {
            next(){
                if(current >= last){
                    return{ value: current--, done: false};
                }
                return{value: undefined, done: true};
            }
        };
    }

};
for(const value of myRange){
    console.log(value);
}



//Symbol.iterator allows an object to become iterable

//After adding Symbol.iterator`
//-the object can be used in for...of
//-youcan use the spread operator [...obj]

//Symbol.iterator change the behavior of iterating over an object,
//but does not affect type, arithmetic, or instenceof