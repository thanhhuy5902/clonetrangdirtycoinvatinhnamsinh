// let name = prompt ("Hãy nhập tên của bạn")
// let age = prompt ("Hãy nhập tuổi của bạn")
// let year = 2023 - age
// alert ("Xin chào " + name + ' '+ "bạn " + age + ' '+ "tuổi" )
// if (namNhuan(year)) {
//     alert('Năm sinh của bạn là năm nhuận');
// } else {
//     alert('Năm sinh của bạn không phải là năm nhuận');
// }

// let canChiResult = tinhCanChi(year);
// alert('Can Chi của năm sinh của bạn là: ' + canChiResult);
// function namNhuan(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// function tinhCanChi(year) {
//     const can = year % 10;
//     const chi = year % 12;

//     let canChiStr = "";

//     switch (can) {
//       case 0:
//         canChiStr += "Canh";
//         break;
//       case 1:
//         canChiStr += "Tân";
//         break;
//       case 2:
//         canChiStr += "Nhâm";
//         break;
//       case 3:
//         canChiStr += "Quý";
//         break;
//       case 4:
//         canChiStr += "Giáp";
//         break;
//       case 5:
//         canChiStr += "Ất";
//         break;
//       case 6:
//         canChiStr += "Bính";
//         break;
//       case 7:
//         canChiStr += "Đinh";
//         break;
//       case 8:
//         canChiStr += "Mậu";
//         break;
//       case 9:
//         canChiStr += "Kỷ";
//         break;
//     }

//     canChiStr += " ";

//     switch (chi) {
//       case 0:
//         canChiStr += "Thân";
//         break;
//       case 1:
//         canChiStr += "Dậu";
//         break;
//       case 2:
//         canChiStr += "Tuất";
//         break;
//       case 3:
//         canChiStr += "Hợi";
//         break;
//       case 4:
//         canChiStr += "Tý";
//         break;
//       case 5:
//         canChiStr += "Sửu";
//         break;
//       case 6:
//         canChiStr += "Dần";
//         break;
//       case 7:
//         canChiStr += "Mão";
//         break;
//       case 8:
//         canChiStr += "Thìn";
//         break;
//       case 9:
//         canChiStr += "Tỵ";
//         break;
//       case 10:
//         canChiStr += "Ngọ";
//         break;
//       case 11:
//         canChiStr += "Mùi";
//         break;
//     }

//     return canChiStr;
//   }

let clothlist = [
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-5.jpg?v=1686560543000",
    name: "DC x LW Love Varsity Jacket",
    quantity: 10,
    price: "1590000",
    stock: 0,
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-7329d9a4-8c70-482a-b945-63c862b5239f.jpg?v=1686415995000",
    name: "DC x OP Ace T-shirt - Cream",
    quantity: 10,
    price: "450000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-f2d92232-daac-44a6-b8f1-4d11b9055c2e.jpg?v=1682153227000",
    name: "DC x OP Sanji Chibi T-shirt - White",
    quantity: 10,
    price: "450000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-201abb96-56c5-42c0-a3e8-0d2b7466761f.jpg?v=1682663055000",
    name: "DC x OP Luffy Dream T-shirt",
    quantity: 10,
    price: "450000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/artboard-1-1.jpg?v=1678256256000",
    name: "DC x OPF:R Tote Bag - Cream",
    quantity: 10,
    price: "250000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-1aa78a18-350b-4cc8-b04f-b751f191a202.jpg?v=1678335048000",
    name: "DC x OPF:R The Crew T-shirt",
    quantity: 10,
    price: "450000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-8adba28c-786a-49e7-9e32-7cbb93166f31.jpg?v=1678260141000",
    name: "DC x OPF:R Luffy T-shirt - Cream",
    quantity: 10,
    price: "420000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-3b9cd100-dd59-43e0-9ed5-9a5285383290.jpg?v=1678260728000",
    name: "DC x OPF:R Shanks T-shirt - Cream",
    quantity: 10,
    price: "450000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-68dffd52-f0fd-44fd-afe0-bc08033c93d9.jpg?v=1678260406000",
    name: "DC x OPF:R Zoro T-shirt - Black",
    quantity: 10,
    price: "420000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-5-cee20adb-bbae-4ee9-97a6-4715582897b0.jpg?v=1678260171000",
    name: "DC x OPF:R Nami T-shirt - White",
    quantity: 10,
    price: "420000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/23-bfa57181-d541-44ae-96cc-ae4377c7ea33.jpg?v=1678346493000",
    name: "DC x OP Luffy Raglan Hoodie - White",
    quantity: 10,
    price: "699000",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/artboard-1-a1cd5e2c-253e-4287-99bc-f571f8bec050.jpg?v=1678346490000",
    name: "DC x OP Luffy Raglan Hoodie - Multicolor",
    quantity: 10,
    price: "720000",
  },
];

