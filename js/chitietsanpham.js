/**
 * Hàm thay đổi hình ảnh chính khi người dùng click vào ảnh thu nhỏ
 * @param {string} src - Đường dẫn của ảnh thu nhỏ được click
 */
function changeImage(src) {
    // Lấy thẻ img chính
    const mainImg = document.getElementById('main-img');
    
    // Gán đường dẫn (src) mới cho ảnh chính
    mainImg.src = src;
}

/**
 * Xử lý khi bấm nút thêm vào giỏ hàng
 */
function addToCart() {
    // Thực tế sẽ dùng mảng (array) để lưu trữ giỏ hàng trong LocalStorage hoặc gửi lên Server
    alert("Sản phẩm đã được thêm vào giỏ hàng thành công!");
}