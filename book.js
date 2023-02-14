const date = new Date();
var day = (date.getDate() + 1).toString().padStart(2, "0");
var month = (date.getMonth() + 1).toString().padStart(2, "0");
var year = date.getFullYear();
var tomorrow = `${year}-${month}-${day}`;
$("#Check-In-Date").prop("min", tomorrow);
$("#Check-Out-Date").prop("min", tomorrow);
var minin;
var maxin;
var inDate;
var outDate;
$("#Check-In-Date").on("change", function () {
  inDate = new Date($("#Check-In-Date").val());
  var inday = (inDate.getDate() + 1).toString().padStart(2, "0");
  var inmonth = (inDate.getMonth() + 1).toString().padStart(2, "0");
  var inyear = inDate.getFullYear();
  minin = `${inyear}-${inmonth}-${inday}`;
});

$("#Check-Out-Date").on("change", function () {
  outDate = new Date($("#Check-Out-Date").val());
  var outday = (outDate.getDate() - 1).toString().padStart(2, "0");
  var outmonth = (outDate.getMonth() + 1).toString().padStart(2, "0");
  var outyear = outDate.getFullYear();
  maxin = `${outyear}-${outmonth}-${outday}`;
});

$("#Check-Out-Date").on("click", function () {
  if ($("#Check-In-Date").val() != "") {
    $("#Check-Out-Date").prop("min", minin);
  }
});

$("#Check-In-Date").on("click", function () {
  $("#Check-In-Date").prop("max", maxin);
});

// showroom

$("#ShowKUKI").css("display", "none");

$(document).ready(function () {
  $("#Room-Type").on("change", function (event) {
    $("#ShowKUKI,#ShowTOMOE").css("display", "none");
    if (event.target.value === "KUKI") {
      $("#ShowKUKI").fadeIn(400);
    } else {
      $("#ShowTOMOE").fadeIn(400);
    }
  });
});

// prepend  *
$("#Customer-Form label").prepend("<div class='star'>*</div>");

// Customer-Choice
$("#form-card-room strong").text(`${$("#Room-Type").val()}`);
$("#form-card-number strong").text(`${$("#number").val()}`);
// 房型
$("#Room-Type").on("change", function (event) {
  $("#form-card-room strong").text(`${event.target.value}`);
  if ($("#Check-In-Date").val() != "" && $("#Check-Out-Date").val() != "") {
    if ($("#Room-Type").val() === "TOMOE") {
      total = nights * price.TOMOE;
    } else if ($("#Room-Type").val() === "KUKI") {
      total = nights * price.KUKI;
    }
    $("#form-card-total strong").text(total.toLocaleString());
  }
});
// 入住
$("#Check-In-Date").on("change", function (event) {
  $("#form-card-checkin strong").text(`${event.target.value}`);
});
// 退房
$("#Check-Out-Date").on("change", function (event) {
  $("#form-card-checkout strong").text(`${event.target.value}`);
});
// 人數
$("#number").on("change", function (event) {
  $("#form-card-number strong").text(`${event.target.value}`);
});
// 金額
var price = { TOMOE: 10000, KUKI: 9000 };

$("#TOMOE-Price").text(price.TOMOE.toLocaleString());
$("#KUKI-Price").text(price.KUKI.toLocaleString());

var nights;
var total;
$("#Check-In-Date").on("change", function () {
  if ($("#Check-Out-Date").val() != "") {
    nights = outDate - inDate;
    nights /= 1000 * 3600 * 24;
    if ($("#Room-Type").val() === "TOMOE") {
      total = nights * price.TOMOE;
    } else if ($("#Room-Type").val() === "KUKI") {
      total = nights * price.KUKI;
    }

    $("#form-card-nights strong").text(nights.toString());
    $("#form-card-total strong").text(total.toLocaleString());
  }
});

$("#Check-Out-Date").on("change", function () {
  if ($("#Check-In-Date").val() != "") {
    nights = outDate - inDate;
    nights /= 1000 * 3600 * 24;
    if ($("#Room-Type").val() === "TOMOE") {
      total = nights * price.TOMOE;
    } else if ($("#Room-Type").val() === "KUKI") {
      total = nights * price.KUKI;
    }

    $("#form-card-nights strong").text(nights.toString());
    $("#form-card-total strong").text(total.toLocaleString());
  }
});
//表單提交
$("#confirm").on("click", function validateForm() {
  if ($("#Check-In-Date").val() == "") {
    alert("請選擇入住日期！");
    return;
  }

  if ($("#Check-Out-Date").val() == "") {
    alert("請選擇退房日期！");
    return;
  }

  if ($("#lastname").val() == "") {
    alert("請輸入姓氏");
    return;
  }

  if ($("#firstname").val() == "") {
    alert("請輸入名字");
    return;
  }

  if (!checkCellphone()) {
    return;
  }

  if (!checkEmail()) {
    return;
  }

  alert("感謝您的預定！");

  console.log($("form input"));
});
// $("#Book-Form").submit();
// $("#Customer-Form").submit();

function checkEmail() {
  var checkat = $("#email").val().indexOf("@", 0);
  if (checkat == -1) {
    alert("電子郵件必須包含「@」");
    return false;
  } else if (checkat == 0) {
    alert("電子郵件「@」之前不可為空");
    return false;
  } else if (checkat == $("#email").val().length - 1) {
    alert("電子郵件「@」之後不可為空");
    return false;
  } else {
    return true;
  }
}

function checkCellphone() {
  var phonerule = /^09[0-9]{8}$/;
  var checkat = $("#cellphone").val();
  if (checkat == "") {
    alert("請輸入手機號碼");
    return false;
  } else if (!phonerule.test(checkat)) {
    alert("請輸入正確手機10位數字號碼");
    return false;
  } else {
    return true;
  }
}
