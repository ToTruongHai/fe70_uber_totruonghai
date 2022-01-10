let btnTinhTien = document.getElementById("btnTinhTien");

btnTinhTien.onclick = checkMoney;

function checkMoney() {
  let uberType, totalMoney, totalKM, totalWait;
  let uberRadio = document.getElementsByName("selector");
  let soKM = document.getElementById("soKM").value;
  let thoiGianCho = document.getElementById("thoiGianCho").value;

  if (soKM === null || soKM === undefined || soKM === "") {
    document.getElementById("soKM").focus();
    return;
  }
  if (thoiGianCho === null || thoiGianCho === undefined || thoiGianCho === "") {
    document.getElementById("thoiGianCho").focus();
    return;
  }

  let waitMoney = [2000, 3000, 4000];
  let xPrice = [8000, 12000, 10000];
  let suvPrice = [9000, 14000, 12000];
  let blackPrice = [10000, 16000, 14000];

  uberRadio.forEach((item) => {
    if (item.checked) {
      uberType = item.id;
    }
  });

  switch (uberType) {
    case "uberX":
      {
        totalWait = Math.round(thoiGianCho) * waitMoney[0];
        if (soKM <= 1) {
          totalKM = xPrice[0];
          totalMoney = totalKM + totalWait;
        } else if (soKM > 1 && soKM <= 20) {
          totalKM = xPrice[1] * soKM;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 20) {
          totalKM = xPrice[2] * soKM;
          totalMoney = totalKM + totalWait;
        }
      }

      break;
    case "uberSUV":
      {
        totalWait = Math.round(thoiGianCho) * waitMoney[1];
        if (soKM <= 1) {
          totalKM = suvPrice[0];
          totalMoney = suvPrice[0] + totalWait;
        } else if (soKM > 1 && soKM <= 20) {
          totalKM = suvPrice[1] * soKM;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 20) {
          totalKM = suvPrice[2] * soKM;
          totalMoney = totalKM + totalWait;
        }
      }
      break;
    case "uberBlack":
      {
        totalWait = Math.round(thoiGianCho) * waitMoney[2];
        if (soKM <= 1) {
          totalKM = blackPrice[0];
          totalMoney = blackPrice[0] + totalWait;
        } else if (soKM > 1 && soKM <= 20) {
          totalKM = blackPrice[1] * soKM;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 20) {
          totalKM = blackPrice[2] * soKM;
          totalMoney = totalKM + totalWait;
        }
      }
      break;
    default:
      console.log("ERROR HAHAHAHAHAHAHA GO FIX IT");
      break;
  }

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML =
    Intl.NumberFormat().format(totalMoney);
  document.getElementById("modalTotalKMPrice").innerHTML =
    Intl.NumberFormat().format(totalKM);
  document.getElementById("modalTotalMoney").innerHTML =
    Intl.NumberFormat().format(totalMoney);
  document.getElementById("modalTotalWaitPrice").innerHTML =
    Intl.NumberFormat().format(totalWait);
  document.getElementById("modalUberType").innerHTML = uberType;
  document.getElementById("modalKM").innerHTML = soKM;
  document.getElementById("modalWaitTime").innerHTML = Math.round(thoiGianCho);

  if (uberType === "uberX") {
    document.getElementById("modalWaitPrice").innerHTML =
      Intl.NumberFormat().format(waitMoney[0]);
    if (soKM <= 1) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(xPrice[0]);
    } else if (soKM > 1 && soKM <= 20) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(xPrice[1]);
    } else if (soKM > 20) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(xPrice[2]);
    }
  } else if (uberType === "uberSUV") {
    document.getElementById("modalWaitPrice").innerHTML =
      Intl.NumberFormat().format(waitMoney[1]);
    if (soKM <= 1) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(suvPrice[0]);
    } else if (soKM > 1 && soKM <= 20) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(suvPrice[1]);
    } else if (soKM > 20) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(suvPrice[2]);
    }
  } else {
    document.getElementById("modalWaitPrice").innerHTML =
      Intl.NumberFormat().format(waitMoney[2]);

    if (soKM <= 1) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(blackPrice[0]);
    } else if (soKM > 1 && soKM <= 20) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(blackPrice[1]);
    } else if (soKM > 20) {
      document.getElementById("modalKMPrice").innerHTML =
        Intl.NumberFormat().format(blackPrice[2]);
    }
  }
}
