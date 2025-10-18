# Shrnutí článku: Nullish coalescing operátor `??`

Tento článek vysvětluje, co je **nullish coalescing operátor** (`??`), jak
funguje, v čem se liší od logického OR (`||`), a jaká jsou jeho pravidla použití
a precedence.

---

## ✨ Co je `??`

- **Syntaxe:** `a ?? b`
- **Význam:** Vrátí první operand, který je **definovaný** – tedy není `null`
  ani `undefined`.
- **Chování:**
  - Pokud `a` není `null`/`undefined` → vrátí `a`
  - Jinak → vrátí `b`
- **Ekvivalentní zápis:**
  ```javascript
  result = (a !== null && a !== undefined) ? a : b;
  ```

---

## 🎯 Typické použití

- **Výchozí hodnota:**
  ```javascript
  let user;
  alert(user ?? "Anonymous"); // "Anonymous"
  ```
- **Zachování platných falsy hodnot:**
  ```javascript
  let height = 0;
  alert(height ?? 100); // 0
  ```
- **Výběr první definované hodnoty z více možností:**
  ```javascript
  let firstName = null;
  let lastName = null;
  let nickName = "Supercoder";
  alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // "Supercoder"
  ```

---

## ⚖️ Porovnání s `||` (logické OR)

- **`||`** vrací první **truthy** hodnotu.
- **`??`** vrací první **definovanou** hodnotu (`!== null && !== undefined`).
- Rozdíl je patrný u hodnot `0`, `false`, `""`:
  ```javascript
  let height = 0;
  alert(height || 100); // 100  (0 je falsy)
  alert(height ?? 100); // 0    (0 je definovaná hodnota)
  ```

---

## 📏 Priorita (precedence)

- `??` má stejnou prioritu jako `||` (nízkou).
- Vyhodnocuje se **před** `=` a `?`, ale **po** většině aritmetických operátorů
  (`+`, `*`).
- **Doporučení:** Používejte závorky pro jednoznačnost.
  ```javascript
  let height = null;
  let width = null;
  let area = (height ?? 100) * (width ?? 50); // 5000
  ```

---

## 🚫 Omezení kombinace s `&&` a `||`

- JavaScript **zakazuje** míchat `??` s `&&` nebo `||` bez závorek.
- Bez závorek → **SyntaxError**:
  ```javascript
  // ❌ SyntaxError
  let x = 1 && 2 ?? 3;
  ```
- Správně:
  ```javascript
  let x = (1 && 2) ?? 3; // 2
  ```

---

## 📋 Shrnutí

- **Účel:** Krátký zápis pro výběr první definované hodnoty.
- **Zachovává:** Hodnoty `0`, `false`, `""` – na rozdíl od `||`.
- **Priorita:** Nízká, stejné jako `||` → často nutné závorky.
- **Bezpečnost:** Nepoužívat s `&&`/`||` bez závorek.
- **Kompatibilita:** Novější operátor – ve starších prohlížečích může být nutný
  polyfill.
- **Příklad:**
  ```javascript
  height = height ?? 100; // nastaví 100, pokud height je null/undefined
  ```
