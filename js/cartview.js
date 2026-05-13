const cartList = document.querySelector('.cart-list');
const pCount = document.querySelector('.p-count');
const prices = document.querySelector('.prices');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let total = 0;
let count = 0;

if(cart.length === 0){

    cartList.innerHTML = `
        <div class="empty-cart">
            Bạn đang không có sản phẩm nào trong giỏ hàng.
        </div>
    `;

}else{

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        cartList.innerHTML += `
        
            <div class="cart-item">

                <img src="${item.image}" alt="abc">

                <div class="cart-item-info">

                    <h3>${item.name}</h3>

                    <p>${item.price.toLocaleString()}đ</p>

                    <span>
                        Số lượng: ${item.quantity}
                    </span>

                </div>

            </div>

        `;
    });

}

pCount.innerText = count;

prices.innerText = total.toLocaleString() + ' đ';