const pCount = document.querySelector('.p-count');
const prices = document.querySelector('.prices');

// lấy giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let total = 0;
let count = 0;

// tính tổng
cart.forEach(item => {

    total += item.price * item.quantity;

    count += item.quantity;

});

// cập nhật HTML
pCount.innerText = count;

prices.innerText = total.toLocaleString() + ' đ';



//thanhtoanthanhcong
const confirmOrder = document.querySelector('.confirm-order');

if(confirmOrder){

    confirmOrder.addEventListener('click', function(e){

        e.preventDefault();

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // kiểm tra giỏ hàng
        if(cart.length === 0){

            alert('Giỏ hàng đang trống');

            return;
        }

        // thông báo
        alert('Đặt hàng thành công');

        // xóa giỏ hàng
        localStorage.removeItem('cart');

        // chuyển trang sau 500ms
        setTimeout(() => {

            window.location.href = 'thanhtoanthanhcong.html';

        }, 500);

    });

}