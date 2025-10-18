## Shrnutí článku: Struktura kódu v JavaScriptu

Tento článek vysvětluje základní "stavební kameny" JavaScriptového kódu. Zaměřuje se na to, jak je kód organizován pomocí příkazů, středníků a komentářů.

### Klíčové informace:

* **Příkazy (Statements):**
    * Příkazy jsou v podstatě jednotlivé instrukce, které vykonávají nějakou akci.
    * Pro lepší čitelnost se každý příkaz obvykle píše na **samostatný řádek**.
    * Příkladem dvou příkazů jsou:
        ```javascript
        alert('Hello');
        alert('World');
        ```

* **Středníky (Semicolons):**
    * Středníky slouží k oddělení jednotlivých příkazů.
    * V JavaScriptu jsou **volitelné**, pokud je každý příkaz na novém řádku. Interpret JavaScriptu si středník "domyslí" na konci řádku.
    * **Doporučení:** I když jsou volitelné, je dobrým zvykem je používat. Zabraňuje to vzniku určitých typů chyb, kdy by interpret mohl řádky spojit nesprávně.
    * Existují situace, kdy je středník **nutný**, například když chcete napsat více příkazů na jeden řádek: `alert('Hello'); alert('World');`

* **Komentáře (Comments):**
    * Komentáře jsou části kódu, které interpret JavaScriptu **úplně ignoruje**. Slouží k tomu, aby si programátor mohl do kódu zapsat poznámky pro sebe nebo pro ostatní.
    * **Jednořádkové komentáře:** Začínají dvěma lomítky `//` a platí až do konce řádku.
        ```javascript
        // Toto je komentář, nebude vykonán.
        alert('Hello');
        ```
    * **Víceřádkové komentáře:** Začínají `/*` a končí `*/`. Umožňují zapsat komentář přes více řádků.
        ```javascript
        /* Tento komentář
           se může rozprostírat
           na více řádků. */
        alert('World');
        ```

### Dovysvětlení:

* **Co je to "interpret JavaScriptu"?**
    Je to program (součást webového prohlížeče), který čte váš JavaScriptový kód řádek po řádku a okamžitě ho vykonává. Když narazí na zalomení řádku, snaží se zjistit, zda tam má být středník – tomuto procesu se říká **Automatické vkládání středníku** (Automatic Semicolon Insertion).

* **Proč jsou komentáře tak důležité?**
    I když nemají vliv na funkčnost kódu, jsou klíčové pro jeho **udržovatelnost a srozumitelnost**. Když se ke svému kódu vrátíte po několika měsících, nebo když na něm pracuje více lidí, komentáře pomáhají rychle pochopit, co daná část kódu dělá a proč byla napsána právě tímto způsobem. Používání komentářů je znakem profesionálního přístupu k programování.