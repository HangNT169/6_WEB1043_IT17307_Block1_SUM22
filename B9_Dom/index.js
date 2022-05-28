/**
 * 1. Dom la gi ?
 * 2. Truy xuat phan tu
 * 2.1 CSS selector
 * // Cach basic
 * // C1:Element selector p{}
 * // C2: Class selector.className{}
 * // C3: id selector #id{}
 * // C4: *{}:Tat ca deu an
 * => Dom selector : tuong tu vs css selector
 * // 2.2 Truy xuat phan tu trong DOM
 */
// // C1: Truy xuat phan tu bang ID
// let x = document.getElementById("hienThi");
// console.log(x);
// // thay doi mau
// x.style.color = "red";
// // thay doi gia tri cua text : innerHTML hoac innerText
// x.innerHTML = "ID thay doi cach hien thi";
// // C2: Truy xuat bang ClassName
// let x1 = document.getElementsByClassName("content");
// console.log(x1.length);
// // thay doi mau cua 1 phan tu nao day
// x1[1].style.color = "pink";
// // thay doi mau cua tat cac cac phan tu
// // for (let i = 0; i < x1.length; i++) {
// //   x1[i].style.color = "...";
// // }
// // C3: Truy xuat bang Tag name
// // tag name : h1,div,p
// let x3 = document.getElementsByTagName("p");
// console.log(x3.length);

// // C4: Truy xuat phan tu bang css selector
// let x4 = document.querySelectorAll("div p");
// console.log(x4.length);

// B1: Click button hien thi anh thi anh dc hien thi o duoi.
function hienThiAnh() {
  let img = document.getElementById("hienThi");
  img.innerHTML = "<img src ='#'/>";
}
// B2: Nhap 2 o input . Button cong.
// Khi click vao button cong => Tong duoc hien thi o tren man hinh
function tinhTongHaiSo() {
  // truy xuat phan tu
  let soThuNhat = document.getElementById("soThuNhat");
  let soThuHai = document.getElementById("soThuHai");

  // tinh tong
  let total = Number(soThuNhat.value) + Number(soThuHai.value);
  console.log(total);

  // truy xuat bien tong
  let tong = document.getElementById("ketQua");
  tong.innerHTML = total;
}

// B3: Them node vao element
function add_child() {
  //tạo phần tử p
  var p = document.createElement("p");
  //tạo phần tử text
  var node = document.createTextNode("Some new text");
  //gắn node vào p
  p.appendChild(node);
  //Thay đổi một số thuộc tính của p
  p.appendChild(node);
  p.style.backgroundColor = "red";
  p.style.padding = "10px";
  p.style.color = "white";

  var div = document.getElementById("demo");
  //gắn p vào div
  div.appendChild(p);
}

// B4: Xoa phan tu
var child = document.getElementById("p1");
child.parentNode.removeChild(child);
