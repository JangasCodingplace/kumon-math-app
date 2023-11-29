

 


function checkAndReduceEquation(equation: string) { //string entfernen
  // Hilfsfunktion für den größten gemeinsamen Teiler (GCD)
  function gcd(a: number, b: number) {  //number entfernen
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Zerlegen der Gleichung in Teile
  const parts = equation.split('=').map(part => part.trim());

  // Überprüfen, ob die Gleichung ausreichend viele Teile hat
  if (parts.length < 2) {
    return "Ungültige Gleichung.";
  }

  // Überprüfen und Kürzen der Brüche oder Kommazahlen (falls vorhanden)
  for (let i = 0; i < parts.length - 1; i++) {
    let value1, value2;

    // Überprüfen, ob der Teil Kommazahlen enthält
    if (parts[i].includes('/')) {
      // Bruchwert
      const [numerator1, denominator1] = parts[i].split('/').map(part => parseInt(part, 10));
      value1 = numerator1 / denominator1;
    } else {
      // Ganzzahliger Wert oder Kommazahl
      value1 = parseFloat(parts[i]);
    }

    if (parts[i + 1].includes('/')) {
      // Bruchwert
      const [numerator2, denominator2] = parts[i + 1].split('/').map(part => parseInt(part, 10));
      value2 = numerator2 / denominator2;
    } else {
      // Ganzzahliger Wert oder Kommazahl
      value2 = parseFloat(parts[i + 1]);
    }

    // Überprüfen auf Gleichheit der numerischen Werte mit Toleranz
    if (Math.abs(value1 - value2) > Number.EPSILON) {
      return `Die  Gleichung ${equation} ist nicht korrekt.`;
    }

    // Überprüfen, ob der Wert keine ganze Zahl ist
    if (!Number.isInteger(value1)) {
      // Gleichung nicht für Kommazahlen kürzen
      return `${equation} ist korrekt.`;
    }

    // Gleichung kürzen (nur für ganze Zahlen oder Brüche)
    const [numerator1, denominator1] = parts[i].includes('/') ? parts[i].split('/').map(part => parseInt(part, 10)) : [parseInt(parts[i], 10), 1];
    const [numerator2, denominator2] = parts[i + 1].includes('/') ? parts[i + 1].split('/').map(part => parseInt(part, 10)) : [parseInt(parts[i + 1], 10), 1];

    const commonDivisor1 = gcd(numerator1, denominator1);
    const commonDivisor2 = gcd(numerator2, denominator2);

    const reducedNumerator1 = numerator1 / commonDivisor1;
    const reducedDenominator1 = denominator1 / commonDivisor1;
    const reducedNumerator2 = numerator2 / commonDivisor2;
    const reducedDenominator2 = denominator2 / commonDivisor2;

    // Die Gleichung in gekürzter Form aktualisieren
    parts[i] = `${reducedNumerator1}/${reducedDenominator1}`;
    parts[i + 1] = `${reducedNumerator2}/${reducedDenominator2}`;
  }

  // Ergebnis der Gleichung zurückgeben
  return `${equation} ist korrekt und gekürzt.`;
}

// Beispielaufruf
let exampleEquation = "48/12 = 18/4 = 48/12";
let result = checkAndReduceEquation(exampleEquation);
console.log(result);