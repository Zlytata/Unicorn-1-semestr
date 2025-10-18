## Shrnutí článku: Porovnávání v JavaScriptu

Tento článek vysvětluje, jak fungují porovnávací operátory, jaké vracejí hodnoty a jak se chovají při porovnávání řetězců, různých typů a speciálních hodnot `null` a `undefined`.

---

### 📌 Základní operátory

- `>` – větší než  
- `<` – menší než  
- `>=` – větší nebo rovno  
- `<=` – menší nebo rovno  
- `==` – rovnost (s konverzí typů)  
- `!=` – nerovnost (s konverzí typů)  
- `===` – striktní rovnost (bez konverze typů)  
- `!==` – striktní nerovnost (bez konverze typů)  

Každé porovnání vrací boolean (`true`/`false`).

---

### 🔤 Porovnání řetězců

- Probíhá **lexikograficky** podle Unicode, znak po znaku.
- Rozlišuje se velikost písmen (`"Z" > "A"` je `true`).
- `"a"` má vyšší Unicode kód než `"A"`, proto `"a" > "A"` je `true`.

---

### 🔄 Porovnání různých typů

- Při použití `==` se různé typy převedou na čísla (kromě speciální dvojice `null` a `undefined` – viz níže).
    ```javascript
    "2" > 1; // true
    "01" == 1; // true
    ```
- Boolean se převádí na číslo (`true -> 1`, `false -> 0`).
- Příklad zvláštnosti:
    ```javascript
    0 == "0"; // true
    Boolean("0"); // true
    Boolean(0); // false
    ```

---

### 🟰 Striktní rovnost

- `===` a `!==` neprovádějí konverzi typů.
    ```javascript
    0 === false; // false
    0 == false;  // true
    ```

---

### ⚠️ `null` a `undefined`

- **Speciální pravidlo rovnosti:**
  - `null == undefined` → `true`
  - `null` a `undefined` se **nerovnají žádnému jinému typu** při `==` (např. `null == 0` → `false`).
- **Při `<`, `>`, `<=`, `>=`:**
  - `null` se převádí na `0`
  - `undefined` se převádí na `NaN` (porovnání s `NaN` je vždy `false`)
- **Paradox s `null`:**
    ```javascript
    null > 0;   // false
    null == 0;  // false
    null >= 0;  // true  (protože null -> 0 a 0 >= 0 je true)
    ```
- **`undefined`:**
    ```javascript
    undefined > 0;  // false
    undefined < 0;  // false
    undefined == 0; // false
    ```

---

### 🧪 Příklady

```javascript
"apple" > "pineapple"; // false
"2" > "12";            // true
undefined == null;     // true
undefined === null;    // false
null == "\n0\n";       // false
null === +"\n0\n";     // false
null >= 0;             // true
