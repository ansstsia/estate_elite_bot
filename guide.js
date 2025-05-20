function showGuide() {
  document.getElementById("credit-content").innerHTML = `
  <div style="border: 1px solid #00428C; border-radius: 8px; padding: 16px; font-size: 24px; background: #f9f9f9;">
    <ul style="list-style: none; padding-left: 0; margin: 0;">
      <li style="padding: 10px 0; border-bottom: 1px solid #00428C;">
        <strong>Шаг 1:</strong> Определите бюджет и получите консультацию по кредиту.
      </li>
      <li style="padding: 10px 0; border-bottom: 1px solid #00428C;">
        <strong>Шаг 2:</strong> Выберите район и параметры жилья (этаж, планировка, инфраструктура).
      </li>
      <li style="padding: 10px 0; border-bottom: 1px solid #00428C;">
        <strong>Шаг 3:</strong> Проверьте документы на квартиру — право собственности, отсутствие долгов и обременений.
      </li>
      <li style="padding: 10px 0; border-bottom: 1px solid #00428C;">
        <strong>Шаг 4:</strong> Заключите договор с продавцом или застройщиком.
      </li>
      <li style="padding: 10px 0;">
        <strong>Шаг 5:</strong> Зарегистрируйте сделку в соответствующих органах.
      </li>
    </ul>
  </div>
  <p style="font-size: 24px; margin-top: 16px;">Если нужна помощь — наши агенты проконсультируют вас бесплатно.</p>


    <h3 style="margin-top: 30px; font-size: 22px; ">❓ Часто задаваемые вопросы</h3>
    <div class="faq">
      ${[
        ['Можно ли купить квартиру без первоначального взноса?', 'Да, некоторые банки предлагают такие программы, но процентная ставка будет выше.'],
        ['Что означает «обременение» на квартире?', 'Это ограничение — например, ипотека, арест или залог, которое может повлиять на продажу квартиры.'],
        ['Сколько стоит помощь риэлтора?', 'Обычно комиссия риэлтора составляет 1–3% от стоимости сделки, но зависит от региона и сложности.'],
        ['Можно ли проверить квартиру самостоятельно?', 'Частично — вы можете запросить выписку из ЕГРН, но лучше обратиться к юристу или агенту.'],
        ['Какие документы обязательно проверить перед покупкой?', 'Право собственности, выписка из домовой книги, отсутствие обременений и долгов по ЖКХ.']
      ].map(([q, a]) => `
        <div class="faq-item">
          <button class="faq-question">
            <span class="arrow">▶</span> ${q}
          </button>
          <div class="faq-answer">${a}</div>
        </div>
      `).join('')}
    </div>
          <button onclick="document.location='index.html'">Вернуться на главную</button>
  `;

  // Анимация + стрелочки
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const arrow = btn.querySelector(".arrow");
      const isOpen = answer.classList.contains("active");
  
      // Закрыть все
      document.querySelectorAll(".faq-answer").forEach(el => {
        el.classList.remove("active");
        el.style.maxHeight = null;
        el.previousElementSibling.querySelector(".arrow").classList.remove("rotate");
      });
  
      // Открыть текущий (если был закрыт)
      if (!isOpen) {
        answer.classList.add("active");
  
        // Дождаться применения padding через класс, чтобы получить правильный scrollHeight
        requestAnimationFrame(() => {
          answer.style.maxHeight = answer.scrollHeight + "px";
        });
  
        arrow.classList.add("rotate");
      }
    });
  });
  
}

showGuide();
