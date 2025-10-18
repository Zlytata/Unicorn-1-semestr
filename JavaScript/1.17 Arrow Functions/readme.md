# Shrnutí článku: Arrow functions – základy

Tento článek představuje **arrow functions** (šipkové funkce) v JavaScriptu –
stručnější alternativu k **Function Expressions**, vhodnou zejména pro
jednoduché funkce a callbacky. Doplňuji klíčové rozdíly a omezení, kde je nelze
používat.

---

## Základní syntaxe

- **Zkrácená forma:**
  ```javascript
  let func = (arg1, arg2) => výraz;
  ```
  Vrátí výsledek vyhodnocení výrazu napravo od `=>`.

- **Ekvivalent s Function Expression:**
  ```javascript
  let func = function (arg1, arg2) {
      return výraz;
  };
  ```

---

## Příklady

- **Dva argumenty:**
  ```javascript
  let sum = (a, b) => a + b;
  sum(1, 2); // 3
  ```

- **Jeden argument (bez závorek):**
  ```javascript
  let double = (n) => n * 2;
  double(3); // 6
  ```

- **Bez argumentů (prázdné závorky povinné):**
  ```javascript
  let sayHi = () => "Hello!";
  sayHi(); // "Hello!"
  ```

---

## Blokové tělo vs. implicitní návrat

- **Implicitní návrat (bez složených závorek):**
  ```javascript
  let inc = (x) => x + 1; // vrací x + 1
  ```

- **Blokové tělo (se složenými závorkami):**
  ```javascript
  let sum = (a, b) => {
      const r = a + b;
      return r; // nutné explicitní return
  };
  ```

- **Vrácení objektového literálu (nutné závorky):**
  ```javascript
  let makeUser = (name) => ({ name, active: true });
  ```

---

## Kde se arrow functions nehodí

- **Žádné vlastní this:** `this` je lexikální (dědí se z okolí). Nehodí se pro
  metody objektů, kde očekáváte dynamické `this`.
  ```javascript
  const obj = {
      x: 1,
      getX: () => this.x, // undefined, this není obj
  };
  ```

- **Žádné arguments:** Nemají vlastní `arguments`. Použijte zbytkové parametry.
  ```javascript
  const sum = (...args) => args.reduce((a, b) => a + b, 0);
  ```

- **Nelze jako konstruktory:** Nelze je volat s `new` a nemají `prototype`.
  ```javascript
  const Foo = () => {};
  // new Foo() // TypeError
  ```

- **Nelze použít s yield:** Arrow funkce nemohou být generátory.

---

## Podmíněné přiřazení funkce

- **Výběr implementace podle podmínky:**
  ```javascript
  const age = 18;
  const welcome = age < 18 ? () => "Hello!" : () => "Greetings!";
  welcome(); // "Greetings!"
  ```

---

## Shrnutí

- **Krátký zápis:** `(...args) => výraz` vrací výraz implicitně; pro více
  příkazů použijte `{}` a `return`.
- **Objektové literály:** Vracejte je v závorkách `({ ... })`, jinak se `{}`
  bere jako blok.
- **Lepší pro callbacky:** Čitelné, krátké, bez vlastního `this` a `arguments`.
- **Omezení:** Nepoužívat jako metody s dynamickým `this`, nelze s `new`, nemají
  `prototype` ani `arguments`, nejsou generátory.
