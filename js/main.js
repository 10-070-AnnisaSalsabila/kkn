// Load header & footer from partials so you only edit once
function loadPartials() {
  const headerContainer = document.getElementById("header");
  const footerContainer = document.getElementById("footer");

  fetch("partials/header.html").then(r => r.text()).then(html => {
    headerContainer.innerHTML = html;
    // Highlight active menu based on current page
    const links = headerContainer.querySelectorAll('a[data-page]');
    const path = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  });

  fetch("partials/footer.html").then(r => r.text()).then(html => {
    footerContainer.innerHTML = html;
    const yearSpan = footerContainer.querySelector("#year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  });
}

// Render latest N news on homepage
async function renderLatestNews(jsonPath, limit = 3) {
  try {
    const res = await fetch(jsonPath);
    const data = await res.json();
    const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    const items = sorted.slice(0, limit);
    const container = document.getElementById("latest-news");
    container.innerHTML = items.map(toNewsCard).join("");
  } catch (e) {
    console.error("Gagal memuat berita:", e);
  }
}

// Render all news on news page
async function renderNewsList(jsonPath) {
  try {
    const res = await fetch(jsonPath);
    const data = await res.json();
    const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    const container = document.getElementById("news-list");
    container.innerHTML = sorted.map(toNewsCard).join("");
  } catch (e) {
    console.error("Gagal memuat berita:", e);
  }
}

function toNewsCard(item) {
  const date = new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
  const img = item.image ? `<img src="${item.image}" alt="" style="width:100%; border-radius:12px; margin-bottom:10px;">` : "";
  const link = item.url ? `<p><a class="btn ghost" href="${item.url}">Baca selengkapnya</a></p>` : "";
  return `
    <article class="card">
      ${img}
      <div class="meta">${date}</div>
      <h3>${item.title}</h3>
      <p>${item.excerpt || ""}</p>
      ${link}
    </article>
  `;
}
