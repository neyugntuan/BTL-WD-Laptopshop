
//add2cart
const btns = document.querySelectorAll('.add-to-cart');

btns.forEach(btn => {

    btn.addEventListener('click', () => {

        const product = {
            name: btn.dataset.name,
            price: Number(btn.dataset.price),
            image: btn.dataset.image,
            quantity: 1
        };

        // lấy giỏ hàng cũ
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // kiểm tra sản phẩm đã tồn tại chưa
        const index = cart.findIndex(item => item.name === product.name);

        if(index !== -1){

            cart[index].quantity += 1;

        }else{

            cart.push(product);

        }

        // lưu lại
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Đã thêm vào giỏ hàng');

    });

});

//delete
// =======================
// XÓA GIỎ HÀNG
// =======================

const deleteBtn = document.querySelector('.delete');

if(deleteBtn){

    deleteBtn.addEventListener('click', function(e){

        e.preventDefault();

        const confirmDelete = confirm(
            'Bạn có muốn xóa toàn bộ giỏ hàng không?'
        );

        if(confirmDelete){

            // xóa localStorage
            localStorage.removeItem('cart');

            // reload trang
            location.reload();

        }

    });

}

// =======================
// THANH TOÁN
// =======================

const checkoutBtn = document.querySelector('.checkout-btn');

if(checkoutBtn){

    checkoutBtn.addEventListener('click', function(e){

        // lấy giỏ hàng
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // kiểm tra rỗng
        if(cart.length === 0){

            e.preventDefault();

            alert('Giỏ hàng đang trống');

            return;
        }

    });

}
