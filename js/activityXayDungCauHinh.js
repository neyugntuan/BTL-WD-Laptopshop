$(document).ready(function(){
  $('.slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('.btn-left'),
    nextArrow: $('.btn-right'),
  });
});
const btncart = document.querySelector('#modal-cart');
const btnclose = document.querySelector('#btnclose');
// console.log(btncart);


btncart.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='flex'; 
})
btnclose.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='none'; 
})


$(document).ready(function(){
  $('#item').slick({
    lazyLoad: 'true',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.btn-left-banner'),
    nextArrow: $('.btn-right-banner'),
  });
});

