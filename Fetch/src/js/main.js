const API_URL = 'http://localhost:3001/cards';

async function getposts() {
  const res = await fetch(API_URL);
  const data = await res.json();

  let text = "";
  const cards = document.querySelector(".cards");

  data.forEach(item => {
    // берем первую картинку из массива images
    const img = item.images[0] || '';

    text += `
      <div class="card">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>Цена: ${item.price} ${item.currency}</p>
        <img src="${img}" alt="${item.title}" width="150"/>
      </div>
    `;
  });

  cards.innerHTML = text;
}

getposts();