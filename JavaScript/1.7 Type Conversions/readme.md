## Shrnutí článku: Převody typů v JavaScriptu

Tento článek vysvětluje, jak JavaScript automaticky nebo explicitně převádí hodnoty mezi základními datovými typy: string, number a boolean. Ukazuje pravidla převodu a typické příklady, kde k nim dochází.

### Klíčové informace:

* **Automatické vs. explicitní převody:**
    * JavaScript často převádí hodnoty automaticky – např. při výpočtech nebo výpisu.
    * Můžeme také převádět hodnoty explicitně pomocí funkcí `String()`, `Number()`, `Boolean()`.

---

### 🧵 Převod na řetězec (`String`)

* Používá se při výpisu hodnot (např. `alert(value)`).
* Explicitní převod:
    ```javascript
    let value = true;
    value = String(value); // "true"
    ```
* Typické převody:
    * `false` → `"false"`
    * `null` → `"null"`
    * `undefined` → `"undefined"`

---

### 🔢 Převod na číslo (`Number`)

* Používá se při matematických operacích:
    ```javascript
    alert("6" / "2"); // 3
    ```
* Explicitní převod:
    ```javascript
    let str = "123";
    let num = Number(str); // 123
    ```
* Pokud převod selže → `NaN`:
    ```javascript
    let age = Number("neplatný vstup"); // NaN
    ```

* **Pravidla převodu:**

| Hodnota                    | Výsledek       |
|---------------------------|----------------|
| `undefined`               | `NaN`          |
| `null`                    | `0`            |
| `true` / `false`          | `1` / `0`      |
| Řetězec s číslem          | Číslo          |
| Prázdný řetězec `" "`     | `0`            |
| Nečíselný řetězec         | `NaN`          |

* Příklady:
    ```javascript
    Number("   123   "); // 123
    Number("123z");      // NaN
    Number(true);        // 1
    Number(false);       // 0
    ```

---

### ✅ Převod na boolean (`Boolean`)

* Používá se v podmínkách a logických operacích.
* Explicitní převod:
    ```javascript
    Boolean(1);       // true
    Boolean(0);       // false
    Boolean("hello"); // true
    Boolean("");      // false
    ```

* **Pravidla převodu:**

| Hodnota                        | Výsledek |
|--------------------------------|----------|
| `0`, `""`, `null`, `undefined`, `NaN` | `false`  |
| Vše ostatní                    | `true`   |

* Pozor:
    * Řetězec `"0"` je **true** (není prázdný).
    * Řetězec `"   "` (jen mezery) je také **true**.

---

### 🧠 Shrnutí převodů:

| Typ převodu | Funkce         | Kdy se používá             |
|-------------|----------------|----------------------------|
| String      | `String(value)`| Výpis hodnot               |
| Number      | `Number(value)`| Matematické operace        |
| Boolean     | `Boolean(value)`| Logické výrazy, podmínky   |

---