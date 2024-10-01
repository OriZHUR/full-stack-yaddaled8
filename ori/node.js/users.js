const users=[{
    id: 12323231,
    name:'ori',
    age:20,
},
{
    id: 211233,
    name:'aba',
    age:132, 
},
]
const getUser=(id)=>{
    return users[id];
}
module.exports={
    users,
    getUser,
};