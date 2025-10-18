## Shrnutí článku: Interakce s uživatelem – `alert`, `prompt`, `confirm`

Tento článek popisuje tři základní metody pro interakci s uživatelem v JavaScriptu: `alert`, `prompt` a `confirm`. Všechny tyto metody zobrazují modální okna, která pozastaví běh skriptu, dokud uživatel neodpoví.

### Klíčové informace:

* **`alert(message)`**
    * Zobrazí modální okno s textem a tlačítkem „OK“.
    * Uživatel nemůže interagovat se stránkou, dokud okno nezavře.
    * Vrací undefined
    * Příklad:
        ```javascript
        alert("Hello");
        ```

* **`prompt(title, [default])`**
    * Zobrazí okno s textem, vstupním polem a tlačítky „OK“/„Cancel“.
    * Vrací:
        * Zadaný text (pokud uživatel klikne na „OK“).
        * `null` (pokud klikne na „Cancel“ nebo stiskne Esc).
    * Parametry:
        * `title` – text zprávy.
        * `default` – volitelná výchozí hodnota vstupu.
    * Příklad:
        ```javascript
        let age = prompt('How old are you?', 100);
        alert(`You are ${age} years old!`);
        ```

    * ⚠️ **Poznámka pro Internet Explorer:**
        * Pokud nezadáš druhý parametr, IE zobrazí „undefined“ jako výchozí text.
        * Doporučení:
            ```javascript
            let test = prompt("Test", ""); // lepší pro IE
            ```

* **`confirm(question)`**
    * Zobrazí okno s otázkou a tlačítky „OK“/„Cancel“.
    * Vrací:
        * `true` – pokud uživatel klikne na „OK“.
        * `false` – pokud klikne na „Cancel“ nebo stiskne Esc.
    * Příklad:
        ```javascript
        let isBoss = confirm("Are you the boss?");
        alert(isBoss); // true nebo false
        ```

### Shrnutí funkcí:

| Funkce   | Popis |
|----------|-------|
| `alert`  | Zobrazí zprávu, čeká na „OK“. |
| `prompt` | Zobrazí zprávu + vstup, vrací text nebo `null`. |
| `confirm`| Zobrazí otázku, vrací `true` nebo `false`. |

### Vlastnosti modálních oken:

* Jsou **modální** – blokují interakci se stránkou, dokud nejsou zavřena.
* **Umístění a vzhled** určuje prohlížeč – nelze je upravit.
* Jsou jednoduché, ale omezené – pro pokročilejší interakci je nutné použít vlastní HTML/CSS řešení.

---