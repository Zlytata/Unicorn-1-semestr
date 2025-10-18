# Shrnutí článku: Smyčky `while` a `for`

Tento článek vysvětluje základní typy smyček v JavaScriptu – **`while`**,
**`do...while`** a **`for`** – jejich syntaxi, chování, možnosti úprav a
speciální příkazy `break`, `continue` a **štítky (labels)** pro řízení toku
vnořených smyček.

---

## 🔄 Smyčka `while`

- **Syntaxe:**
  ```javascript
  while (podmínka) {
      // tělo smyčky
  }
  ```
- **Chování:** Podmínka se vyhodnocuje **před** každou iterací. Smyčka běží,
  dokud je podmínka **truthy**.
- **Příklad:**
  ```javascript
  let i = 0;
  while (i < 3) {
      alert(i); // 0, 1, 2
      i++;
  }
  ```
- **Zkrácený zápis pro jednorázové tělo:**
  ```javascript
  let i = 3;
  while (i) alert(i--);
  ```

---

## 🔁 Smyčka `do...while`

- **Syntaxe:**
  ```javascript
  do {
      // tělo smyčky
  } while (podmínka);
  ```
- **Chování:** Tělo se provede **alespoň jednou**, podmínka se kontroluje **až
  po** provedení.
- **Použití:** Když potřebujeme provést kód minimálně jednou bez ohledu na
  podmínku.

---

## ➿ Smyčka `for`

- **Syntaxe:**
  ```javascript
  for (begin; condition; step) {
      // tělo smyčky
  }
  ```
- **Části:**
  - **begin** – provede se jednou na začátku.
  - **condition** – kontrola před každou iterací.
  - **body** – kód, který se opakuje.
  - **step** – provede se po každém těle.
- **Příklad:**
  ```javascript
  for (let i = 0; i < 3; i++) {
      alert(i); // 0, 1, 2
  }
  ```
- **Inline deklarace proměnné:** Proměnná deklarovaná v `for` je viditelná jen
  uvnitř smyčky.
- **Možnost vynechat části:** Lze vynechat `begin`, `step` nebo obojí. `for(;;)`
  → nekonečná smyčka.

---

## 🛑 `break` a `continue`

- **`break`** – okamžitě ukončí smyčku.
- **`continue`** – přeskočí zbytek aktuální iterace a pokračuje další.
- **Příklad `continue`:**
  ```javascript
  for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) continue;
      alert(i); // 1, 3, 5, 7, 9
  }
  ```
- **Poznámka:** `break`/`continue` nelze použít na pravé straně ternárního
  operátoru `? :`.

---

## 🏷 Štítky (labels)

- **Účel:** Umožňují `break` nebo `continue` přeskočit více úrovní vnořených
  smyček.
- **Syntaxe:**
  ```javascript
  labelName: for (...) {
    for (...) {
      if (podmínka) break labelName;
    }
  }
  ```
- **Omezení:** Nelze „skákat“ na libovolné místo v kódu, pouze z vnořené smyčky
  na označenou vnější.

---

## 📋 Shrnutí

- **`while`** – kontrola podmínky před iterací.
- **`do...while`** – kontrola podmínky po iteraci, tělo se provede alespoň
  jednou.
- **`for`** – univerzální smyčka s možností inicializace, podmínky a kroku.
- **`break`** – ukončí smyčku.
- **`continue`** – přeskočí na další iteraci.
- **Štítky** – umožňují ukončit nebo přeskočit vnořené smyčky.
