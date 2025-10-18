# Shrnutí článku: JavaScript specials

Tento článek shrnuje hlavní vlastnosti JavaScriptu, které se často používají, a
upozorňuje na zvláštnosti jazyka.

---

## 📐 Struktura kódu

- **Oddělení příkazů:**
  - Obvykle středníkem `;`.
  - JavaScript má _automatic semicolon insertion_ (ASI) – vkládá středníky
    automaticky při zalomení řádku, ale ne vždy správně.
- **Bez středníku:**
  - Po blokových konstrukcích `{...}` (funkce, smyčky) není nutný.
- **Extra středník:** Ignorován, není chyba.

---

## ⚙️ Strict mode

- Aktivace moderního režimu:
  ```javascript
  "use strict";
  ```
- Musí být na začátku skriptu nebo těla funkce.
- Některé konstrukce (např. `class`, `import`/`export`) zapínají strict mode
  automaticky.

---

## 📦 Proměnné

- Deklarace: `let`, `const` (neměnná reference), `var` (starší styl).
- **Názvy:**
  - Písmena, číslice (ne na začátku), `_`, `$`.
  - Povolené i jiné abecedy.
- **Dynamické typy:** Proměnná může měnit typ hodnoty.
- **Datové typy:**
  - `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `object`,
    `symbol`.
- **typeof výjimky:**
  - `typeof null` → `"object"` (historická chyba).
  - `typeof function(){}` → `"function"` (speciální případ).

---

## 💬 Interakce (v prohlížeči)

- `prompt(question, [default])` – vrátí vstup jako string nebo `null`.
- `confirm(question)` – vrátí `true`/`false`.
- `alert(message)` – zobrazí zprávu.
- Všechny jsou **modální** – blokují běh kódu do odpovědi uživatele.

---

## ➕ Operátory

- **Aritmetické:** `+ - * / % **`
  - `+` také konkatenace řetězců (převede operand na string).
- **Přiřazovací:** `=`, kombinované `+=`, `*=`, …
- **Bitové:** pracují s 32bit celými čísly.
- **Podmínkový:** `cond ? a : b`
- **Logické:**
  - `&&`, `||` – krátké vyhodnocení, vrací hodnotu, kde se zastaví.
  - `!` – negace (vrací boolean).
- **Nullish coalescing:** `a ?? b` – vrátí první definovanou hodnotu
  (`!== null && !== undefined`).
- **Porovnání:**
  - `==` – převádí typy (výjimky pro `null`/`undefined`).
  - `===` – striktní, bez převodu typů.
  - Řetězce porovnávány po znacích, jiné typy převedeny na číslo.
- **Operátor čárky:** `,` – vyhodnotí oba výrazy, vrátí poslední.

---

## 🔄 Smyčky

- Typy:
  ```javascript
  while (cond) { ... }
  do { ... } while (cond);
  for (let i = 0; i < 10; i++) { ... }
  ```
- Proměnná z `for(let...)` viditelná jen uvnitř smyčky.
- `break` – ukončí smyčku.\
  `continue` – přeskočí iteraci.
- **Štítky:** pro ukončení vnořených smyček.

---

## 🔀 Switch

- Nahrazuje více `if` podmínek.
- Používá **striktní rovnost** `===`.
- Příklad:
  ```javascript
  switch (age) {
    case 18:
      ...
      break;
    case "18":
      ...
      break;
    default:
      ...
  }
  ```

---

## 🛠 Funkce

- **Deklarace:**
  ```javascript
  function sum(a, b) {
      return a + b;
  }
  ```
- **Výraz:**
  ```javascript
  let sum = function (a, b) {
      return a + b;
  };
  ```
- **Arrow funkce:**
  ```javascript
  let sum = (a, b) => a + b;
  let sayHi = () => alert("Hello");
  let double = (n) => n * 2;
  ```
- **Lokální proměnné:** viditelné jen uvnitř funkce.
- **Výchozí parametry:** `function sum(a = 1, b = 2) {...}`
- **Návratová hodnota:** pokud není `return`, vrací `undefined`.

---

## 📋 Shrnutí

- JavaScript má flexibilní syntaxi, dynamické typy a různé způsoby deklarace
  funkcí.
- Strict mode zajišťuje moderní chování.
- Operátory mají specifické chování pro různé typy.
- Smyčky a podmínky mají více variant pro různé scénáře.
- Funkce lze psát jako deklarace, výrazy nebo arrow funkce.
