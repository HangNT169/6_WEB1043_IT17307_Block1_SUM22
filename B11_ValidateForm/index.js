function onChangeKhoaHoc() {
  // B1: Truy xuat cac phan tu can thiet
  let khoaHocElement = document.getElementById("khoaHoc");
  let hocPhiElement = document.getElementById("hocPhi");
  // B2: Xet lai value
  hocPhiElement.value = khoaHocElement.value;
}

function register() {
  // B1: Truy xuat toi cac o input
  let inputItems = document.getElementsByClassName("inputText");

  // B2: Kiem tra cac o input
  for (let i = 0; i < inputItems.length; i++) {
    // lay ra doi tuong
    let inputItem = inputItems[i];

    // reset ve trang thai ban dau
    inputItem.nextElementSibling.innerText = "";
    inputItem.nextElementSibling.style.color = "red";
    inputItem.nextElementSibling.style.fontSize = "15px";

    // Kiem tra rong
    if (inputItem.value === "") {
      inputItem.nextElementSibling.innerText = "Bat buoc";
    } else {
      // kiem tra sdt
      if (
        inputItem.getAttribute("type") === "number" &&
        isNaN(inputItem.value) === true
      ) {
        inputItem.nextElementSibling.innerText = "SDT khong hop le ";
      }

      // Kiem tra email
      if (
        inputItem.getAttribute("type") === "email" &&
        isValidEmail(inputItem.value) === false
      ) {
        inputItem.nextElementSibling.innerText = "Email khong hop le ";
      }
    }
  }
}

// isValidEmail == true => Email dung dinh dang. false => sai dinh dang
function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
