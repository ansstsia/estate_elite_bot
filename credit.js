function showCreditCalc() {
  document.getElementById("content").innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 10px; ">
      <label>Сумма недвижимости (BYN): <input id="amount" type="number" min="0" /></label>
      <label>Первоначальный взнос (BYN): <input id="down" type="number" min="0" /></label>
      <label>Срок кредита (лет): <input id="years" type="number" min="1" /></label>
      <label>Процентная ставка (% годовых): <input id="rate" type="number" step="0.01" value="14" min="0" /></label>
      <button onclick="calculateCredit()">Рассчитать</button>
      <button onclick="document.location='index.html'">Вернуться на главную</button>
      <div id="creditResult" class="p-2 text-sm text-red-600"></div>
    </div>
  `;
}

function calculateCredit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const down = parseFloat(document.getElementById("down").value);
  const years = parseInt(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value);

  const resultDiv = document.getElementById("creditResult");

  // Проверка на пустые или недопустимые значения
  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerText = "Введите корректную сумму недвижимости.";
    return;
  }
  if (isNaN(down) || down < 0 || down >= amount) {
    resultDiv.innerText = "Введите корректный первоначальный взнос (меньше суммы недвижимости).";
    return;
  }
  if (isNaN(years) || years <= 0) {
    resultDiv.innerText = "Введите корректный срок кредита в годах.";
    return;
  }
  if (isNaN(rate) || rate <= 0) {
    resultDiv.innerText = "Введите корректную процентную ставку.";
    return;
  }

  const loan = amount - down;
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const monthlyPayment = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const totalPayment = monthlyPayment * months;
  const overpay = totalPayment - loan;

  Object.assign(resultDiv.style, {
    color: "#00428C",
    fontSize: "24px",
    border: "1px solid #00428C",
    padding: "10px", // чтобы текст не прилипал к рамке
    borderRadius: "8px" // необязательно, но для красоты
  });
  
  resultDiv.innerHTML = `
    💵 <strong>Сумма кредита:</strong> ${loan.toFixed(2)} BYN<br>
    📅 <strong>Срок:</strong> ${months} мес.<br>
    💳 <strong>Ежемесячный платёж:</strong> ${monthlyPayment.toFixed(2)} BYN<br>
    💰 <strong>Переплата по процентам:</strong> ${overpay.toFixed(2)} BYN
  `;
}

showCreditCalc();
