let btnTinhTien = document.getElementById("btnTinhTien");
let uberArray = [];
let totalWait = 0,
  totalMoney = 0,
  totalKM = 0,
  from0to1 = 0,
  from1to20 = 0,
  from20above = 0;

window.onload = loadUber();
btnTinhTien.onclick = checkMoney;

function checkMoney() {
  let uberRadio = document.getElementsByName("selector");
  let uberRadioChecked;

  uberRadio.forEach((item) => {
    if (item.checked) {
      uberRadioChecked = item.id;
    }
  });

  let soKM = document.getElementById("soKM").value;
  let thoiGianCho = document.getElementById("thoiGianCho").value;

  switch (uberRadioChecked) {
    case "uberX":
      {
        let uberType = uberArray[0];
        calculatePrice(soKM, thoiGianCho, uberType);
        displayInfo(soKM, thoiGianCho, uberType);
      }

      break;
    case "uberSUV":
      {
        let uberType = uberArray[1];
        calculatePrice(soKM, thoiGianCho, uberType);
        displayInfo(soKM, thoiGianCho, uberType);
      }
      break;
    case "uberBlack":
      {
        let uberType = uberArray[2];
        calculatePrice(soKM, thoiGianCho, uberType);
        displayInfo(soKM, thoiGianCho, uberType);
      }
      break;
    default:
      console.log("ERROR AT checkMoney() GO FIX IT");
      break;
  }
}

function displayInfo(km, tgCho, uber) {
  let intLFormat = Intl.NumberFormat();
  document.getElementById("totalKM").innerHTML = km;
  document.getElementById("totalKMMoney").innerHTML =
    intLFormat.format(totalKM);
  document.getElementById("xuatTien").innerHTML = intLFormat.format(totalMoney);
  document.getElementById("modalTotalMoney").innerHTML =
    intLFormat.format(totalMoney);
  document.getElementById("modalTotalWaitPrice").innerHTML =
    intLFormat.format(totalWait);
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("modalUberType").innerHTML = uber.uberType;
  document.getElementById("modalWaitTime").innerHTML = tgCho;

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

  document.getElementById("modalWaitPrice").innerHTML = intLFormat.format(
    uber.uberWaitPrice
  );

  if (km <= 1) {
    tr0to1.style.display = "table-row";
    tr1to20.style.display = "none";
    tr20above.style.display = "none";

    from0to1__modalKM.innerHTML = 1;
    from0to1__modalKMPrice.innerHTML = intLFormat.format(
      uber.uberPriceFrom0To1
    );
    from0to1__modalTotalKMPrice.innerHTML = intLFormat.format(from0to1);
  } else if (km > 1 && km <= 20) {
    tr0to1.style.display = "table-row";
    tr1to20.style.display = "table-row";
    tr20above.style.display = "none";

    from0to1__modalKM.innerHTML = 1;
    from0to1__modalKMPrice.innerHTML = intLFormat.format(
      uber.uberPriceFrom0To1
    );
    from0to1__modalTotalKMPrice.innerHTML = intLFormat.format(from0to1);

    from1to20__modalKM.innerHTML = km - 1;
    from1to20__modalKMPrice.innerHTML = intLFormat.format(
      uber.uberPriceFrom1To20
    );
    from1to20__modalTotalKMPrice.innerHTML = intLFormat.format(from1to20);
  } else if (km > 20) {
    tr0to1.style.display = "table-row";
    tr1to20.style.display = "table-row";
    tr20above.style.display = "table-row";

    from0to1__modalKM.innerHTML = 1;
    from0to1__modalKMPrice.innerHTML = intLFormat.format(
      uber.uberPriceFrom0To1
    );
    from0to1__modalTotalKMPrice.innerHTML = intLFormat.format(from0to1);

    from1to20__modalKM.innerHTML = 19;
    from1to20__modalKMPrice.innerHTML = intLFormat.format(
      uber.uberPriceFrom1To20
    );
    from1to20__modalTotalKMPrice.innerHTML = intLFormat.format(from1to20);
    from20above__modalKM.innerHTML = (km - 20).toFixed(1);
    from20above__modalKMPrice.innerHTML = intLFormat.format(
      uber.uberPriceFrom20AndAbove
    );
    from20above__modalTotalKMPrice.innerHTML = intLFormat.format(from20above);
  }
}

function calculatePrice(km, tgCho, uber) {
  totalWait = 0;
  totalMoney = 0;
  totalKM = 0;
  from0to1 = 0;
  from1to20 = 0;
  from20above = 0;

  totalWait = tgCho * Number(uber.uberWaitPrice);
  if (km <= 1) {
    from0to1 = uber.uberPriceFrom0To1;
    from1to20 = 0;
    from20above = 0;
    totalKM = Number(from0to1);
    totalMoney = totalKM + totalWait;
  } else if (km > 1 && km <= 20) {
    from0to1 = uber.uberPriceFrom0To1;
    from1to20 = uber.uberPriceFrom1To20 * (km - 1);
    from20above = 0;
    totalKM = Number(from1to20) + Number(from0to1);
    totalMoney = totalKM + totalWait;
  } else if (km > 20) {
    from0to1 = uber.uberPriceFrom0To1;
    from1to20 = uber.uberPriceFrom1To20 * 19;
    from20above = uber.uberPriceFrom20AndAbove * (km - 20);
    totalKM = Number(from20above) + Number(from1to20) + Number(from0to1);
    totalMoney = totalKM + totalWait;
  }
}

function loadUber() {
  let xUber = new Uber();
  xUber.uberType = "uberX";
  xUber.uberPriceFrom0To1 = "8000";
  xUber.uberPriceFrom1To20 = "12000";
  xUber.uberPriceFrom20AndAbove = "10000";
  xUber.uberWaitPrice = "2000";

  let suvUber = new Uber();
  suvUber.uberType = "uberSUV";
  suvUber.uberPriceFrom0To1 = "9000";
  suvUber.uberPriceFrom1To20 = "14000";
  suvUber.uberPriceFrom20AndAbove = "12000";
  suvUber.uberWaitPrice = "3000";

  let blackUber = new Uber();
  blackUber.uberType = "uberBlack";
  blackUber.uberPriceFrom0To1 = "10000";
  blackUber.uberPriceFrom1To20 = "16000";
  blackUber.uberPriceFrom20AndAbove = "14000";
  blackUber.uberWaitPrice = "4000";

  uberArray.push(xUber);
  uberArray.push(suvUber);
  uberArray.push(blackUber);
}
