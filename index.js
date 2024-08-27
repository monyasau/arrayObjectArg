let bobData = {
  name: "bob wesley",
  age: 34,
  dob: "January 1st, 1990",
  hasFriends: false,
  viableSocialLife: false,
  get length() {
    return Object.keys(this).length;
  },
};

console.log(bobData.length);
console.log(bobData["name"]);
console.log(bobData.name);

let wesleyFamily = [
  "Mr. wesley",
  "Mrs. wesley",
  "Bob wesley",
  "Charlotte wesley",
];
// console.log(wesleyFamily.0)
// console.log(wesleyFamily.'0')
console.log(wesleyFamily.length);
console.log(wesleyFamily[2]);
console.log(wesleyFamily["2"]);
wesleyFamily;
wesleyFamily.pop(); // removes last item
wesleyFamily;
wesleyFamily.push("Bob's uncle"); // adds new item to last position
wesleyFamily;
