import { nanoid } from "nanoid";

const passawordBtnEl = document.querySelector('button')
const displayPassawordEl = document.querySelector('h2')

passawordBtnEl.addEventListener('click',() =>{
    const randomPassword = nanoid()
    displayPassawordEl.innerHTML = randomPassword
})