let row1 = document.getElementsByClassName("row1");

console.log(row1);

function buildProductCard(cloth) {
  let card = document.createElement("div");
  card.className = "product-item";
  Object.assign(card.style, {
    display: "flex",
    justifyContent: "center",
  });
  card.innerHTML = `<div class="status">
  ${cloth.status}
</div>
<div class="imageproduct">
  <img
   
    src= "${cloth.img}"/>
</div>
<div class="name">
  <p>${cloth.name}</p>
</div>
<div class="price">
  <p>${cloth.price}</p>
 <p></p>Số lượng ${cloth.quantity}</p>
</div>
`;
  let btnBox = document.createElement("div");
  btnBox.className = "bot-card";
  let btnAdd = document.createElement("button");
  let boldText = document.createElement("b");
  boldText.innerText = "Thêm";
  btnAdd.appendChild(boldText);
  btnBox.appendChild(btnAdd);
  card.appendChild(btnBox);
  btnBox.addEventListener("click", () => {
    if (cloth.quantity > 0) {
      cloth.quantity--;
      addToCart(cloth);
      card.innerHTML = `
        <div class="status">
        ${cloth.status}
      </div>
      <div class="imageproduct">
        <img

          src= "${cloth.img}"/>
      </div>
      <div class="name">
        <p>${cloth.name}</p>
      </div>
      <div class="price">
        <p>${cloth.price}</p>

      </div>
      <div class="item-desc">Số lượng ${cloth.quantity}</div>
          `;
      btnAdd.appendChild(boldText);
      btnBox.appendChild(btnAdd);
      card.appendChild(btnBox);
    } else {
      alert("Hết sản phẩm rồi rồi !!!!");
      return;
    }
  });
  return card;
}

let cartList = [];
console.log(cartList);

function addToCart(cloth) {
  let isExist = false;
  if (cartList.length == 0) {
    cartList.push({
      ...cloth,
      stock: 1,
      quantity: cloth.quantity,
    });
    console.log(cartList);
    return;
  }
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name == cloth.name) {
      cartList[i].quantity = cloth.quantity;
      cartList[i].stock += 1;
      console.log(cartList);
      isExist = true;
      return;
    }
  }
  if (!isExist) {
    cartList.push({
      ...cloth,
      quantity: cloth.quantity,
      stock: 1,
    });
    console.log(cartList);
  }
  console.log(cartList);
}

for (let i = 0; i < row1.length; i++) {
  for (let j = 0; j < clothlist.length; j++) {
    row1[i].appendChild(buildProductCard(clothlist[j]));
  }
}

const localMallBtn = document.getElementById("localMallBtn");
localMallBtn.addEventListener("click", () => {
  showModal();
});
const closeModalBtn = document.getElementById("closeModalBtn");
closeModalBtn.addEventListener("click", () => {
  performClose();
});

let listsanpham = document.getElementsByClassName("listsanpham");
function showModal() {
  document.getElementById("myModal").showModal();
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].stock * cartList[i].price;
    listsanpham[0].appendChild(rendergiohang(cartList[i]));
  }

  bill(total);
}

console.log(listsanpham);
function performClose() {
  let listsanpham = document.getElementsByClassName("listsanpham");
  listsanpham[0].innerHTML = ``;
  let billInput = document.getElementsByClassName("bill-input");
  billInput[0].innerHTML = ``;
  total = 0;
  document.getElementById("myModal").close();
}
function updateTotal(amount) {
  let billInput = document.getElementsByClassName("bill-input");
  billInput[0].innerHTML = ``;
  total += amount;

  // Sau khi cập nhật biến total, cần hiển thị tổng tiền mới bằng cách gọi lại hàm bill
  bill(total);
}

