function showCreditCalc() {
  document.getElementById("content").innerHTML = `
    <h2>Кредитный калькулятор</h2>
    <label>Сумма кредита (BYN): <input id="amount" type="number" /></label>
    <label>Срок (лет): <input id="years" type="number" /></label>
    <label>Процентная ставка (%): <input id="rate" type="number" value="14" /></label>
    <button onclick="calculateCredit()">Рассчитать</button>
    <div id="creditResult" class="p-2"></div>
  `;
}

function calculateCredit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const years = parseInt(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
  const months = years * 12;

  const payment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
  document.getElementById("creditResult").innerText =
    "Ежемесячный платёж: " + payment.toFixed(2) + " BYN";
}
