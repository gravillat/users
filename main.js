async function getResponse() {

    let req = await fetch('https://randomuser.me/api/?results=30')
    let response = await req.json()
console.log(response.results)
response.results.forEach(el => {

const container=document.getElementById('container')
const row=document.getElementById('row')
const col=document.createElement('div')
const box=document.createElement('div')


const name=document.createElement('h3')
const email=document.createElement('p')
const age=document.createElement('p')
const date=document.createElement('p')
let iframe = document.createElement('img')


iframe.className='iframe'
age.innerHTML='age:  '+el.dob.age
date.innerHTML='date:  '+el.dob.date
name.innerHTML='name:  '+el.name.first+ '  ' +el.name.last
email.innerHTML='email:  '+el.email
iframe.src=el.picture.large


col.className='col-3'
box.className='box'
row.append(col)
col.append(box)
box.append(iframe,name,email,age,date)
});


}
getResponse()