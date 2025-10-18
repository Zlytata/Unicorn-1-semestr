# Shrnutí článku: Komentáře v JavaScriptu

Tento článek vysvětluje, jak správně používat komentáře v JavaScriptu, kdy jsou užitečné a kdy naopak škodí čitelnosti kódu.

---

## 📝 Typy komentářů

- **Jednořádkové:** začínají `//`
  ```javascript
  // Toto je jednořádkový komentář
  ```
- **Víceřádkové:** uzavřené mezi `/* ... */`
  ```javascript
  /*
    Toto je víceřádkový komentář
    vhodný pro delší poznámky
  */
  ```

---

## 🚫 Špatné komentáře

- Začátečníci často komentují **co kód dělá**:
  ```javascript
  // Zvětší i o 1
  i++;
  ```
- Takové komentáře jsou zbytečné – kód by měl být **samovysvětlující**.
- Platí pravidlo: *Pokud je kód tak nejasný, že vyžaduje komentář, měl by být raději přepsán.*

---

## ✅ Jak psát lepší kód místo komentářů

### Refaktorování do funkcí
- **Původní kód:**
  ```javascript
  function showPrimes(n) {
    nextPrime:
    for (let i = 2; i < n; i++) {
      // kontrola, zda je i prvočíslo
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      alert(i);
    }
  }
  ```
- **Lepší varianta:**
  ```javascript
  function showPrimes(n) {
    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
      alert(i);
    }
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  ```
- Funkce `isPrime` sama vysvětluje, co se děje → komentář není potřeba.

### Rozdělení kódu do menších funkcí
- **Původní kód s komentáři:**
  ```javascript
  // přidáme whiskey
  for (let i = 0; i < 10; i++) { ... }

  // přidáme džus
  for (let t = 0; t < 3; t++) { ... }
  ```
- **Lepší varianta:**
  ```javascript
  addWhiskey(glass);
  addJuice(glass);
  ```
- Funkce samy popisují, co dělají.

---

## 🌟 Dobré komentáře

- **Popis architektury:** vysvětlení, jak spolu části systému spolupracují.
- **Dokumentace funkcí:** pomocí JSDoc lze popsat parametry a návratové hodnoty.
  ```javascript
  /**
   * Vrátí x umocněné na n.
   * @param {number} x základ
   * @param {number} n exponent (přirozené číslo)
   * @return {number} výsledek
   */
  function pow(x, n) { ... }
  ```
- **Vysvětlení rozhodnutí:** proč je úloha řešena právě tímto způsobem.
- **Poznámky k neobvyklým optimalizacím nebo trikům.**

---

## 📋 Shrnutí

- **Vyhýbej se komentářům**, které jen popisují, co kód dělá.  
- **Piš samovysvětlující kód** – funkce a názvy proměnných by měly mluvit samy za sebe.  
- **Používej komentáře** pro:
  - architekturu a celkový přehled,
  - dokumentaci funkcí (JSDoc),
  - vysvětlení nejasných rozhodnutí,
  - upozornění na složité nebo neintuitivní části.  
- Dobré komentáře pomáhají udržovat kód, špatné jen zahlcují.
