Website Desa — Starter (Static HTML/CSS/JS)

Cara pakai singkat:
1) Buka folder ini di VS Code.
2) Install ekstensi "Live Server" (jika belum).
3) Klik kanan file index.html → Open with Live Server (wajib, agar fetch JSON berjalan).
4) Edit konten:
   - Ubah nama desa di partials/header.html & partials/footer.html.
   - Edit teks di index.html, about.html, contact.html.
   - Update berita di data/news.json (format tanggal YYYY-MM-DD).
   - Tambahkan gambar ke folder img/ dan set "image" di news.json.
5) Deploy (pilih salah satu):
   - GitHub Pages: push ke repo → Settings → Pages → deploy dari branch main (folder root).
   - Netlify: drag & drop folder ini ke app.netlify.com → akan langsung online.
6) (Opsional) Domain: hubungkan domain .com/.id ke hosting (ikuti panduan DNS penyedia domain).

Catatan penting:
- Jangan buka file langsung pakai file://, gunakan Live Server, supaya fetch JSON/partials berfungsi.
- Untuk formulir, ganti iframe Google Form di contact.html dengan form desa.
- Pastikan ukuran foto < 300 KB agar website cepat diakses.
