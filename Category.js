//xử lí sự kiện nút size
document.addEventListener('DOMContentLoaded', function() {
    const size = document.getElementById("btn-size");
    const catsize_menu = document.getElementById("catsize-menu");
    catsize_menu.style.display = 'none';
    size.addEventListener('click', function() {
        if (catsize_menu.style.display === 'none' || catsize_menu.style.display === '') {
            catsize_menu.style.display = 'grid';
        } else {
            catsize_menu.style.display = 'none';
        }
    });

    
});

// Xử lý sự kiện cho các nút trong menu con của size
document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = [
        document.getElementById("btn-catsize-S"),
        document.getElementById("btn-catsize-M"),
        document.getElementById("btn-catsize-L"),
        document.getElementById("btn-catsize-XL"),
        document.getElementById("btn-catsize-XXL")
    ];

    sizeButtons.forEach(function(button) {
        button.style.borderColor = 'rgb(221, 220, 220)'; // Đặt màu viền ban đầu
        button.addEventListener('click', function() {
            // Kiểm tra và thay đổi màu viền
            if (button.style.borderColor === 'rgb(221, 220, 220)') {
                button.style.borderColor = 'black'; // Đổi màu viền thành đen
            } else {
                button.style.borderColor = 'rgb(221, 220, 220)'; // Đổi màu viền thành xám
            }
        });
    });
});

//xử lí sự kiện menu màu sắc
document.addEventListener('DOMContentLoaded', function() {
    const color = document.getElementById("btn-color");
    const color_menu = document.getElementById("color-menu");
    color_menu.style.display = 'none';
    color.addEventListener('click', function() {
        if (color_menu.style.display === 'none' || color_menu.style.display === '') {
            color_menu.style.display = 'grid';
        } else {
            color_menu.style.display = 'none';
        }
    });
});

//xử lí sự kiện các nút màu
document.addEventListener('DOMContentLoaded', function() {
    // Các nút màu
    const btn_color = [
        document.getElementById("black"),
        document.getElementById("white"),
        document.getElementById("blue"),
        document.getElementById("yellow"),
        document.getElementById("pink"),
        document.getElementById("red"),
        document.getElementById("gray"),
        document.getElementById("beige"),
        document.getElementById("brown"),
        document.getElementById("green"),
        document.getElementById("orange"),
        document.getElementById("purple")
    ];

    // Xử lý từng nút
    const button = document.querySelector('.btn-color-menu');
    const tooltipText = button.getAttribute('data-original-title');
    console.log(tooltipText);

    btn_color.forEach(function(button) {
        button.style.backgroundColor = button.id;
        button.style.border='none';
        if(button.id=='white'){
            button.style.border='1px solid gray';
        }
        button.addEventListener('click', function() {
            if(button.id=='black'){
                button.style.color='white';
                if (button.innerText==='') {
                    button.innerText='O'; 
                } else {
                    button.innerText =''; 
                }
            }else{
                if (button.innerText==='') {
                    button.innerText='O'; 
                } else {
                    button.innerText =''; 
                }
            }            
        });
    });
});


//xử lí sự kiện menu giá tiền
document.addEventListener('DOMContentLoaded', function() {
    const cost = document.getElementById("btn-cost");
    const cost_menu = document.getElementById("cost-menu");
    cost_menu.style.display = 'none';
    cost.addEventListener('click', function() {
        if (cost_menu.style.display === 'none' || cost_menu.style.display === '') {
            cost_menu.style.display = 'grid';
        } else {
            cost_menu.style.display = 'none';
        }
    });
});
//xử lí sự kiện menu khuyến mãi
document.addEventListener('DOMContentLoaded', function() {
    const discount = document.getElementById("btn-discount");
    const discount_menu = document.getElementById("discount-menu");
    discount_menu.style.display = 'none';
    discount.addEventListener('click', function() {
        if (discount_menu.style.display === 'none' || discount_menu.style.display === '') {
            discount_menu.style.display = 'grid';
        } else {
            discount_menu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.sp-heart');
    hearts.forEach((heart) => {
        heart.addEventListener('click', function() {
            if (heart.classList.contains("fa-regular")) {
                heart.classList.remove("fa-regular");
                heart.classList.add("fa-solid");
            } else {
                heart.classList.remove("fa-solid");
                heart.classList.add("fa-regular");
            }
        });
    });
});

//
document.addEventListener('DOMContentLoaded', function() {
    const shopButtons = document.querySelectorAll('.sp-shop');
    shopButtons.forEach(shop => {
        const shop_menu = shop.nextElementSibling;
        shop_menu.style.display = 'none';
        shop_menu.style.border = 'none';
        shop_menu.style.outline = 'none';

        shop.addEventListener('click', function() {
            if (shop_menu.style.display === 'none' || shop_menu.style.display === '') {
                shop_menu.style.display = 'grid';
            } else {
                shop_menu.style.display = 'none';
            }
        });
    });
});

