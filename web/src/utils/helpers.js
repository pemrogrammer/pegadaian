import axios from "axios";
import moment from "moment";

export const cleaningNumber = (value) => value?.toString().replace(/\./g, "");

// export const numbersOnly = (value) => value.replace(/[^\d]/g, "");
export const numbersOnly = (value) => {
  // console.info(typeof value);

  const cleaned = value.toString().replace(/[^0-9,]/g, '').replace(',', '.');
  return Number(cleaned);
}

/* Fungsi formatRupiah */
export const formatCurrency = (value, prefix) => {
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
  // return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
  return prefix == undefined ? rupiah : rupiah ? prefix + rupiah : "";
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