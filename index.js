const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SDK Store</title>

<style>
*{
box-sizing:border-box;
margin:0;
padding:0;
font-family:Arial,sans-serif;
}

body{
background:#0b1020;
color:white;
}

header{
padding:25px;
text-align:center;
background:#111936;
}

.container{
max-width:900px;
margin:auto;
padding:20px;
}

.hero{
background:#172554;
padding:25px;
border-radius:20px;
margin-bottom:25px;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}

.card{
background:#111827;
padding:20px;
border-radius:18px;
border:1px solid #26345f;
}

.price{
color:#60a5fa;
font-size:22px;
font-weight:bold;
margin:15px 0;
}

button{
width:100%;
padding:12px;
border:none;
border-radius:12px;
background:#2563eb;
color:white;
font-weight:bold;
cursor:pointer;
}

form{
background:#111827;
padding:20px;
border-radius:18px;
margin-top:30px;
}

input,select{
width:100%;
padding:12px;
margin:8px 0;
border-radius:10px;
border:none;
}

</style>

</head>

<body>

<header>
<h1>🛒 SDK Store</h1>
<p>Toko Produk Digital</p>
</header>


<div class="container">

<div class="hero">
<h2>Selamat Datang 👋</h2>
<p>Pilih produk digital yang kamu butuhkan.</p>
</div>


<h2>Produk</h2>
<br>

<div class="products">


<div class="card">
<h3>🤖 Paket Bot Telegram</h3>
<p>Bot otomatis untuk kebutuhan digital.</p>
<div class="price">
Rp25.000
</div>

<button onclick="pilih('Paket Bot Telegram')">
Beli Sekarang
</button>

</div>



<div class="card">
<h3>🎨 Paket Prompt AI</h3>
<p>Kumpulan prompt AI siap pakai.</p>

<div class="price">
Rp15.000
</div>

<button onclick="pilih('Paket Prompt AI')">
Beli Sekarang
</button>

</div>



<div class="card">
<h3>📦 Produk Digital</h3>
<p>Produk digital untuk bisnis online.</p>

<div class="price">
Rp10.000
</div>

<button onclick="pilih('Produk Digital')">
Beli Sekarang
</button>

</div>


</div>



<form method="POST" action="/order">

<h2>Form Pembelian</h2>

<input name="nama" placeholder="Nama kamu" required>

<input name="kontak" placeholder="WhatsApp / Telegram" required>

<input id="produk" name="produk" placeholder="Produk" readonly>

<button type="submit">
Kirim Pesanan
</button>

</form>


</div>


<script>

function pilih(nama){

document.getElementById("produk").value = nama;

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}

</script>


</body>
</html>
`);
});


app.post("/order",(req,res)=>{

const {nama,kontak,produk}=req.body;


res.send(`

<h2>✅ Pesanan diterima</h2>

<p>Nama: ${nama}</p>
<p>Kontak: ${kontak}</p>
<p>Produk: ${produk}</p>

<p>Nanti akan diproses oleh admin.</p>

<a href="/">Kembali</a>

`);

});


app.listen(PORT,()=>{

console.log("====================");
console.log("🛒 SDK STORE AKTIF");
console.log("PORT:",PORT);
console.log("====================");

});