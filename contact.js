function showContact() {
  document.getElementById("content").innerHTML = `
    <h2>📞 Связаться с нами</h2>
    <p>Наш телефон: <strong>+375 (29) 123-45-67</strong></p>
    <p>Email: <strong>info@realestate.by</strong></p>
    <p>Наш офис: г. Минск, ул. Примерная 10, офис 12</p>
    <p>Или свяжитесь с агентом прямо в Telegram 👇</p>
    <a href="https://t.me/your_agent_username" target="_blank">
      <button>Связаться в Telegram</button>
    </a>
  `;
}
