const readMore=document.querySelector('.read-more-btn')
const text=document.querySelector('.text')

readMore.addEventListener('click',(e) => {
    text.classList.toggle('show-more')
    if(readMore.innerHTML==='SHOW MORE'){
        readMore.innerHTML='SHOW LESS'
    }else{
        readMore.innerHTML='SHOW MORE'
    }
})