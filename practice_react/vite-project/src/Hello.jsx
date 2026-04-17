// function Hello(prop){
// return <div>
//  <h2>hello,{prop.name}</h2>
//  <h3> age:{prop.age}</h3>
//  <h3> gender : {prop.gender}</h3>
// </div>
// }
// export default Hello


// function Hello({name, age, gender}){
// return <div>
//  <h2>hello,{name}</h2>
//  <h3> age:{age}</h3>
//  <h3> gender :{gender}</h3>
// </div>
// }
// export default Hello

// function Hello(pass){
//     let  {name,age,gender}= pass;
// return <div>
//  <h2>hello,{name}</h2>
//  <h3> age:{age}</h3>
//  <h3> gender :{gender}</h3>
// </div>
// }
// export default Hello

    function Hello({ age=18, gender="male",email="udaykasera34@gmail.com",Phone_no= 9234455555}){
return <div>
 {/* <h2>hello,{name}</h2> */}
 <h3>   age:  {age}</h3>
 <h3> gender: {gender}</h3>
 <h3> Email : {email}</h3>
 <h3> Phone : {Phone_no}</h3>
</div>
}
export default Hello



