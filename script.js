/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let ans = [
  { id: 11, name: "ramesh", age: "40", profession: "programmer" },
  { id: 21, name: "sumesh", age: "41", profession: "financer" },
  { id: 31, name: "mukhesh", age: "42", profession: "freelancer" },
]

function PrintDeveloperswithMap() {
  //Write your code here
  let dev="developer"
  for(let i=0;i<arr.length;i++){
    if(arr[i].profession==dev){
      console.log(arr[i].name)
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  let dev="developer"
  for(let i=0;i<arr.length;i++){
    if(arr[i].profession==dev){
      console.log(arr[i].name)
    }
  }
}

function addData() {
  //Write your code here
  let obj={
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }
  arr.push(obj)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here
  let dev="admin"
  for(let i=0;i<arr.length;i++){
    if(arr[i].profession==dev){
      arr.splice(i,1)
    }  
  }
  console.log(arr)
}

function concatenateArray() {
  //Write your code here
  console.log(arr.concat(ans))
  
}