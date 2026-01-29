    // Menghubungkan ke whatsApp
    function kirimKeWA(element) {
        // Nomor WhatsApp Admin (
        const nomorWA = "6289521001497"; 

        // Mencari elemen kartu produk
        const card = element.closest('.product-card');

        // Mengambil data produk
        const namaProduk = card.querySelector('.product-name').innerText;
        const hargaProduk = card.querySelector('.product-price').innerText;
        const linkGambar = card.querySelector('.product-img').src;

        // Membuat pesan
        const pesan = `Halo Kak admin Bouquet Bysindi, saya mau pesan:%0A%0A` +
                      `*Nama:* ${namaProduk}%0A` +
                      `*Harga:* ${hargaProduk}%0A` +
                      `*Foto Produk:* ${linkGambar}%0A%0A` +
                      `Apakah stok masih tersedia?`;

        // Membuka WhatsApp
        const url = `https://wa.me/${nomorWA}?text=${pesan}`;
         window.open(url, '_blank');
    }

    // ZOOM GAMBAR PRODUK
    document.querySelectorAll('.product-img').forEach(img => {
        img.addEventListener('click', function () {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImg');
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    // TUTUP MODAL
    document.querySelector('.close-modal').onclick = function () {
        document.getElementById('imageModal').style.display = 'none';
    };

    // TUTUP JIKA KLIK AREA GELAP
    document.getElementById('imageModal').addEventListener('click', function (e) {
        if (e.target !== document.getElementById('modalImg')) {
            this.style.display = 'none';
        }
    });