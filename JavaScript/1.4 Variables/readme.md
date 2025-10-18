## Shrnutí článku: Proměnné v JavaScriptu

Tento článek vysvětluje, co jsou proměnné, jak je deklarovat, pojmenovávat a
používat v JavaScriptu. Popisuje rozdíly mezi `let`, `const` a `var`, zásady
pojmenovávání a doporučené postupy.

### Klíčové informace:

- **Co je proměnná:**
  - „Pojmenované úložiště“ pro data.
  - Slouží k uchování hodnot, které můžeme později číst nebo měnit.

- **Deklarace proměnných:**
  - Moderní způsob: `let`
    ```javascript
    let message;
    message = "Hello";
    ```
  - Deklarace a přiřazení v jednom kroku:
    ```javascript
    let message = "Hello!";
    ```
  - Více proměnných:
    ```javascript
    let user = "John", age = 25, message = "Hello";
    ```
    Doporučuje se **jedna proměnná na řádek** pro lepší čitelnost.

- **`var` místo `let`:**
  - Starší způsob deklarace.

- **Přirovnání:**
  - Proměnná = krabice s nálepkou (jméno) a obsahem (hodnota).
  - Hodnotu lze měnit:
    ```javascript
    let message = "Hello!";
    message = "World!";
    ```

- **Kopírování hodnot:**
  ```javascript
  let hello = "Hello world!";
  let message = hello;
  ```

- **Opakovaná deklarace:**
  - Není povolena:
    ```javascript
    let message = "This";
    let message = "That"; // chyba
    ```

- **Pojmenování proměnných:**
  - Povolené znaky: písmena, číslice, `$`, `_` (první znak nesmí být číslice).
  - Používat **camelCase** pro víceslovné názvy.
  - `$` a `_` jsou běžné znaky, nemají speciální význam.
  - Rozlišuje se velikost písmen (`apple` ≠ `APPLE`).
  - Ne-latinka je povolena, ale nedoporučuje se.
  - **Rezervovaná slova** (např. `let`, `class`, `return`) nelze použít.

- **Bez `use strict`:**
  - Ve starém kódu lze proměnnou vytvořit pouhým přiřazením:
    ```javascript
    num = 5; // vytvoří globální proměnnou
    ```
    Ve strict mode to vyvolá chybu.

- **Konstanty (`const`):**
  - Hodnota se nedá změnit.
    ```javascript
    const myBirthday = "18.04.1982";
    ```
  - **Velká písmena** pro „hard-coded“ hodnoty známé před spuštěním:
    ```javascript
    const COLOR_ORANGE = "#FF7F00";
    ```

- **Pojmenovávání:**
  - Názvy by měly být srozumitelné a popisné.
  - Vyhnout se obecným názvům jako `data` nebo `value`.
  - Dodržovat konzistenci pojmů v rámci projektu.

- **Recyklace proměnných:**
  - Nedoporučuje se přepisovat proměnné pro jiný účel.
  - Lepší je vytvořit novou proměnnou – pomáhá to čitelnosti i optimalizaci.

### Dovysvětlení a tipy navíc

- **`let` vs. `var` – proč na `var` zapomenout:**
  - `var` má tzv. _function scope_ (platí jen uvnitř funkce), zatímco `let` a
    `const` mají _block scope_ (platí jen uvnitř složených závorek `{}`).
  - `var` se „hoistuje“ – proměnná je dostupná před deklarací, ale s hodnotou
    `undefined`, což může vést k chybám.
  - `let` a `const` se také hoistují, ale do tzv. `temporal dead zone`, tudíž k
    nim nemůžeme přistupovat před jejich deklarací
  - Moderní kód používá `let`/`const` pro předvídatelné chování.

- **`const` neznamená neměnnost objektu:**
  - `const` brání jen přepsání reference, ne změně obsahu objektu/array:
    ```javascript
    const user = { name: "John" };
    user.name = "Pete"; // OK
    user = { name: "Mary" }; // Chyba
    ```

- **Pojmenování proměnných – dobrá praxe:**
  - Používej názvy, které odpovídají obsahu (`userName` místo `u`).
  - Vyhýbej se zkráceninám, pokud nejsou obecně známé (`HTML`, `URL`).
  - Konzistence v projektu je důležitější než „dokonalý“ název.

- **Deklarace vs. inicializace:**
  - Deklarace = vytvoření proměnné (`let x;`).
  - Inicializace = přiřazení první hodnoty (`let x = 5;`).

- **Globální proměnné jsou zlo:**
  - Znečišťují globální prostor jmen a mohou kolidovat s jiným kódem.
  - Lepší je uzavírat kód do funkcí nebo modulů.

- **Kdy použít `let` a kdy `const`:**
  - Výchozí volba: `const` – pokud víš, že hodnota nebude přepsána.
  - `let` – pokud se hodnota bude měnit.
  - To pomáhá čitelnosti a předchází nechtěným změnám.
