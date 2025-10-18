## Shrnutí článku: Strict mode v JavaScriptu

Tento článek popisuje, co je **"strict mode"** v JavaScriptu, proč byl zaveden a jak ovlivňuje chování kódu. Strict mode zpřísňuje pravidla jazyka, pomáhá odhalovat chyby a zabraňuje některým nejednoznačným konstrukcím.

### Klíčové informace:

* **Co je strict mode:**
    * Speciální režim zpřísňující syntaxi a chování JavaScriptu.
    * Aktivuje se přidáním:
        ```javascript
        'use strict';
        ```
      na začátek skriptu nebo funkce.
    * Platí pouze pro daný skript nebo funkci.

* **Hlavní výhody:**
    * **Odhaluje tiché chyby** – místo ignorování vyvolá chybu.
    * **Zakazuje nebezpečné funkce** – např. `with`.
    * **Zabraňuje náhodnému vytváření globálních proměnných** – přiřazení neexistující proměnné vyvolá chybu.
    * **Zpřísňuje pravidla pro `this`** – v některých případech je `undefined` místo globálního objektu.

* **Příklady rozdílů:**
    * **Bez strict mode:**
        ```javascript
        x = 10; // vytvoří globální proměnnou
        ```
    * **Se strict mode:**
        ```javascript
        'use strict';
        x = 10; // chyba: x není definováno
        ```

* **Použití na úrovni funkce:**
    ```javascript
    function test() {
      'use strict';
      // kód ve strict režimu
    }
    ```

* **Kompatibilita:**
    * Podporován ve všech moderních prohlížečích.
    * Starší prohlížeče direktivu `'use strict'` ignorují.

### Dovysvětlení:

* **Proč byl zaveden?**
    * JavaScript má historicky „uvolněné“ konstrukce, které mohou vést k chybám.
    * Strict mode pomáhá psát bezpečnější a předvídatelnější kód.

* **Doporučení:**
    * Používat strict mode ve všech nových skriptech.
    * V ES6 modulech je strict mode zapnutý automaticky.
