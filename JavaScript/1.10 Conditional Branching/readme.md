## Shrnutí článku: Podmíněné větvení – `if`, `else`, `?`

Tento článek vysvětluje, jak v JavaScriptu provádět různé akce podle splnění podmínek pomocí příkazů `if`, `else if`, `else` a podmíněného (ternárního) operátoru `?`.

---

### 🧩 `if` – základní podmínka

- Syntaxe:
    ```javascript
    if (podmínka) {
      // kód se provede, pokud je podmínka truthy
    }
    ```
- **Podmínka** se vyhodnotí a převede na boolean:
  - **Falsy** hodnoty: `0`, `""` (prázdný řetězec), `null`, `undefined`, `NaN`
  - **Truthy** hodnoty: všechny ostatní
- Doporučuje se **vždy používat složené závorky `{}`**, i když je uvnitř jen jeden příkaz – zvyšuje to čitelnost.

---

### 🔄 `else` – větev pro nepravdivou podmínku

- Spustí se, pokud je podmínka v `if` falsy:
    ```javascript
    if (year == 2015) {
      alert("Správně!");
    } else {
      alert("Špatně.");
    }
    ```

---

### 📚 `else if` – více podmínek

- Umožňuje testovat více variant:
    ```javascript
    if (year < 2015) {
      alert("Příliš brzy...");
    } else if (year > 2015) {
      alert("Příliš pozdě");
    } else {
      alert("Přesně!");
    }
    ```
- Může být více `else if` bloků, závěrečný `else` je volitelný.

---

### 🔍 Převod na boolean v `if`

- Výraz uvnitř `if (...)` se vždy převede na boolean podle pravidel převodu typů.
- Můžeme použít i předem vyhodnocenou boolean proměnnou:
    ```javascript
    let cond = (year == 2015);
    if (cond) { ... }
    ```

---

### ❓ Podmíněný (ternární) operátor `?`

- Syntaxe:
    ```javascript
    let result = podmínka ? hodnota1 : hodnota2;
    ```
- Pokud je podmínka truthy → vrátí `hodnota1`, jinak `hodnota2`.
- Příklad:
    ```javascript
    let accessAllowed = (age > 18) ? true : false;
    ```
- Často lze zjednodušit:
    ```javascript
    let accessAllowed = age > 18; // vrací přímo true/false
    ```

---

### 🔗 Vícenásobný `?`

- Lze řetězit pro více podmínek:
    ```javascript
    let message = (age < 3) ? "Hi, baby!" :
                  (age < 18) ? "Hello!" :
                  (age < 100) ? "Greetings!" :
                  "What an unusual age!";
    ```
- Funguje stejně jako vícenásobné `if...else if...else`.

---

### ⚠️ Netypické použití `?`

- Lze použít i pro vykonání různých příkazů:
    ```javascript
    (company == 'Netscape') ? alert('Right!') : alert('Wrong.');
    ```
- **Nedoporučuje se** – snižuje čitelnost.  
  Účel `?` je vracet hodnotu, ne nahrazovat `if` pro větve kódu.

---

### 📋 Shrnutí

- `if` provádí kód, pokud je podmínka truthy.
- `else` a `else if` umožňují větvení pro další případy.
- Podmínka se vždy převádí na boolean podle pravidel truthy/falsy.
- Ternární operátor `?` je zkrácený zápis pro výběr mezi dvěma hodnotami.
- Vícenásobný `?` umožňuje kompaktní zápis více podmínek, ale může být méně čitelný.
- Používej `?` pro přiřazení hodnot, `if` pro větvení kódu.
