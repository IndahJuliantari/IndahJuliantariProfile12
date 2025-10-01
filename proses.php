<?php
// 1. PENGATURAN KONEKSI KE DATABASE
$server = "localhost";
$user = "root";
$password = "";       
$database = "db_kontak"; 

$koneksi = mysqli_connect($server, $user, $password, $database);

if (!$koneksi) {
    // Jika ada masalah koneksi, pesan error ini akan tampil
    die("Koneksi ke database GAGAL: " . mysqli_connect_error()); 
}

// 2. AMBIL DATA DARI FORMULIR DAN BERSIHKAN
$nama    = mysqli_real_escape_string($koneksi, $_POST['nama']);
$email   = mysqli_real_escape_string($koneksi, $_POST['email']);
$subjek  = mysqli_real_escape_string($koneksi, $_POST['subjek']);
$pesan   = mysqli_real_escape_string($koneksi, $_POST['pesan']);

// 3. PERINTAH SQL UNTUK MEMASUKKAN DATA
$sql = "INSERT INTO contact (nama, email, subjek, pesan) 
        VALUES ('$nama', '$email', '$subjek', '$pesan')";

// 4. EKSEKUSI DAN TAMPILKAN HASIL
if (mysqli_query($koneksi, $sql)) {
    // Jika berhasil, data masuk ke Workbench
    echo "<h1>Pengiriman Berhasil! ✅</h1>";
    echo "<p><a href='index.html'>Kembali ke Formulir</a></p>";
} else {
    // Jika gagal, tampilkan pesan error SQL
    die("Error saat menyimpan data: " . mysqli_error($koneksi));
}

mysqli_close($koneksi);
?>