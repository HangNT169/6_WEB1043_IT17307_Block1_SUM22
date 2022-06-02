let imageObjects = [];
let indexHienTai = 0;
let intervalId;
// load image cho body
function loadImage() {
  //B1: Tao ra 1 mang chua ten cua tat ca cac anh cac ban co
  const images = ["cat.jpg", "chicken.jpg", "dog.jpg", "monkey.jpg", "pig.jpg"];

  // B2: Tao ra folder chua tat cac anh
  const imgFolderName = "images/";

  // B3: Push anh vao HTML
  images.forEach(function (e) {
    // Khoi tao 1 Object image
    let img = new Image();
    // gan duong dan anh
    img.src = imgFolderName + e;
    // push anh
    imageObjects.push(img);
  });

  // chay tu dong
  start();

  // B4: Xet anh vao HTML
  document.img_pet.src = imageObjects[indexHienTai].src;
}
// Start
function start() {
  if (intervalId === undefined) {
    intervalId = setInterval(function () {
      nextImage();
    }, 2000);
  }
}
// Next image
function nextImage() {
  indexHienTai++;
  if (indexHienTai >= imageObjects.length) {
    indexHienTai = 0;
  }
  // B4: Xet anh vao HTML
  document.img_pet.src = imageObjects[indexHienTai].src;
}
