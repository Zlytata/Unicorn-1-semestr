# Shrnutí článku: Debugging v Chrome

Tento článek vysvětluje, jak efektivně ladit JavaScriptový kód pomocí **Chrome
DevTools** – vestavěného nástroje pro vývojáře v prohlížeči Google Chrome.

---

## 🧭 Základní přístup k ladění

- **Použití `console.log`:**
  - Základní metoda pro sledování hodnot a toku programu.
  - Vhodná pro rychlé testování, ale ne vždy přehledná.

- **DevTools (F12 nebo Ctrl+Shift+I):**
  - Otevře vývojářské nástroje.
  - Přejděte na záložku **Sources** pro ladění JavaScriptu.

---

## 🛑 Breakpointy

- **Jak nastavit breakpoint:**
  - V záložce **Sources** klikněte na číslo řádku v souboru.
  - Kód se zastaví před provedením daného řádku.

- **Typy breakpointů:**
  - **Line breakpoint** – klasický, na konkrétním řádku.
  - **Conditional breakpoint** – aktivuje se jen při splnění podmínky.
  - **DOM breakpoint** – reaguje na změny v DOM (např. změna atributu).
  - **XHR/fetch breakpoint** – reaguje na síťové požadavky.

---

## 🧭 Navigace během ladění

- **Ovládací tlačítka:**
  - ▶️ **Resume** – pokračuje ve vykonávání.
  - ⏭ **Step over** – přeskočí volání funkce.
  - ⏬ **Step into** – vstoupí do volané funkce.
  - ⏹ **Step out** – vyskočí z aktuální funkce.

- **Call stack:**
  - Zobrazuje seznam aktivních funkcí (volání), které vedly k aktuálnímu bodu.

- **Scope & Watch:**
  - **Scope** – proměnné dostupné v aktuálním kontextu.
  - **Watch** – sledování konkrétních výrazů.

---

## 🧪 Debugger přímo v kódu

- **Použití příkazu `debugger`:**
  ```javascript
  function test() {
      let x = 5;
      debugger; // zastaví se zde
      console.log(x);
  }
  ```
- Pokud je DevTools otevřený, kód se zastaví na tomto místě.

---

## 📋 Shrnutí

- Chrome DevTools nabízí výkonné nástroje pro ladění JavaScriptu.
- Breakpointy umožňují zastavit kód a sledovat jeho stav.
- `debugger` je vestavěný příkaz pro ruční zastavení.
- Scope, Watch a Call Stack pomáhají pochopit kontext a tok programu.
- Ovládací tlačítka umožňují krokovat kód a analyzovat chování funkcí.
