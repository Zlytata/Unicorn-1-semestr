# Shrnutí článku: Coding Style

Tento článek shrnuje doporučení pro psaní čitelného, konzistentního a udržovatelného JavaScriptového kódu. Nejde o dogmata, ale o osvědčené postupy, které zlepšují kvalitu kódu a spolupráci v týmu.

---

## 🧱 Základní princip

- Cílem je psát **správný a lidsky čitelný kód**.
- Styl by měl být **jednotný** v rámci projektu nebo týmu.

---

## 🧭 Syntaxe a formátování

### 🔹 Závorky

- Používejte „egyptský styl“: otevírací `{` na stejném řádku jako `if`, `for`, `function` atd.
  ```javascript
  if (condition) {
    doSomething();
  }
  ```
- Jednořádkové výrazy bez závorek jsou povolené, ale raději používejte blok:
  ```javascript
  if (n < 0) alert(`Power ${n} is not supported`);
  ```

### 🔹 Délka řádku

- Dlouhé řádky rozdělte:
  ```javascript
  let str = `ECMA International's TC39 is a group of JavaScript developers...`;
  ```
- Doporučená maximální délka: **80–120 znaků**.

### 🔹 Odsazení

- **Horizontální:** 2 mezery (preferováno).
- **Vertikální:** prázdné řádky pro logické bloky:
  ```javascript
  function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
  ```

### 🔹 Středníky

- Používejte středníky `;` – chrání před nečekanými chybami.
- Výjimky (např. StandardJS) existují, ale nejsou vhodné pro začátečníky.

---

## 🔁 Hluboké zanoření

- Vyhýbejte se příliš hlubokému vnoření – zhoršuje čitelnost.
- **Nevhodné:**
  ```javascript
  for (let i = 0; i < items.length; i++) {
    if (items[i].active) {
      if (items[i].category === "A") {
        process(items[i]);
      }
    }
  }
  ```
- **Lepší – časné návraty / continue:**
  ```javascript
  for (let item of items) {
    if (!item.active) continue;
    if (item.category !== "A") continue;

    process(item);
  }
  ```
- Výhoda: méně úrovní odsazení, jasnější tok programu.

---

## 🧩 Umístění funkcí

Existují tři běžné přístupy:

1. **Funkce nahoře, použití dole**  
   Vhodné, pokud chceš mít všechny definice na jednom místě.
   ```javascript
   function calculateTax(amount) {
     return amount * 0.21;
   }

   let price = 100;
   let tax = calculateTax(price);
   ```

2. **Použití nahoře, funkce dole** ✅ Doporučeno  
   Umožňuje číst hlavní tok programu od začátku, detaily jsou níže.
   ```javascript
   let price = 100;
   let tax = calculateTax(price);
   console.log(tax);

   function calculateTax(amount) {
     return amount * 0.21;
   }
   ```

3. **Funkce u prvního použití**  
   Vhodné pro malé, lokální funkce.
   ```javascript
   let price = 100;

   function calculateTax(amount) {
     return amount * 0.21;
   }

   let tax = calculateTax(price);
   ```

---

## 📚 Style guides

- Pomáhají sjednotit styl v týmu.
- Populární průvodci:
  - Google JavaScript Style Guide
  - Airbnb JavaScript Style Guide
  - Idiomatic.JS
  - StandardJS

---

## 🤖 Automatické kontroly (lintery)

- Nástroje pro kontrolu stylu a chyb:
  - **JSLint**, **JSHint**, **ESLint** (nejrozšířenější)
- ESLint nastavení:
  ```json
  {
    "extends": "eslint:recommended",
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "rules": {
      "no-console": 0,
      "indent": ["error", 2]
    }
  }
  ```

---

## 📋 Shrnutí

- Styl kódu ovlivňuje čitelnost, údržbu a spolupráci.
- Používejte jednotné odsazení, středníky, rozumnou délku řádků.
- Minimalizujte zanoření, pište funkce srozumitelně.
- Využívejte style guides a lintery pro automatickou kontrolu.
- Hlavní otázky: „Je to čitelné?“ a „Pomáhá to předcházet chybám?“
