import Functions from "./functions/changeState.js";
const functions = new Functions();
let container = document.querySelector('.out');
let addNewPerson = document.querySelector('#btn1');
functions.refresh(JSON.parse(localStorage.getItem("dataArray") || "[]"), container);
addNewPerson.addEventListener("click", () => functions.createPerson(container));
// btn1.onclick = () => {
//     let name1 = prompt('Write down your name')
//     let age1 = +(prompt('Write down your age'))
//     let height1 = +(prompt('Write down your height'))
//     let person1 = new person(name1, age1, height1, localStorage.length+1)
//     let cont1 = document.createElement('div')
//     let change1 = document.createElement('button')
//     change1.innerText = 'edit'
//     if(person1.callback()){
//     cont1.innerText = person1.callback()
//     cont1.append(change1)
//     change1.onclick = () => {
//         let copy1 = cont1.innerText
//         let input1 = document.createElement('input')
//         let change2 = document.createElement('button')
//         input1.value = copy1
//         change2.innerText = 'edit'
//         cont1.innerText = ''
//         cont1.append(input1)
//         cont1.append(change2)
//         change2.onclick = () =>{
//             cont1.innerText = input1.value
//             cont1.append(change1)
//             localStorage.setItem(`${person1.id}`, input1.value)
//         }
//     }
//     }
//     out1.appendChild(cont1)
//     localStorage.setItem(`${person1.id}`, person1.callback())
//   }
//   for(let i=0; i<=localStorage.length; i++){
//     if(localStorage.getItem(`${i}`)){
//     let item1 = localStorage.getItem(`${i}`)
//     let cont2 = document.createElement('div')
//     let change1 = document.createElement('button')
//     change1.innerText = 'edit'
//     cont2.innerText = item1
//     cont2.append(change1)
//     change1.onclick = () =>{
//         let copy1 = cont2.innerText
//         let input1 = document.createElement('input')
//         let change2 = document.createElement('button')
//         input1.value = copy1
//         change2.innerText = 'edit'
//         cont2.innerText = ''
//         cont2.append(input1)
//         cont2.append(change2)
//         change2.onclick = () =>{
//             cont2.innerText = input1.value
//             cont2.append(change1)
//             localStorage.setItem(`${i}`, input1.value)
//         }
//     }
//     out1.append(cont2)
//     }}
