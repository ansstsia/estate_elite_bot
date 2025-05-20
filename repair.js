function showRepairCalc() {
  document.getElementById("content").innerHTML = `
    <h2>Калькулятор ремонта</h2>
    <label>Площадь квартиры (м²): <input id="area" type="number" /></label>
    <label>Тип ремонта:
      <select id="repairType">
        <option value="basic">Бюджетный (~150 BYN/м²)</option>
        <option value="standard">Стандарт (~300 BYN/м²)</option>
        <option value="premium">Премиум (~500 BYN/м²)</option>
      </select>
    </label>
    <button onclick="calculateRepair()">Рассчитать</button>
    <div id="repairResult" class="p-2"></div>
  `;
}

function calculateRepair() {
  const area = parseFloat(document.getElementById("area").value);
  const type = document.getElementById("repairType").value;
  let pricePerSqM = 0;

  switch (type) {
    case "basic": pricePerSqM = 150; break;
    case "standard": pricePerSqM = 300; break;
    case "premium": pricePerSqM = 500; break;
  }

  const total = area * pricePerSqM;
  document.getElementById("repairResult").innerText =
    "Примерная стоимость: " + total.toFixed(2) + " BYN";
}
