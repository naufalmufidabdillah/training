// --- 1. Variables & Hoisting ---
console.log("ini adalah " + nama); // Output: ini adalah undefined (karena hoisting var)
var nama = "Naufal";

// console.log(umur); // Ini akan ERROR (Temporal Dead Zone) jika dijalankan
let usia = 20; 

// --- 2. Operator & Kondisional ---
usia += 5; // Sekarang usia = 25

let status; // Deklarasikan di luar agar bisa diakses (bukan block scope saja)
if (usia > 21) {
  status = "Dewasa";
} else {
  status = "Anak-anak";
}

console.log(status); // Output: Dewasa

if (status === "Dewasa" && usia > 25) {
    console.log("Boleh menikah");
} else {
    console.log("Belum boleh menikah");
}

console.log("null === undefined", null === undefined); // Output: false

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.unshift(0,15); 
console.log(numbers);

numbers.push(6);    

numbers.splice(3, 1);

console.log(numbers);


// if else statement

// switch case statement

let jadwal;
jadwal = 14;

if (jadwal > 24) {
    console.log("hanya ada 24 jam dalam sehari");
} else if (jadwal >= 4 && jadwal <=5 ) {
    console.log("bangun pagi");
} else if (jadwal >= 6 && jadwal <= 7) {
    console.log("mandi dan sarapan");
} else if (jadwal >= 8 && jadwal <= 11) {
    console.log("berangkat sekolah"); 
} else if (jadwal == 12) {
    console.log("pulang sekolah");
} else if (jadwal >= 13 && jadwal <= 15) {
    console.log("tidur siang");
} else if (jadwal >= 16 && jadwal <= 17) {
    console.log("waktu main");
} else {
    console.log("waktu belajar dan istirahat");
}

// validasi jam terlebih dahulu sebelum
