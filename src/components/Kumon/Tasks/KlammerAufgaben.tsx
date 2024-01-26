// Funktion für eine zufällige Klammerrechenaufgabe
function zufaelligeKlammerrechenaufgabe(): number {
    // Zufällige Ganzzahlen zwischen 1 und 10
    const zahlA: number = Math.floor(Math.random() * 10) + 1;
    const zahlB: number = Math.floor(Math.random() * 10) + 1;
    const zahlC: number = Math.floor(Math.random() * 10) + 1;

    // Zufällige Auswahl der Operationen (+, -, *, /)
    const operationen: string[] = ['+', '-', '*', '/'];
    const operation1: string = operationen[Math.floor(Math.random() * operationen.length)];
    const operation2: string = operationen[Math.floor(Math.random() * operationen.length)];

    // Beispiel: (zahlA + zahlB) * zahlC / zahlD
    const ergebnis: number = eval(`(${zahlA} ${operation1} ${zahlB}) ${operation2} ${zahlC}`);
    
    return ergebnis;
}

// Beispielanwendung
const result: number = zufaelligeKlammerrechenaufgabe();
console.log(`Das Ergebnis der zufälligen Klammerrechenaufgabe ist: ${result}`);// Funktion für eine zufällige Klammerrechenaufgabe
function zufaelligeKlammerrechenaufgabe(): number {
    // Zufällige Ganzzahlen zwischen 1 und 10
    const zahlA: number = Math.floor(Math.random() * 10) + 1;
    const zahlB: number = Math.floor(Math.random() * 10) + 1;
    const zahlC: number = Math.floor(Math.random() * 10) + 1;

    // Zufällige Auswahl der Operationen (+, -, *, /)
    const operationen: string[] = ['+', '-', '*', '/'];
    const operation1: string = operationen[Math.floor(Math.random() * operationen.length)];
    const operation2: string = operationen[Math.floor(Math.random() * operationen.length)];

    // Beispiel: (zahlA + zahlB) * zahlC / zahlD
    const ergebnis: number = eval(`(${zahlA} ${operation1} ${zahlB}) ${operation2} ${zahlC}`);
    
    return ergebnis;
}

// Beispielanwendung
const result: number = zufaelligeKlammerrechenaufgabe();
console.log(`Das Ergebnis der zufälligen Klammerrechenaufgabe ist: ${result}`);