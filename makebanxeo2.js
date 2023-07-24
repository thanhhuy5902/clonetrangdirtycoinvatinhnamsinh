const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wait = async function (second) {
  let wait = new Promise(async (resolover, reject) => {
    setTimeout(() => {
      resolover();
    }, second * 1000);
  });
  return wait;
};

async function askUser() {
  let temp = new Promise((resolve, reject) => {
    rl.question("Nhập tên của bạn: ", (name) => {
      rl.question("Nhập tuổi của bạn: ", (age) => {
        console.log({ name, age });
        resolve({ name, age });
      });
    });
  });
  return temp;
}

async function xinTien() {
  console.log("Má ơiii, cho con tiềnnn");
  let temp = new Promise((res, rej) => {
    rl.on("line", (input) => {
      console.log(input);
      res(input);
    });
  });
  return temp;
}

async function chonSize() {
  console.log("Chọn size bánh:");
  console.log("S - 121,000 VND");
  console.log("M - 237,000 VND");
  console.log("L - 1,810,000 VND");

  let temp = new Promise((resolve, reject) => {
    rl.question("Nhập size (S/M/L): ", (input) => {
      const size = input.toUpperCase();
      switch (size) {
        case "S":
          console.log("Bạn đã chọn bánh size S - Giá: 121,000 VND");
          resolve(121000);
          break;
        case "M":
          console.log("Bạn đã chọn bánh size M - Giá: 237,000 VND");
          resolve(237000);
          break;
        case "L":
          console.log("Bạn đã chọn bánh size L - Giá: 1,810,000 VND");
          resolve(1810000);
          break;
        default:
          console.log("Size không hợp lệ. Vui lòng chọn lại!");
          chonSize().then(resolve);
      }
    });
  });
  return temp;
}

async function goToMarket() {
  console.log("Đi mua nguyên liệu thoi");
  await wait(5);
  let temp = new Promise((resolover, reject) => {
    console.log("Đi về thoi");
    resolover();
  });
}
// Sơ chế(tách trứng, ray bột, chuẩn bị gia vị, rửa rau)
async function prepare() {
  async function openEgg() {
    console.log("Đập trứng thoi");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Tách trứng được rồi");
      res();
    });
    return temp;
  }

  async function siftflour() {
    console.log("Rây bột");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Ray bột xong lun");
      res();
    });
    return temp;
  }

  async function prepareSpices() {
    console.log("Chuẩn bị gia vị thoi nào");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Chuẩn bị gia vị ok lun");
      res();
    });
    return temp;
  }

  async function washVegetable() {
    console.log("Rửa rau ");

    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Đã rửa rau 7749 lần");
      res();
    });
    return temp;
  }
  await Promise.all([openEgg(), siftflour(), prepareSpices(), washVegetable()]);
}

// làm bánh xèo
async function cook() {
  async function Kneadingdough() {
    console.log("nhào cục bột thoi");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Nhào ok ròi");
      res();
    });
    return temp;
  }

  async function boilshrimp() {
    console.log("Luộc tôm thoi");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Tôm chín ròi");
      res();
    });
    return temp;
  }

  async function frymeat() {
    console.log("Xào thịt thoi");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Xào ròi, hên quá mém khét");
      res();
    });
    return temp;
  }

  async function grindbeans() {
    console.log("làm đậu thoi");

    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("nát đậu lun gòi");
      res();
    });
    return temp;
  }
  await Promise.all([Kneadingdough(), boilshrimp(), frymeat(), grindbeans()]);
}

async function preparefry() {
  console.log("đổ dô chảo thoi");
  await wait(5);
  let temp = new Promise((res, rej) => {
    console.log("mém đổ ra ngoài ròi ");
    res();
  });
  return temp;
}

async function fry() {
  console.log("chiên thoi");
  await wait(5);
  let temp = new Promise((res, rej) => {
    console.log("hên quá không khéc");
    res();
  });
  return temp;
}

async function makefishsauce() {
  console.log("pha chén nước mắm ");
  await wait(5);
  let temp = new Promise((res, rej) => {
    console.log("chén nước mắm quá ngon");
    res();
  });
  return temp;
}

async function prepareMeal() {
  async function prepareDish() {
    console.log("Dọn đĩa ra");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("Nkhông bể cái nào, quá đỉnh!!");
      res();
    });
    return temp;
  }

  async function preparevegetable() {
    console.log("dọn rau ra thoi");
    await wait(5);
    let temp = new Promise((res, rej) => {
      console.log("không mất cọng rau nào !!");
      res();
    });
    return temp;
  }
  await Promise.all([prepareDish(), preparevegetable()]);
}

async function eat() {
  console.log("Quất!!");
  await wait(5);
  let temp = new Promise((res, rej) => {
    console.log("Quá ngon!! . Chắc phải đi làm đầu bếp quá ");
    res();
  });
  return temp;
}

async function main() {
  await askUser();
  const amountFromMom = await xinTien();
  const cakePrice = await chonSize();

  if (amountFromMom < cakePrice) {
    console.log("Không đủ tiền ròi, chạy thoi đi chơi net thoi ");
    return;
  } else {
    const change = amountFromMom - cakePrice;
    console.log("Bạn đã mua bánh thành công!");
    console.log("Tiền thối lại:", change, "VND");
  }

  await goToMarket();
  await prepare();
  await cook();
  await preparefry();
  await fry();
  await makefishsauce();
  await prepareMeal();
  await eat();
}

main();
