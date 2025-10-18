# 🧠 Shrnutí článku: Základy funkcí (`function`)

Tento článek vysvětluje, jak v JavaScriptu definovat a používat funkce. Funkce
jsou základní stavební bloky programu — umožňují opakované použití kódu, zvyšují
čitelnost a modularitu.

---

## ✨ Jak funkce funguje

- **Deklarace:** Pomocí klíčového slova `function` definujeme název, parametry a
  tělo funkce.
- **Volání:** Funkci spustíme jejím názvem, např. `showMessage()`.
- **Opakovatelnost:** Funkce umožňuje vyhnout se duplicitnímu kódu.

```javascript
function showMessage() {
    alert("Hello everyone!");
}
showMessage();
```

---

## 🎯 Důležité detaily

- **Lokální proměnné:** Proměnné uvnitř funkce jsou dostupné pouze v jejím
  rámci.
- **Vnější proměnné:** Funkce může číst i měnit proměnné definované mimo ni.
- **Stínování:** Pokud má funkce proměnnou se stejným názvem jako vnější,
  použije tu lokální.

---

## 📦 Parametry a argumenty

- **Parametry:** Proměnné definované v záhlaví funkce.
- **Argumenty:** Hodnoty předané při volání funkce.

```javascript
function showMessage(from, text) {
    alert(from + ": " + text);
}
showMessage("Ann", "Hello!");
```

---

## 🧩 Výchozí hodnoty

- Pokud není argument předán, parametr má hodnotu `undefined`.
- Můžeme nastavit výchozí hodnotu pomocí `=`.

```javascript
function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}
```

- Alternativy: `if (text === undefined)`, `text = text || 'default'`, nebo
  moderně `text ?? 'default'`.

---

## 🔁 Vrácení hodnoty (`return`)

- Funkce může vrátit výsledek pomocí `return`.
- Po `return` se funkce ukončí.

```javascript
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2); // 3
```

- Pokud není `return`, funkce vrací `undefined`.

---

## 🧠 Pojmenování funkcí

- Funkce by měly mít **slovesný název**, např. `getAge`, `checkPermission`.
- Prefixy jako `show`, `get`, `calc`, `create`, `check` pomáhají pochopit účel
  funkce.

---

## 🧼 Jedna funkce = jedna akce

- Funkce by měla dělat **jednu věc**.
- Pokud dělá více věcí, rozděl ji na menší funkce.

---

## 🧪 Příklad: test prvočísel

```javascript
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) alert(i);
    }
}
```

---

# 📋 Shrnutí

- **Deklarace:** `function name(params) { ... }`
- **Viditelnost:** Lokální proměnné nejsou dostupné zvenčí.
- **Parametry vs. argumenty:** Parametry jsou definice, argumenty jsou hodnoty.
- **Výchozí hodnoty:** Pomocí `=`, `||`, `??` nebo podmínky.
- **Vrácení hodnoty:** Pomocí `return`, bez něj `undefined`.
- **Názvy funkcí:** Slovesné, popisné, srozumitelné.
- **Modularita:** Funkce zvyšují čitelnost a strukturu kódu.

---
