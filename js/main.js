let btnTinhTien = document.getElementById("btnTinhTien");

btnTinhTien.onclick = checkMoney;

function checkMoney() {
  let uberType,
    totalMoney,
    totalKM,
    totalWait,
    from0to1 = 0,
    from1to20 = 0,
    from20above = 0;
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
        totalWait = thoiGianCho * waitMoney[0];
        if (soKM <= 1) {
          from0to1 = xPrice[0];
          from1to20 = 0;
          from20above = 0;
          totalKM = from0to1;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 1 && soKM <= 20) {
          from0to1 = xPrice[0];
          from1to20 = xPrice[1] * (soKM - 1);
          from20above = 0;
          totalKM = from1to20 + from0to1;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 20) {
          from0to1 = xPrice[0];
          from1to20 = xPrice[1] * 19;
          from20above = xPrice[2] * (soKM - 20);
          totalKM = from20above + from1to20 + from0to1;
          totalMoney = totalKM + totalWait;
        }
      }

      break;
    case "uberSUV":
      {
        totalWait = thoiGianCho * waitMoney[1];
        if (soKM <= 1) {
          from0to1 = suvPrice[0];
          from1to20 = 0;
          from20above = 0;
          totalKM = from0to1;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 1 && soKM <= 20) {
          from0to1 = suvPrice[0];
          from1to20 = suvPrice[1] * (soKM - 1);
          from20above = 0;
          totalKM = from1to20 + from0to1;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 20) {
          from0to1 = suvPrice[0];
          from1to20 = suvPrice[1] * 19;
          from20above = suvPrice[2] * (soKM - 20);
          totalKM = from20above + from1to20 + from0to1;
          totalMoney = totalKM + totalWait;
        }
      }
      break;
    case "uberBlack":
      {
        totalWait = thoiGianCho * waitMoney[2];
        if (soKM <= 1) {
          from0to1 = blackPrice[0];
          from1to20 = 0;
          from20above = 0;
          totalKM = from0to1;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 1 && soKM <= 20) {
          from0to1 = blackPrice[0];
          from1to20 = blackPrice[1] * (soKM - 1);
          from20above = 0;
          totalKM = from1to20 + from0to1;
          totalMoney = totalKM + totalWait;
        } else if (soKM > 20) {
          from0to1 = blackPrice[0];
          from1to20 = blackPrice[1] * 19;
          from20above = blackPrice[2] * (soKM - 20);
          totalKM = from20above + from1to20 + from0to1;
          totalMoney = totalKM + totalWait;
        }
      }
      break;
    default:
      console.log("ERROR HAHAHAHAHAHAHA GO FIX IT");
      break;
  }

  // console.log("from0to1: ", from0to1);
  // console.log("from1to20: ", from1to20);
  // console.log("from20above: ", from20above);

  let intLFormat = Intl.NumberFormat();

  document.getElementById("xuatTien").innerHTML = intLFormat.format(totalMoney);
  document.getElementById("modalTotalMoney").innerHTML =
    intLFormat.format(totalMoney);
  document.getElementById("modalTotalWaitPrice").innerHTML =
    intLFormat.format(totalWait);
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("modalUberType").innerHTML = uberType;
  document.getElementById("modalWaitTime").innerHTML = thoiGianCho;

  // document.getElementById("modalTotalKMPrice").innerHTML =
  //   intLFormat.format(totalKM);
  // document.getElementById("modalKM").innerHTML = soKM;

  let tr0to1 = document.getElementById("from0to1");
  let from0to1__modalKM = document.getElementById("from0to1__modalKM");
  let from0to1__modalKMPrice = document.getElementById(
    "from0to1__modalKMPrice"
  );
  let from0to1__modalTotalKMPrice = document.getElementById(
    "from0to1__modalTotalKMPrice"
  );

  let tr1to20 = document.getElementById("from1to20");
  let from1to20__modalKM = document.getElementById("from1to20__modalKM");
  let from1to20__modalKMPrice = document.getElementById(
    "from1to20__modalKMPrice"
  );
  let from1to20__modalTotalKMPrice = document.getElementById(
    "from1to20__modalTotalKMPrice"
  );

  let tr20above = document.getElementById("from20above");
  let from20above__modalKM = document.getElementById("from20above__modalKM");
  let from20above__modalKMPrice = document.getElementById(
    "from20above__modalKMPrice"
  );
  let from20above__modalTotalKMPrice = document.getElementById(
    "from20above__modalTotalKMPrice"
  );

  switch (uberType) {
    case "uberX":
      {
        document.getElementById("modalWaitPrice").innerHTML = intLFormat.format(
          waitMoney[0]
        );
        if (soKM <= 1) {
          tr0to1.style.display = "table-row";
          tr1to20.style.display = "none";
          tr20above.style.display = "none";

          from0to1__modalKM.innerHTML = 1;
          from0to1__modalKMPrice.innerHTML = intLFormat.format(xPrice[0]);
          from0to1__modalTotalKMPrice.innerHTML = from0to1;

        } else if (soKM > 1 && soKM <= 20) {
          tr0to1.style.display = "table-row";
          tr1to20.style.display = "table-row";
          tr20above.style.display = "none";

          from0to1__modalKM.innerHTML = 1;
          from0to1__modalKMPrice.innerHTML = intLFormat.format(xPrice[0]);
          from0to1__modalTotalKMPrice.innerHTML = from0to1;

          from1to20__modalKM.innerHTML = soKM-1;
          from1to20__modalKMPrice.innerHTML = intLFormat.format(xPrice[1]);
          from1to20__modalTotalKMPrice.innerHTML = from1to20;

        } else if (soKM > 20) {

          tr0to1.style.display = "table-row";
          tr1to20.style.display = "table-row";
          tr20above.style.display = "table-row";

          from0to1__modalKM.innerHTML = 1;
          from0to1__modalKMPrice.innerHTML = intLFormat.format(xPrice[0]);
          from0to1__modalTotalKMPrice.innerHTML = from0to1;

          from1to20__modalKM.innerHTML = 19;
          from1to20__modalKMPrice.innerHTML = intLFormat.format(xPrice[1]);
          from1to20__modalTotalKMPrice.innerHTML = from1to20;

          from20above__modalKM.innerHTML = soKM - 20;
          from20above__modalKMPrice.innerHTML = intLFormat.format(xPrice[2]);
          from20above__modalTotalKMPrice.innerHTML = from20above;
        }
      }
      break;
    case "uberSUV":
      {
        document.getElementById("modalWaitPrice").innerHTML = intLFormat.format(
          waitMoney[1]
        );
        if (soKM <= 1) {
          document.getElementById("modalKMPrice").innerHTML = intLFormat.format(
            suvPrice[0]
          );
        } else if (soKM > 1 && soKM <= 20) {
          document.getElementById("modalKMPrice").innerHTML = intLFormat.format(
            suvPrice[1]
          );
        } else if (soKM > 20) {
          document.getElementById("modalKMPrice").innerHTML = intLFormat.format(
            suvPrice[2]
          );
        }
      }
      break;
    case "uberBlack":
      {
        document.getElementById("modalWaitPrice").innerHTML = intLFormat.format(
          waitMoney[2]
        );
        if (soKM <= 1) {
          document.getElementById("modalKMPrice").innerHTML = intLFormat.format(
            blackPrice[0]
          );
        } else if (soKM > 1 && soKM <= 20) {
          document.getElementById("modalKMPrice").innerHTML = intLFormat.format(
            blackPrice[1]
          );
        } else if (soKM > 20) {
          document.getElementById("modalKMPrice").innerHTML = intLFormat.format(
            blackPrice[2]
          );
        }
      }
      break;
    default:
      break;
  }
}
