function groupByGroup(students){
    const map = new Map();
    for(const student of students){
        
        if(!map.has(student.group)){
            map.set(student.group, []);
        }
        map.get(student.group).push(student.name);
    }
    return map;
}


// Input
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }