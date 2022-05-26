/**
 * 1. Object
 */
// C1: {}
// Khoi tao Object rong
var hoaHong1 = {};
// them thuoc tinh
hoaHong1.mauSac = "Xanh";
// Khoi tao Object co thuoc tinh
var hoaHong2 = {
  //   mau,
  //   soCanh,
  // cach viet method (ham)trong Object
  // tenHam:function(thamSoTruyenVao){
  // code
  //   }
  hienThiThongTin: function () {
    // code
  },
};
// Them thuoc tinh
hoaHong2.mui = "Thom";
// C2: new
var hoaHong3 = new Object();
// them thuoc tinh
hoaHong3.huongVi = "Ngon";

// Vi du:
let hoaHong = {
  mauSac: "Xanh",
  soCanh: 10,
  mui: "Thom",
};
// hien thi thuoc tinh cua 1 Object
console.log(hoaHong.mauSac);
console.log(hoaHong.soCanh);
// thay doi gia tri
hoaHong.mauSac = "Do";
console.log(hoaHong.mauSac);

/**
 * 2. Class
 */
// C1: Class
class Hoa1 {
  // thuoc tinh
  // contructor
}

// C2: Function
/*
    Cú pháp:

    function tenlop (tenbien1, tenbien2…){
        tenthuoctinh1 = tenbien1;
        tenthuoctinh2 = tenbien2;
        tenphuongthuc = function(){
            Viết mã cho phương thức ở đây
        }
    }
*/
function DongVat(ten, tuoi, canNang) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.canNang = canNang;
  // Cu phap khai bao function trong 1 class
  //   this.tiengKeu = function () {
  //     // code
  //   };
}

// Khoi tao 1 Object tu 1 class
var dv1 = new DongVat("dv1", 10, 2);
console.log(dv1.ten);

/**
 * 3. Lien ket array vs object
 */

function Dog(ten, tuoi) {
  this.ten = ten;
  this.tuoi = tuoi;
  // this.tiengKeu = function () {
  //   return "Gau Gau";
  // };
  this.inThongTin = function () {
    console.log(this.ten + " - " + this.tuoi);
  };
}

let dog = new Dog("ten1", 10);
dog.inThongTin();
// // Khoi tao cac phan tu trong mang Dog
// Dog[0] = new Dog("ten1", 10);
// Dog[1] = new Dog("ten2", 1);
// Dog[2] = new Dog("ten3", 4);
// Dog[3] = new Dog("ten4", 7);
// Dog[4] = new Dog("ten5", 9);

// // in cac phan tu
// console.log("For -in");
// for (var index in Dog) {
//   console.log(Dog[index].tiengKeu());
// }
