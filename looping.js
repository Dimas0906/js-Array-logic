// count Number
// function count(arr) {
//   //cek inputan array atau bukan
//   if (typeof arr !== "object") {
//     return `Error, masukan input array`;
//   } else {
//     let angka = 0;
//     //looping array, biar bisa tau valuenya apa
//     for (let i = 0; i < arr.length; i++) {
//       angka += arr[i];
//     }
//     // cek apakah value numerik atau value kosong, kalau bukan return error
//     if (typeof angka !== "number" || angka === 0) {
//       return `error, value di dalam array bukan numerik atau 0`;
//     }
//     return angka;
//   }
// }

// console.log(count([1, 2]));

// Reverse All Array
// function rev(arr) {
//   if (typeof arr !== "object") {
//     return `Error, input bukan array`;
//   } else {
//     let result = [];
//     let bantuan = 0;

//     for (let i = arr.length - 1; i >= 0; i--) {
//       let index = arr[i].toString();
//       let reverse = "";

//       for (let j = index.length - 1; j >= 0; j--) {
//         reverse += index[j];
//       }
//       result[bantuan] = Number(reverse);
//       bantuan++;
//     }
//     return result;
//   }
// }
// console.log(rev([123, 456]));

//Unique Array
// function unqArr(arr) {
//   let result = [];

//   function cek(number) {
//     for (let i = 0; i < result.length; i++)
//       if (result[i] === number) return false;
//     return true;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     // kondisi dari latif, saya masih belum terlalu paham penggunaan ternarry yang returnnya ternary lagi...
//     cek(arr[i]) ? (arr[i] ? (result[result.length] = arr[i]) : "") : "";
//   }
//   return result;
// }
// console.log(unqArr([1, 1, 2, 2, 2, 3, 3, 4, 4]));

// jajan Boba
// const listBoba = [
//   ["Xing Fu Tang", 38000],
//   ["OneZo", 53500],
//   ["KOI The", 36000],
//   ["Chatime", 25000],
//   ["Kokumi", 42000],
//   ["Bubble Station Milk", 13000],
// ];

// function jajanBoba(uang) {
//   let sisaUang = 0;
//   // start jajan dengan uang utuh
//   console.log(`David mulai jajan dengan uang jajan Rp${uang}`);

//   for (let i = 0; i < listBoba.length; i++) {
//     // buat variabel untuk mempermudah pada loop,
//     let jajan = listBoba[i][0];
//     let harga = listBoba[i][1];

//     // cek loop
//     if (uang > listBoba[i][1]) {
//       console.log(
//         `Dengan uang ${uang}, cukup untuk beli ${jajan},\nsetelah beli ${jajan} uangnya berkurang ${harga},\njadi uangnya sisa ${
//           uang - harga
//         }.`
//       );
//       uang -= harga;
//     } else {
//       console.log(`Dengan uang Rp${uang}, tidak cukup untuk beli ${jajan}`);
//       sisaUang = uang;
//     }
//   }
//   console.log(`David pulang dengan sisa uang jajan ${sisaUang}`);
//   return uang;
// }

// jajanBoba(100000);
