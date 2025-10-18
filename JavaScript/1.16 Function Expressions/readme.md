# Shrnutí článku: Function Expressions

Tento článek vysvětluje, co jsou **Function Expressions** v JavaScriptu, jak se
liší od **Function Declarations**, kdy se používají a jak funguje práce s
funkcemi jako s hodnotami.

---

## ✨ Co je Function Expression

- **Příklad:**
  ```javascript
  let sayHi = function () {
      alert("Hello");
  };
  ```
- Funkce je vytvořena **uvnitř výrazu** (např. přiřazení do proměnné).
- Název funkce může být vynechán → **anonymní funkce**.
- Význam: „Vytvoř funkci a ulož ji do proměnné.“

---

## 📌 Funkce jako hodnota

- Funkce v JavaScriptu jsou **hodnoty** – lze je:
  - uložit do proměnné,
  - předat jako argument jiné funkci,
  - vrátit z funkce,
  - zkopírovat do jiné proměnné.
- **Příklad kopírování:**
  ```javascript
  function sayHi() {
      alert("Hello");
  }

  let func = sayHi;
  func(); // Hello
  sayHi(); // Hello
  ```

---

## ❓ Proč má Function Expression středník

- Function Expression je součástí přiřazovacího příkazu:
  ```javascript
  let sayHi = function() { ... };
  ```
- Středník ukončuje celý příkaz přiřazení, není součástí syntaxe funkce.

---

## 🔄 Callback funkce

- Funkce lze předávat jako argumenty jiným funkcím → **callbacky**.
- **Příklad:**
  ```javascript
  function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
  }

  ask(
      "Do you agree?",
      function () {
          alert("You agreed.");
      },
      function () {
          alert("You canceled.");
      },
  );
  ```
- Anonymní funkce jsou běžné pro jednorázové použití.

---

## ⚖️ Function Declaration vs Function Expression

| Vlastnost                | Function Declaration              | Function Expression     |
| ------------------------ | --------------------------------- | ----------------------- |
| **Syntaxe**              | `function f() {}`                 | `let f = function() {}` |
| **Kdy se vytvoří**       | Před spuštěním kódu (hoisting)    | Až při dosažení řádku   |
| **Viditelnost**          | V celém bloku, kde je deklarována | Od místa vytvoření dál  |
| **Volání před definicí** | Ano                               | Ne                      |

---

## 📦 Blokový rozsah Function Declarations

- Ve **strict mode** jsou deklarace funkcí uvnitř bloku viditelné jen v tom
  bloku.
- **Příklad problému:**
  ```javascript
  if (age < 18) {
      function welcome() {
          alert("Hello!");
      }
  } else {
      function welcome() {
          alert("Greetings!");
      }
  }

  welcome(); // Error: welcome is not defined
  ```
- **Řešení:** Použít Function Expression s proměnnou deklarovanou mimo blok.

---

## 🎯 Kdy použít kterou

- **Function Declaration**:
  - Preferovaná pro běžné deklarace.
  - Lze volat před definicí.
  - Lepší čitelnost.
- **Function Expression**:
  - Když potřebujeme podmíněnou deklaraci.
  - Pro jednorázové funkce (např. callbacky).

---

## 📋 Shrnutí

- Funkce jsou hodnoty – lze je ukládat, kopírovat, předávat.
- **Function Declaration** – vytvořena před spuštěním kódu, viditelná v celém
  bloku.
- **Function Expression** – vytvořena až při dosažení kódu, viditelná od té
  chvíle.
- Používej **Function Declaration**, pokud není důvod pro opak.

```
```
