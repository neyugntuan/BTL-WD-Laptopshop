// 1. Kho dữ liệu giả lập (Thực tế sẽ lấy từ Database/API)
const db = {
    "lap1": {
        name: "Laptop Gaming XYZ 2026",
        img: "img/lap2026.png",
        price: "25.990.000 ₫",
        cpu: "Intel Core i7-13700H",
        ram: "16GB DDR5 4800MHz",
        vga: "NVIDIA RTX 4060 8GB",
        storage: "512GB SSD NVMe",
        screen: "15.6 inch FHD 144Hz"
    },
    "lap2": {
        name: "Laptop Creator Pro Mac",
        img: "img/Macbook.jpg",
        price: "32.490.000 ₫",
        cpu: "Apple M3 Pro",
        ram: "18GB Unified Memory",
        vga: "14-core GPU",
        storage: "1TB SSD",
        screen: "14.2 inch Liquid Retina XDR"
    },
    "lap3": {
        name: "Laptop Văn Phòng Eco",
        img: "img/lapvp.jpg",
        price: "14.500.000 ₫",
        cpu: "Intel Core i5-1235U",
        ram: "8GB DDR4 3200MHz",
        vga: "Intel Iris Xe Graphics",
        storage: "256GB SSD",
        screen: "14.0 inch FHD IPS"
    },
    "lap4": {
        name: "Laptop Asus ROG Swift",
        img: "img/Rog.webp",
        price: "45.000.000 ₫",
        cpu: "AMD Ryzen 9 7940HS",
        ram: "32GB DDR5 5600MHz",
        vga: "NVIDIA RTX 4080 12GB",
        storage: "1TB SSD Gen4",
        screen: "16 inch 2K 240Hz"
    }
};

// Danh sách các thông số muốn mang ra so sánh
const features = [
    { key: 'summary', label: 'Tổng quan' }, // Chứa ảnh, tên, giá
    { key: 'cpu', label: 'Vi xử lý (CPU)' },
    { key: 'ram', label: 'Bộ nhớ (RAM)' },
    { key: 'vga', label: 'Card đồ họa' },
    { key: 'storage', label: 'Ổ cứng' },
    { key: 'screen', label: 'Màn hình' }
];

// 2. Khởi tạo dữ liệu khi tải trang
window.onload = function() {
    // Đổ danh sách sản phẩm vào 3 thẻ select
    const selectors = document.querySelectorAll('.product-selector');
    
    selectors.forEach(select => {
        for (let id in db) {
            let option = document.createElement('option');
            option.value = id;
            option.textContent = db[id].name;
            select.appendChild(option);
        }
    });

    // Cài đặt mặc định: Chọn sẵn Lap 1 vào Cột 1, Lap 2 vào Cột 2
    document.getElementById('prod-1').value = "lap1";
    document.getElementById('prod-2').value = "lap4";
    
    // Gọi hàm vẽ bảng ngay lần đầu tiên
    updateCompareTable();
};

// 3. Hàm cập nhật bảng dựa trên các thẻ select
function updateCompareTable() {
    const id1 = document.getElementById('prod-1').value;
    const id2 = document.getElementById('prod-2').value;
    const id3 = document.getElementById('prod-3').value;
    
    // Thu thập các ID đang được chọn thành mảng
    const selectedIds = [id1, id2, id3];
    const tbody = document.getElementById('compare-body');
    tbody.innerHTML = ''; // Xóa nội dung cũ

    // Duyệt qua từng thuộc tính (CPU, RAM...) để vẽ từng hàng ngang
    features.forEach(feature => {
        let tr = document.createElement('tr');
        
        // Cột đầu tiên là tên thuộc tính (Ví dụ: "Vi xử lý (CPU)")
        let tdTitle = document.createElement('td');
        tdTitle.className = 'feature-name';
        tdTitle.textContent = feature.label;
        tr.appendChild(tdTitle);

        // Duyệt qua 3 ô của 3 sản phẩm
        selectedIds.forEach(id => {
            let td = document.createElement('td');
            
            // Nếu có chọn sản phẩm ở ô này
            if (id && db[id]) {
                const product = db[id];
                
                // Trường hợp đặc biệt: Hàng "Tổng quan" vẽ Hình ảnh, Tên, Giá, Nút Mua
                if (feature.key === 'summary') {
                    td.innerHTML = `
                        <img src="${product.img}" class="compare-img" alt="${product.name}"><br>
                        <strong>${product.name}</strong><br>
                        <span class="compare-price">${product.price}</span><br>
                        <button class="btn-small">Mua ngay</button>
                    `;
                } else {
                    // Các hàng thông số bình thường (đổ text)
                    td.textContent = product[feature.key];
                }
            } else {
                // Nếu chưa chọn sản phẩm
                td.innerHTML = '<span class="empty-slot">Vui lòng chọn sản phẩm</span>';
            }
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}