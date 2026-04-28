const btncart = document.querySelector('#modal-cart');
const btnclose = document.querySelector('#btnclose');
// console.log(btncart);


btncart.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='flex'; 
})
btnclose.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='none'; 
})