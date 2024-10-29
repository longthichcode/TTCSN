// Get all the size buttons
const sizeButtons = document.querySelectorAll('button.size');

// Add event listeners to each button
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Reset the border for all buttons
        sizeButtons.forEach(btn => btn.style.border = 'none');
        
        // Set the border for the clicked button
        button.style.border = '2px solid black';
    });
});
let tam=0;
function chitiet(nb){
    if(nb==1){
        document.getElementById('chuchange').innerHTML="Trẻ trung, năng động, phong cách trong thiết kế đầm tay hến mới nhất. Nổi bật trên dòng chất liệu thời thượng, mềm nhẹ, thoáng mát, ít nhăn và giữ form dáng tốt. Đầm diện lên vừa tinh tế vừa thể hiện chất riêng người mặc. ";
        tam=1;
        document.getElementById('nutchange').innerHTML="Xem thêm";
    }
    else if(nb==2){
        tam=2;
        document.getElementById('nutchange').innerHTML="Xem thêm";
        document.getElementById('chuchange').innerHTML="Dòng sản phẩm: You <br>Nhóm sản phẩm: Đầm<br>Cổ áo: Cổ khác";
    }
    else if(nb==3){
        tam=3;
        document.getElementById('nutchange').innerHTML="Xem thêm";
        document.getElementById('chuchange').innerHTML="Chi tiết bảo quản sản phẩm : <br>* Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác (dạ, tweed, lông, phao) chỉ giặt khô, tuyệt đối không giặt ướt.";
    }
}
function nutchange(){
    var text=document.getElementById('nutchange').innerText;

    if(text=="Xem thêm"){
    document.getElementById('chuchange').innerHTML="Trẻ trung, năng động, phong cách trong thiết kế đầm tay hến mới nhất. Nổi bật trên dòng chất liệu thời thượng, mềm nhẹ, thoáng mát, ít nhăn và giữ form dáng tốt. Đầm diện lên vừa tinh tế vừa thể hiện chất riêng người mặc.<br>Thiết kế lựa chọn kiểu dáng chữ A, độ dài trên gối, tôn dáng, che khuyết điểm phần hông. Đặc biệt, chi tiết cổ vuông cách điệu sẽ giúp nàng khoe trọn bờ vai quyến rũ.<br>Đầm có màu sắc trẻ trung này, các nàng có thể lựa chọn kết hợp cùng túi xách bản nhỏ và giày cao gót, phù hợp để đi làm hoặc đi chơi. <br>Sản phẩm kết hợp từ 3 dòng chất liệu Rayon, Wool, Poly cao cấp, tạo bề mặt mịn và độ rủ phù hợp. Ngoài ra, còn có độ bền cao, khả năng thấm hút mồ hôi tốt. Khi mặc tạo cảm giác nhẹ nhàng, thoải mái, dễ chịu.<br>Thông tin mẫu:</br>Chiều cao: 167 cm<br>Cân nặng: 50 kg<br>Số đo 3 vòng: 83-65-93 cm<br>Mẫu mặc size M<br>Lưu ý: Màu sắc sản phẩm thực tế sẽ có sự chênh lệch nhỏ so với ảnh do điều kiện ánh sáng khi chụp và màu sắc hiển thị qua màn hình máy tính/ điện thoại.";
    if(tam==1){
        document.getElementById('chuchange').innerHTML="Trẻ trung, năng động, phong cách trong thiết kế đầm tay hến mới nhất. Nổi bật trên dòng chất liệu thời thượng, mềm nhẹ, thoáng mát, ít nhăn và giữ form dáng tốt. Đầm diện lên vừa tinh tế vừa thể hiện chất riêng người mặc.<br>Thiết kế lựa chọn kiểu dáng chữ A, độ dài trên gối, tôn dáng, che khuyết điểm phần hông. Đặc biệt, chi tiết cổ vuông cách điệu sẽ giúp nàng khoe trọn bờ vai quyến rũ.<br>Đầm có màu sắc trẻ trung này, các nàng có thể lựa chọn kết hợp cùng túi xách bản nhỏ và giày cao gót, phù hợp để đi làm hoặc đi chơi. <br>Sản phẩm kết hợp từ 3 dòng chất liệu Rayon, Wool, Poly cao cấp, tạo bề mặt mịn và độ rủ phù hợp. Ngoài ra, còn có độ bền cao, khả năng thấm hút mồ hôi tốt. Khi mặc tạo cảm giác nhẹ nhàng, thoải mái, dễ chịu.<br>Thông tin mẫu:</br>Chiều cao: 167 cm<br>Cân nặng: 50 kg<br>Số đo 3 vòng: 83-65-93 cm<br>Mẫu mặc size M<br>Lưu ý: Màu sắc sản phẩm thực tế sẽ có sự chênh lệch nhỏ so với ảnh do điều kiện ánh sáng khi chụp và màu sắc hiển thị qua màn hình máy tính/ điện thoại.";
    }
    else if(tam==2){
        document.getElementById('chuchange').innerHTML="Dòng sản phẩm: You<br>Nhóm sản phẩm: Đầm<br>Cổ áo: Cổ khác<br>Tay áo: Tay liền<br>Kiểu dáng: Chữ A<br>Độ dài: Qua gối<br>Họa tiết: Trơn<br>Chất liệu: Rayon, Wool, Poly";
    }
    else if(tam==3){
        document.getElementById('chuchange').innerHTML="Chi tiết bảo quản sản phẩm :.<br>* Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác (dạ, tweed, lông, phao) chỉ giặt khô, tuyệt đối không giặt ướt.<br>* Vải dệt kim: sau khi giặt sản phẩm phải được phơi ngang tránh bai giãn.<br>* Vải voan, lụa, chiffon nên giặt bằng tay.<br>* Vải thô, tuytsi, kaki không có phối hay trang trí đá cườm thì có thể giặt máy.<br>* Vải thô, tuytsi, kaki có phối màu tương phản hay trang trí voan, lụa, đá cườm thì cần giặt tay.<br>* Đồ Jeans nên hạn chế giặt bằng máy giặt vì sẽ làm phai màu jeans. Nếu giặt thì nên lộn trái sản phẩm khi giặt, đóng khuy, kéo khóa, không nên giặt chung cùng đồ sáng màu, tránh dính màu vào các sản phẩm khác..<br>* Các sản phẩm cần được giặt ngay không ngâm tránh bị loang màu, phân biệt màu và loại vải để tránh trường hợp vải phai. Không nên giặt sản phẩm với xà phòng có chất tẩy mạnh, nên giặt cùng xà phòng pha loãng.<br>* Các sản phẩm có thể giặt bằng máy thì chỉ nên để chế độ giặt nhẹ, vắt mức trung bình và nên phân các loại sản phẩm cùng màu và cùng loại vải khi giặt.<br>* Nên phơi sản phẩm tại chỗ thoáng mát, tránh ánh nắng trực tiếp sẽ dễ bị phai bạc màu, nên làm khô quần áo bằng cách phơi ở những điểm gió sẽ giữ màu vải tốt hơn.<br>* Những chất vải 100% cotton, không nên phơi sản phẩm bằng mắc áo mà nên vắt ngang sản phẩm lên dây phơi để tránh tình trạng rạn vải.<br>* Khi ủi sản phẩm bằng bàn là và sử dụng chế độ hơi nước sẽ làm cho sản phẩm dễ ủi phẳng, mát và không bị cháy, giữ màu sản phẩm được đẹp và bền lâu hơn. Nhiệt độ của bàn là tùy theo từng loại vải. ";
    }
    document.getElementById('nutchange').innerHTML="Thu gọn";}
    else{
        document.getElementById('chuchange').innerHTML="Trẻ trung, năng động, phong cách trong thiết kế đầm tay hến mới nhất. Nổi bật trên dòng chất liệu thời thượng, mềm nhẹ, thoáng mát, ít nhăn và giữ form dáng tốt. Đầm diện lên vừa tinh tế vừa thể hiện chất riêng người mặc. ";
        if(tam==1){document.getElementById('chuchange').innerHTML="Trẻ trung, năng động, phong cách trong thiết kế đầm tay hến mới nhất. Nổi bật trên dòng chất liệu thời thượng, mềm nhẹ, thoáng mát, ít nhăn và giữ form dáng tốt. Đầm diện lên vừa tinh tế vừa thể hiện chất riêng người mặc. ";
        }
        else if(tam==2){
            document.getElementById('chuchange').innerHTML="Dòng sản phẩm: You <br>Nhóm sản phẩm: Đầm<br>Cổ áo: Cổ khác";
           }
        else if(tam==3){document.getElementById('chuchange').innerHTML="Chi tiết bảo quản sản phẩm : <br>* Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác (dạ, tweed, lông, phao) chỉ giặt khô, tuyệt đối không giặt ướt.";
        }
        document.getElementById('nutchange').innerHTML="Xem thêm";
    }
}
var soluong=1;
function plus(op){
    if(op=='+'){
        soluong+=1;
        document.getElementById('num').innerHTML=soluong;
    }
    else if(op=='-'){
        soluong-=1;
        if(soluong==0){
            soluong=1;
            alert("số lượng tối thiểu là: 1");
        }
        document.getElementById('num').innerHTML=soluong;
        
    }
}
function doianh(anh) {
    if(anh==1){
        var img2 = document.getElementById('anhbe1');
    }
    else if(anh==2){
        var img2 = document.getElementById('anhbe2');
    }
    else if(anh==3){
        var img2 = document.getElementById('anhbe3');
    }
    var img1 = document.getElementById('anhlon');
    var tempSrc = img1.src;
    if(anh==1){
        var img2 = document.getElementById('anhbe1');
    }
    else if(anh==2){
        var img2 = document.getElementById('anhbe2');
    }
    else if(anh==3){
        var img2 = document.getElementById('anhbe3');
    }
    img1.src = img2.src;
    img2.src = tempSrc;
}