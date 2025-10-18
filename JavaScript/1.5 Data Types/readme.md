## Shrnutí článku: Datové typy v JavaScriptu

Tento článek vysvětluje základní datové typy v JavaScriptu, jejich vlastnosti, rozdíly a chování. Ukazuje, jak JavaScript pracuje s hodnotami, které mohou měnit typ, a jak používat operátor `typeof`.

### Klíčové informace:

* **Dynamické typování:**
    * JavaScript je dynamicky typovaný – proměnná může měnit typ:
        ```javascript
        let message = "hello";
        message = 123456;
        ```

* **Základní datové typy:**
    * **Number** – celé i desetinné čísla, včetně speciálních hodnot:
        * `Infinity`, `-Infinity`, `NaN`
        * Příklad:
            ```javascript
            alert(1 / 0); // Infinity
            alert("not a number" / 2); // NaN
            ```

    * **BigInt** – pro velmi velká celá čísla:
        ```javascript
        const bigInt = 1234567890123456789012345678901234567890n;
        ```

    * **String** – textové řetězce, tři typy uvozovek:
        * Dvojité `"text"`, jednoduché `'text'`, zpětné `\`text\`` (umožňují interpolaci):
            ```javascript
            let name = "John";
            alert(`Hello, ${name}!`);
            ```

    * **Boolean** – logické hodnoty `true` a `false`:
        ```javascript
        let isGreater = 4 > 1; // true
        ```

    * **Null** – speciální hodnota pro „nic“ nebo „neznámé“:
        ```javascript
        let age = null;
        ```

    * **Undefined** – hodnota neexistuje nebo nebyla přiřazena:
        ```javascript
        let age;
        alert(age); // undefined
        ```

    * **Symbol** – unikátní identifikátory (více později).

    * **Object** – složitější struktury, kolekce dat (více později).

* **Operátor `typeof`:**
    * Vrací typ hodnoty jako řetězec:
        ```javascript
        typeof undefined // "undefined"
        typeof 0 // "number"
        typeof 10n // "bigint"
        typeof true // "boolean"
        typeof "foo" // "string"
        typeof Symbol("id") // "symbol"
        typeof Math // "object"
        typeof null // "object" (chyba v jazyce)
        typeof alert // "function"
        ```

    * `typeof(x)` je ekvivalentní `typeof x`.

* **Poznámky k chování:**
    * `typeof null` vrací `"object"` – historická chyba.
    * Funkce (`alert`) jsou technicky objekty, ale `typeof` vrací `"function"`.

###