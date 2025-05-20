function showRepairCalc() {
  document.getElementById("content").innerHTML = `
    <label>Площадь квартиры (м²): <input id="area" type="number" min="0" /></label><br><br>

    <label>Тип ремонта:
      <select id="repairType">
        <option value="cosmetic">Косметический (~250 BYN/м²)</option>
        <option value="capital">Капитальный (~500 BYN/м²)</option>
        <option value="designer">Дизайнерский (~800 BYN/м²)</option>
      </select>
    </label><br><br>

    <label>Материалы:
      <select id="materials">
        <option value="economy">Эконом (×0.8)</option>
        <option value="standard" selected>Стандарт (×1.0)</option>
        <option value="premium">Премиум (×1.5)</option>
      </select>
    </label><br><br>

    <label><input type="checkbox" id="demolition" style="width: 20px" /> Демонтаж (+50 BYN/м²)</label><br>
    <label><input type="checkbox" id="electric" style="width: 20px" /> Электрика (+70 BYN/м²)</label><br>
    <label><input type="checkbox" id="plumbing" style="width: 20px" /> Сантехника (+90 BYN/м²)</label><br><br>

    <button onclick="calculateRepair()">Рассчитать</button>
    <button onclick="document.location='index.html'">Вернуться на главную</button>
    <div id="repairResult" class="p-2 text-sm mt-4" style="white-space: pre-wrap;"></div>
  `;
}

function calculateRepair() {
  const area = parseFloat(document.getElementById("area").value);
  const repairType = document.getElementById("repairType").value;
  const materials = document.getElementById("materials").value;
  const demolition = document.getElementById("demolition").checked;
  const electric = document.getElementById("electric").checked;
  const plumbing = document.getElementById("plumbing").checked;

  const resultDiv = document.getElementById("repairResult");

  if (isNaN(area) || area <= 0) {
    resultDiv.innerText = "Введите корректную площадь.";
    return;
  }

  // Базовая цена
  let basePrice = 0;
  let duration = "";
  switch (repairType) {
    case "cosmetic":
      basePrice = 250;
      duration = "2–3 недели";
      break;
    case "capital":
      basePrice = 500;
      duration = "4–6 недель";
      break;
    case "designer":
      basePrice = 800;
      duration = "6–8 недель";
      break;
  }

  // Коэффициент материалов
  let materialCoef = 1.0;
  switch (materials) {
    case "economy":
      materialCoef = 0.8;
      break;
    case "standard":
      materialCoef = 1.0;
      break;
    case "premium":
      materialCoef = 1.5;
      break;
  }

  // Дополнительные работы
  let extras = 0;
  if (demolition) extras += 50 * area;
  if (electric) extras += 70 * area;
  if (plumbing) extras += 90 * area;

  const baseCost = basePrice * materialCoef * area;
  const total = baseCost + extras;

  Object.assign(resultDiv.style, {
    color: "#00428C",
    fontSize: "16px",
    border: "1px solid #00428C",
    padding: "10px", // чтобы текст не прилипал к рамке
    borderRadius: "8px" // необязательно, но для красоты
  });
  resultDiv.innerText = `
Тип ремонта: ${getRepairLabel(repairType)}
Материалы: ${getMaterialLabel(materials)}
Площадь: ${area} м²
Базовая стоимость: ${baseCost.toFixed(2)} BYN
Дополнительные работы: ${extras.toFixed(2)} BYN
------------------------------
Итого: ${total.toFixed(2)} BYN
Срок выполнения: ${duration}
  `;
}

function getRepairLabel(value) {
  return {
    "cosmetic": "Косметический",
    "capital": "Капитальный",
    "designer": "Дизайнерский"
  }[value];
}

function getMaterialLabel(value) {
  return {
    "economy": "Эконом",
    "standard": "Стандарт",
    "premium": "Премиум"
  }[value];
}

// Инициализация
showRepairCalc();
