const peoples = [
    {
    firstname :"Ava" ,
    place:"Egypt",
    age:16,
    gender:"female"
},
{
    firstname :"Ell" ,
    place:"usa",
    age:22,
    gender:"female"
},
{
    firstname :"wee" ,
    place:"india",
    age:12,
    gender:"male"
},
{
    firstname :"Ava" ,
    place:"Egypt",
    age:18,
    gender:"female"
}]

// let v= peoples.map((m)=>{
//     return m.age
// })
// console.log(v);

// peoples.forEach((m)=>{
//     console.log(m.firstname);
// })

// const v = peoples.find((m)=>{
//     return m.gender =="female"
// })

// console.log(v);
var items =[
    {
    name:"samsusung",
    price:200
},
{
    name:"Apple",
    price:1000
},
{
    name:"redmi",
    price:100
},
]

// const totalprice = items.reduce((total,item)=>{
//   return total+item.price
// },0)
// console.log(totalprice);



const totalprice  = items.reduce((a,item)=>{
    return a+item.price
},0)
console.log(totalprice);