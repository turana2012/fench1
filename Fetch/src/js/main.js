const API_URL = 'http://localhost:3001/cards';

async function getposts() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const cards = document.querySelector(".cards");
  let text = "";

  data.forEach(item => {
    const img = item.images[0] || '';

    text += `
      <div class="card">
        <div class="carditems">
          <div class="images">
            <img src="${img}" alt="${item.title}">
          </div>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a>${item.price}</a>
        </div>
      </div>
    `;
  });

  cards.innerHTML = text;
}

getposts();