const btncart = document.querySelector('#modal-cart');
const btnclose = document.querySelector('#btnclose');
// console.log(btncart);


btncart.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='flex'; 
})
btnclose.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='none'; 
})


function isCheck(){
    if(document.querySelector('#checkbox').checked){
        document.querySelector('.group-open-checkbox').style.display ='none';
    }
    else{
        document.querySelector('.group-open-checkbox').style.display ='block';
    }
}

