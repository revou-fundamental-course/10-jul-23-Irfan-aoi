function hitungBmi() {
  //mengambil nilai TINGGI BADAN yang diinput dari form
  let TinggiBadan = document.getElementById("tb").value;

  // konversi dari Centimeter ke Meter
  let meter = 100;

  // untuk mendapatkan tinggi badan dalam satuan meter
  let tbCm = TinggiBadan / meter;

  // menghitung pangkat 2 dari tinggi badan
  let Tinggi = Math.pow(tbCm, 2);

  //mengambil nilai BERAT BADAN yang diinput dari form
  let BeratBadan = document.getElementById("bb").value;

  // menghitung BMI
  let bmi = BeratBadan / Tinggi;

  // membulatkan 1 angka dibelakang desimal
  hasilAkhir = bmi.toFixed(1);

  //Validasi data berat & tinggi badan
  if (TinggiBadan == "" || BeratBadan == "") {
    alert("Berat Badan & Tinggi Badan WAJIB diisi");
  } else {
    alert("Data diproses");
  }

  // untuk menentukan status berat badan
  let kelompok = "";
  if (hasilAkhir >= 30.0) kelompok = "Obesitas";
  else if (hasilAkhir >= 25.0) kelompok = "Kelebihan berat badan";
  else if (hasilAkhir >= 18.5) kelompok = "Ideal";
  else kelompok = "Kekurangan berat badan";

  // menampilkan nilai BMI
  document.getElementById("score").innerHTML = hasilAkhir;

  // menampilkan status berat badan
  document.getElementById("status").innerHTML = kelompok;
}
