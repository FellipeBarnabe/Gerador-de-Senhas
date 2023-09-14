import { nanoid } from "nanoid";
import './style.css'
import copy from 'clipboard-copy';

const passawordBtnEl = document.querySelector('button')
const displayPassawordEl = document.querySelector('h2')

passawordBtnEl.addEventListener('click',() =>{
    const randomPassword = nanoid()
    displayPassawordEl.innerHTML = randomPassword
})

displayPassawordEl.addEventListener('click',(event) =>{
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});