function showContact() {
  const content = document.getElementById("content");
  content.style.fontSize = "20px";
  document.getElementById("content").innerHTML = `
    <p>Наш телефон: <strong>+375 (29) 111-11-11</strong></p>
    <p>Email: <strong>estateelite@gmail.com</strong></p>
    <p>Наш офис: г. Минск, улица Свердлова, 32</p>
    <p>Или свяжитесь с агентом прямо в Telegram 👇</p>
    <a href="https://t.me/ansstsia" target="_blank" style="text-decoration: none;">
      <button>Связаться в Telegram</button>
            <button onclick="document.location='index.html'">Вернуться на главную</button>
    </a>

    <div class="map-container">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.287324731149!2d27.55530807813563!3d53.89109687245227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfdb9da715f9%3A0x80f9de243a0c8fbd!2z0YPQu9C40YbQsCDQodCy0LXRgNC00LvQvtCy0LAgMzIsINCc0LjQvdGB0LosINCc0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMIDIyMDAwNiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sfr!4v1747779300445!5m2!1sru!2sfr" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
  `;
}
showContact();
