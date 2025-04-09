// Neue Frage hinzufügen
const form = document.querySelector('[data-js="form"]');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const question = form.elements.question.value;
  const answer = form.elements.answer.value;

  const card = document.createElement('section');
  card.className = 'card';
  card.dataset.id = crypto.randomUUID(); // erzeugt eine eindeutige ID

  card.innerHTML = `
    <h2>${question}</h2>
    <button class="btn answer-btn">Show Answer</button>
    <p class="answer hidden">${answer}</p>
    <div class="card-footer">
      <span class="tag">#new</span>
      <button class="bookmark-btn">🔖</button>
    </div>
  `;

  document.querySelector('.quiz-page').prepend(card);

  // Neue Karte aktivieren
  const btn = card.querySelector('.answer-btn');
  btn.addEventListener('click', () => {
    const answerEl = btn.nextElementSibling;
    answerEl.classList.toggle('hidden');
  });

  const bookmarkBtn = card.querySelector('.bookmark-btn');
  bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.toggle('active');
    bookmarks[card.dataset.id] = bookmarkBtn.classList.contains('active');
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  });

  form.reset();
});