function rendergiohang(cloth) {
  let sanpham = document.createElement("div");
  sanpham.className = "sanpham";
  sanpham.innerHTML = `
          <p>${cloth.name}</p>
          <p>Giá tiền: ${cloth.stock}</p>
          <p>Giá: ${cloth.price}</p>
        `;

  let addbtn = document.createElement("button");
  let deletebtn = document.createElement("button");

  addbtn.innerText = "them";
  deletebtn.innerText = "xoa";
  sanpham.appendChild(addbtn);
  sanpham.appendChild(deletebtn);
  deletebtn.onclick = function () {
    // Xóa sản phẩm khỏi giỏ hàng
    updateTotal(-cloth.price);
    sanpham.remove(); // Xóa sản phẩm khỏi giao diện
    // Hoặc thực hiện xử lý xóa sản phẩm trong cơ sở dữ liệu tùy theo yêu cầu
  };
  addbtn.addEventListener("click", () => {
    if (cloth.stock <= cloth.quantity) {
      cloth.stock++;

      sanpham.innerHTML = `
      <p>${cloth.name}</p>
      <p>Giá tiền: ${cloth.stock}</p>
      `;
      let total = cloth.price * cloth.stock;
      //console.log(total);

      let textGiaTien = document.createElement("p");
      textGiaTien.innerText = `Giá tiền: ${total}`;

      total = 0;
      for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price * cartList[i].stock;
      }
      let billInput = document.getElementsByClassName("bill-input");
      billInput[0].innerHTML = `
      
      <div class="text-bill">
          <p>Tổng tiền: ${total}</p>
      </div> 
      `;

      sanpham.appendChild(textGiaTien);
      sanpham.appendChild(addbtn);
      sanpham.appendChild(deletebtn);
    } else {
      alert("Quá số lượng rồi !!!");
      return;
    }
  });

  return sanpham;
}
let total = 0;
function bill(total) {
  let billInput = document.getElementsByClassName("bill-input");
  // Xóa tất cả các phần tử con trong phần tử có class "bill-input"

  let textBill = document.createElement("div");
  textBill.className = "text-bill";
  textBill.innerHTML = `<p>Tổng tiền:${total}</p>`;
  billInput[0].appendChild(textBill);
}
function updateTotalPrice() {
  total = 0;
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price * cartList[i].stock;
  }
  let billInput = document.getElementsByClassName("bill-input");

  // Xóa các nút con hiện tại trong billInput
  while (billInput[0].firstChild) {
    billInput[0].removeChild(billInput[0].firstChild);
  }

  bill(total); // Cập nhật thông tin tổng tiền mới
}
function updateStockAndTotal(cloth, sanpham) {
  if (cloth.stock <= cloth.quantity) {
    cloth.stock++;

    sanpham.innerHTML = `
      <p>${cloth.name}</p>
      <p>Giá tiền: ${cloth.stock}</p>
    `;

    let total = cloth.price * cloth.stock;

    // Cập nhật tổng tiền
    displayTotal(total);

    let textGiaTien = document.createElement("p");
    textGiaTien.innerText = `Giá tiền: ${total}`;

    sanpham.appendChild(textGiaTien);
    sanpham.appendChild(addbtn);
    sanpham.appendChild(deletebtn);
  } else {
    alert("Quá số lượng rồi !!!");
    return;
  }
}

// Hàm hiển thị tổng tiền
function displayTotal(total) {
  let billInput = document.getElementsByClassName("bill-input");
  billInput[0].innerHTML = `
    <div class="text-bill">
      <p>Tổng tiền: ${total}</p>
    </div>
  `;
}
const confirm = document.getElementById("confirmBtn");
confirm.addEventListener("click", () => {
  alert("bạn mua hàng thành công");
  clear();
  performClose();
});

function clear() {
  cartList = [];
  let listsanpham = document.getElementsByClassName("listsanpham")[0];
  listsanpham.innerHTML = "";
}
