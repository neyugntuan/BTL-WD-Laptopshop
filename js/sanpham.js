const productLinks = document.querySelectorAll('.product-link-detail');

productLinks.forEach(link => {

    link.addEventListener('click', function(){

        const product = {

            name: link.dataset.name,

            price: link.dataset.price,

            image: link.dataset.image

        };

        // lưu localStorage
        localStorage.setItem(
            'productDetail',
            JSON.stringify(product)
        );

    });

});