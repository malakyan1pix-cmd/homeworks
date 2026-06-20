function getUniqueUsers(users){
    const map = new Map();
    for(let user of users){
        map.set(user.id, user);
    };
    return Array.from(map.values());
}

// Input
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

// Expected Output
console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]