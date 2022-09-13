import { Redirect } from "react-router-dom";

//url for production
export var url = "";
if (process.env.NODE_ENV === "development") {
  url = "";
} else {
  url = window.location.host.split("/")[1];
  if (url) {
    url = `/${window.location.host.split("/")[1]}`;
  } else url = process.env.PUBLIC_URL; /// ADD YOUR CPANEL SUB-URL
}

//Function to validate and return errors for a form
export const checkForm = (formData) => {
  let errorState = {};
  Object.keys(formData).forEach((item) => {
    if (formData[item] === null || formData[item] === "") {
      errorState[item] = "This field is required";
    }
  });
  return errorState;
};

//Function that returns the first or first two letters from a name
export const findUpper = (string) => {
  let extractedString = [];

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase() && string.charAt(i) !== " ") {
      extractedString.push(string.charAt(i));
    }
  }
  if (extractedString.length > 1) {
    return extractedString[0] + extractedString[1];
  } else {
    return extractedString[0];
  }
};

//Function that calculates the from current date
export const setDeadline = (days) => {
  let todayDate = new Date();
  var newDate = new Date(todayDate);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

// Function to structure date ex : Jun 4, 2011;
export const getDateStructured = (date) => {
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let final = monthNames[m] + " " + d + ", " + y;
  return final;
};

// Function to structure date ex: YYYY-MM-DD
export const setDateForPicker = (rdate) => {
  let d = rdate.getDate();
  d < 10 && (d = "0" + d);
  let m = rdate.getMonth() + 1;
  m < 10 && (m = "0" + m);
  let y = rdate.getFullYear();
  rdate = y + "-" + m + "-" + d;

  return rdate;
};

// Set deadlines for projects
export const setDeadlineDays = (deadline) => {
  var currentDate = new Date();
  var difference = deadline.getTime() - currentDate.getTime();
  var days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
};

//Date formatter function Example : 10-02-2004
export const dateFormatterAlt = (date, reverse) => {
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  reverse ? (date = m + "-" + d + "-" + y) : (date = y + "-" + d + "-" + m);
  return date;
};

//Date formatter function
export const dateFormatter = (date, reverse, string) => {
  var dateformat = date.split("-");
  //var date = dateformat[1]+"-"+dateformat[2]+"-"+dateformat[0];
  reverse
    ? (date = dateformat[2] + "-" + dateformat[0] + "-" + dateformat[1])
    : (date = dateformat[1] + "-" + dateformat[2] + "-" + dateformat[0]);

  return date;
};

//todays Date
export const todaysDate = new Date();

//current Time
export const currentTime = () => {
  var hours = todaysDate.getHours();
  var minutes = todaysDate.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

//Percentage calculation
export const calcPercentage = (str1, str2) => {
  let result = Number(str2) / Number(str1);
  result = result * 100;
  return Math.floor(result);
};

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + " " + truncate(str.substr(n - 1, str.length), n) : str;
};

export const RedirectAs404 = ({ location }) => (
  <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
);

// returns upload url
export const getUploadParams = () => {
  return { url: "https://httpbin.org/post" };
};

export const bulkActionOptions = [
  { value: "suspend", label: "Suspend User" },
  { value: "delete", label: "Delete User" },
];

// Converts KB to MB
export const bytesToMegaBytes = (bytes) => {
  let result = bytes / (1024 * 1024);
  return result.toFixed(2);
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const cleaningNumber = (value) => value?.toString().replace(/\./g, "");

export const numbersOnly = (value) => value.replace(/[^\d]/g, "");

/* Fungsi formatRupiah */
export const formatCurrency = (value, symbolCurrency) => {
  let separator = null;
  let number_string = value
      .toString()
      .replace(/[^,\d]/g, "")
      .toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return symbolCurrency == undefined ? rupiah : rupiah ? symbolCurrency + rupiah : "";
  // return prefix == undefined ? rupiah : rupiah ? rupiah : "";
};

/*! Copyright (c) 2016 Naufal Rabbani (https://github.com/BosNaufal/terbilang-js)
 * Licensed Under MIT (http://opensource.org/licenses/MIT)
 *
 * Version 0.0.1
 *
 * Inspired By: http://notes.rioastamal.net/2012/03/membuat-fungsi-terbilang-pada-php.html
 */
/*! Copyright (c) 2016 Naufal Rabbani (https://github.com/BosNaufal/terbilang-js)
 * Licensed Under MIT (http://opensource.org/licenses/MIT)
 *
 * Version 0.0.1
 *
 * Inspired By: http://notes.rioastamal.net/2012/03/membuat-fungsi-terbilang-pada-php.html
 */
export const terbilang = (a) => {
  var c = " Satu Dua Tiga Empat Lima Enam Tujuh Delapan Sembilan Sepuluh Sebelas".split(" ");
  if (12 > a) var b = c[a];
  else
    20 > a
      ? (b = c[a - 10] + " Belas")
      : 100 > a
      ? ((b = parseInt(String(a / 10).substr(0, 1))), (b = c[b] + " Puluh " + c[a % 10]))
      : 200 > a
      ? (b = "Seratus " + terbilang(a - 100))
      : 1e3 > a
      ? ((b = parseInt(String(a / 100).substr(0, 1))), (b = c[b] + " Ratus " + terbilang(a % 100)))
      : 2e3 > a
      ? (b = "Seribu " + terbilang(a - 1e3))
      : 1e4 > a
      ? ((b = parseInt(String(a / 1e3).substr(0, 1))), (b = c[b] + " Ribu " + terbilang(a % 1e3)))
      : 1e5 > a
      ? ((b = parseInt(String(a / 100).substr(0, 2))), (a %= 1e3), (b = terbilang(b) + " Ribu " + terbilang(a)))
      : 1e6 > a
      ? ((b = parseInt(String(a / 1e3).substr(0, 3))), (a %= 1e3), (b = terbilang(b) + " Ribu " + terbilang(a)))
      : 1e8 > a
      ? ((b = parseInt(String(a / 1e6).substr(0, 4))), (a %= 1e6), (b = terbilang(b) + " Juta " + terbilang(a)))
      : 1e9 > a
      ? ((b = parseInt(String(a / 1e6).substr(0, 4))), (a %= 1e6), (b = terbilang(b) + " Juta " + terbilang(a)))
      : 1e10 > a
      ? ((b = parseInt(String(a / 1e9).substr(0, 1))), (a %= 1e9), (b = terbilang(b) + " Milyar " + terbilang(a)))
      : 1e11 > a
      ? ((b = parseInt(String(a / 1e9).substr(0, 2))), (a %= 1e9), (b = terbilang(b) + " Milyar " + terbilang(a)))
      : 1e12 > a
      ? ((b = parseInt(String(a / 1e9).substr(0, 3))), (a %= 1e9), (b = terbilang(b) + " Milyar " + terbilang(a)))
      : 1e13 > a
      ? ((b = parseInt(String(a / 1e10).substr(0, 1))), (a %= 1e10), (b = terbilang(b) + " Triliun " + terbilang(a)))
      : 1e14 > a
      ? ((b = parseInt(String(a / 1e12).substr(0, 2))), (a %= 1e12), (b = terbilang(b) + " Triliun " + terbilang(a)))
      : 1e15 > a
      ? ((b = parseInt(String(a / 1e12).substr(0, 3))), (a %= 1e12), (b = terbilang(b) + " Triliun " + terbilang(a)))
      : 1e16 > a &&
        ((b = parseInt(String(a / 1e15).substr(0, 1))),
        (a %= 1e15),
        (b = terbilang(b) + " Kuadriliun " + terbilang(a)));
  a = b.split(" ");
  c = [];
  for (b = 0; b < a.length; b++) "" != a[b] && c.push(a[b]);
  return c.join(" ");
};
