const users =[
    {id: 1, name: 'ori'},
    {id: 2, name: 'fsj'},
    {id: 3, name: 'sda'},
    {id: 4, name: 'gfs'},
    {id: 5, name: 're'},
    {id: 6, name: 'moshe'}
    
]
function add(name){
    id=users.length+1
    const user={id:id,name:name}
    users.push(user)
}


function finduser(number){
   return users.find(user=>user.id===id)?.name
}


function removelastuser(){
    users.pop()
}
function removefarsttuser(){
    users.shift();
}
function idname(id,name){
    users.find(users=>users.id===id).name=name 
    
}
function even(){
    return users.filter((users)=>users.id%2==0);
}

function renameNameToUsername(usersArray) {
    return usersArray.map(user => {
        const { name, ...otherProps } = user;     
        return { ...otherProps, username: name };
    });
}
function chechevenid(){
    return users.some((users)=>users.id%2==0);
    
}
function namechech(){
    return users.find(user=>user.name.includes('ori')).name
}
function removefirst() {
    users.shift();
  }
  function changename(id, name) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new console.error("einav elkes");
    }
    user.name = name;
  }
  function getevenusers() {
    return users.filter((user) => user.id % 2 === 0); /// filter is not by refernace but give an entire new array
  }
  function updatefildname() {
    return users.map((item) => ({
      userID: item.id,
      username: item.name,
      age: Math.floor(Math.random() * 36) + 15
    }));
  }
  function isEvenIds() {
    return users.every((item) => item.id % 2 === 0); /// every all elemnts --- some only one elemnt in array
  }
  
  function NameExist(name) {
    return users.find((users) => users.name.includes(name));
  }
  function avgage(){
    return updatedUsers.reduce((sum,updatedUsers)=>sum +updatedUsers.age,0)/updatedUsers.length
  }
//const updatedUsers = renameNameToUsername(users);
//console.log(updatedUsers);
//add('aba'); 
//console.log(users);
//console.log(finduser(2))
/*removefarsttuser();
console.log(users);
idname(2,'havrom');
console.log(users);
console.log(even());*/
const updatedUsers=updatefildname();
console.log(updatedUsers);
console.log (avgage())
const arr =[1,2,3];
const arr1 =[4,5,6];
const arr3 = arr.concat(arr1);
const arr4=[...arr,...arr1,7,8,9]
console.log(arr3);
console.log(arr4);
const user={
    id:12345,
    username:'oriieddf',
    age:25,
}
const{id,...rest}=user;
const addfarstname={...user,
    name:'ejksdkj',
}
console.log(addfarstname)
const number=[1,2,3]
let result = number.reduce((a, b) => {
    return a + b;});
    console
    console.log(result)

    const user2={...user}


    const originalArray = [{ a: 1 }, { b: 2 }];
    const copyArray = JSON.parse(JSON.stringify(originalArray));
    const copyArray2=structuredClone(originalArray);
    console.log(copyArray);
    copyArray[0].a = 10;
    console.log(originalArray);
    


  