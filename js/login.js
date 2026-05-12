// Xử lý sự kiện khi nhấn nút Đăng Nhập
function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn việc tải lại trang mặc định của Form
    
    // Ở đây bạn có thể thêm logic kiểm tra tài khoản/mật khẩu nếu cần.
    // Giả lập đăng nhập thành công và chuyển sang trang chính (index.html)
    window.location.href = 'index.html';
}

// Xử lý sự kiện khi nhấn nút Đăng Ký
function handleRegister(event) {
    event.preventDefault(); // Ngăn chặn việc tải lại trang
    
    alert("Đăng ký thành công! Hệ thống sẽ chuyển bạn về trang Đăng nhập.");
    
    // Sau khi đăng ký xong, chuyển hướng về trang đăng nhập
    window.location.href = 'login.html';
}

// Giả lập nút mạng xã hội
function socialLogin(provider) {
    alert("Giả lập: Bạn vừa chọn đăng nhập bằng " + provider);
}