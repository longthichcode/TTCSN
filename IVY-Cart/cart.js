// Mảng chứa các màu sắc cho từng hình tròn (có thể tùy chỉnh)
var colorSets = {
    circle1: ["black", "white", "blue", "yellow", "pink", "red", "gray", "beige", "brown", "green", "orange", "purple"],
    circle2: ["black", "white", "blue", "yellow", "pink", "red", "gray", "beige", "brown", "green", "orange", "purple"],
    circle3: ["black", "white", "blue", "yellow", "pink", "red", "gray", "beige", "brown", "green", "orange", "purple"]
};

// Tạo danh sách màu cho từng hình tròn
function createColorOptions(colorSet, optionsDiv, circle) {
    colorSet.forEach(function (color) {
        var colorDiv = document.createElement("div");
        colorDiv.className = "color-option";
        colorDiv.style.backgroundColor = color;

        // Xử lý khi kích vào mỗi màu
        colorDiv.onclick = function () {
            circle.style.backgroundColor = color;  // Đổi màu của hình tròn đang chọn
            optionsDiv.style.display = "none";     // Ẩn danh sách màu sau khi chọn
        };

        // Thêm hình tròn màu vào div chứa
        optionsDiv.appendChild(colorDiv);
    });
}

// Xử lý khi kích vào từng hình tròn
document.querySelectorAll(".color-circle").forEach(function (circle) {
    var circleId = circle.id;
    var colorOptionsDiv = document.getElementById("colorOptions" + circleId.slice(-1));

    // Tạo danh sách màu riêng cho mỗi hình tròn
    createColorOptions(colorSets[circleId], colorOptionsDiv, circle);

    circle.onclick = function () {
        // Kiểm tra và ẩn/hiển thị danh sách màu
        if (colorOptionsDiv.style.display === "none" || colorOptionsDiv.style.display === "") {
            colorOptionsDiv.style.display = "block";  // Hiển thị danh sách màu
        } else {
            colorOptionsDiv.style.display = "none";   // Ẩn danh sách màu nếu đang hiển thị
        }
    };
});

// Cập nhật giá tiền và số lượng sản phẩm
function updatePrice(){
    const containers = document.querySelectorAll('.cart-content-left tr');
    let total = 0;
    let totalQuantity = 0; // Biến để tính tổng số sản phẩm
    containers.forEach((container, index) => {
        if (index > 0) { // Bỏ qua hàng tiêu đề
            const priceText = container.querySelector('input[name="price"]').value.replace(/\./g, '').replace('đ', '').trim(); // Giá cố định
            const price = parseInt(priceText); // Lấy giá từ cột "Thành tiền" (không thay đổi)
                
            const quantity = parseInt(container.querySelector('input[name="quality"]').value); // Số lượng sản phẩm
            totalQuantity += quantity; // Cập nhật tổng số lượng sản phẩm
            total += price * quantity; // Cập nhật tổng tiền dựa trên số lượng và giá cố định
        }
    });
    // Cập nhật tổng số sản phẩm và tổng số tiền
    document.querySelector('#total-products').textContent = totalQuantity; // Cập nhật số sản phẩm
    document.querySelector('#totalPrice').textContent = total.toLocaleString('vi-VN') + 'đ'; // Cập nhật tổng tiền
    document.querySelector('#temporaryCalculation').textContent = total.toLocaleString('vi-VN') + 'đ'; // Cập nhật tổng tiền
}

function index(){
    window.location.href = "";
}

// Chuyển sang trang giao hàng
// function delivery(){
//     window.location.href = "";
// }

// document.getElementById("delivery").addEventListener('click', function() {
//     window.location.href = "";
// });

document.getElementById('delivery').onclick = function() {
    window.location.href = "";
};