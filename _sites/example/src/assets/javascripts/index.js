const isDog = (x) => x.type === 'dog';

let animals = [
  { type: 'dog', name: 'Max' },
  { type: 'cat', name: 'Toy' },
  { type: 'dog', name: 'Awesome' },
];

let dogs = animals.filter(isDog);
