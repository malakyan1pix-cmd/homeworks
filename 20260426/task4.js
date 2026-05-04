const map = new WeakMap();

function addLike(post, user){
    if(!map.has(post)){
        map.set(post, []);
    }

    map.get(post).push(user);
    return map;
}

function getLikes(post){
    if(!map.has(post)) return [];
    return map.get(post);
}



// Input
let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

addLike(post1, 'John');
addLike(post1, 'Anna');

// Expected Output
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined