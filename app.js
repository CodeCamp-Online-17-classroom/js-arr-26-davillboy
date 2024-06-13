// write code here
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

const index = tasks.findIndex(item => item.id === 2);
console.log(tasks[index]); 
