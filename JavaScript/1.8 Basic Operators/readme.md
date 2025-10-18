## Shrnutí článku: Základní operátory v JavaScriptu

Tento článek vysvětluje základní aritmetické a speciální operátory v JavaScriptu, jejich chování, prioritu a rozdíly mezi unárními a binárními formami.

### 📚 Základní pojmy

* **Operand** – hodnota, na kterou se operátor aplikuje.
* **Unární operátor** – pracuje s jedním operandem (např. `-x`).
* **Binární operátor** – pracuje se dvěma operandy (např. `x - y`).

---

### ➕ Aritmetické operátory

| Operátor | Popis            | Příklad         |
|----------|------------------|-----------------|
| `+`      | Sčítání           | `5 + 2 = 7`     |
| `-`      | Odčítání          | `5 - 2 = 3`     |
| `*`      | Násobení          | `5 * 2 = 10`    |
| `/`      | Dělení            | `5 / 2 = 2.5`   |
| `%`      | Zbytek po dělení  | `5 % 2 = 1`     |
| `**`     | Umocnění          | `2 ** 3 = 8`    |

---

### 🔗 Spojování řetězců (`+`)

* Pokud je alespoň jeden operand řetězec, `+` provede spojení:
    ```javascript
    alert("1" + 2); // "12"
    alert(2 + "1"); // "21"
    ```

* Ostatní operátory převádějí řetězce na čísla:
    ```javascript
    alert("6" - "2"); // 4
    ```

---

### ➕ Unární plus

* Převádí operand na číslo:
    ```javascript
    alert(+true); // 1
    alert(+"");   // 0
    ```

---

### 🔢 Priorita operátorů

* Vyšší priorita = dřívější vyhodnocení.
    ```javascript
    let x = 2 * 2 + 1; // 5
    let y = (2 + 2) * 1; // 4
    ```

---

### 🟰 Přiřazení (`=`)

* Vrací hodnotu:
    ```javascript
    let a = 1;
    let b = 2;
    let c = 3 - (a = b + 1); // a = 3, c = 0
    ```

---

### ✍️ Zkrácené zápisy

* `+=`, `*=`, `-=`, `/=` atd.:
    ```javascript
    let n = 2;
    n += 5; // 7
    n *= 2; // 14
    ```

---

### 🔼 Inkrementace a dekrementace

* **`++`** – zvýší o 1
* **`--`** – sníží o 1

* Prefix vs. postfix:
    ```javascript
    let counter = 1;
    let a = ++counter; // 2
    let b = counter--; // 2
    ```

---

### 🧠 Bitové operátory

Bitové operátory pracují s binární reprezentací čísel:

| Operátor | Název            | Popis                                |
|----------|------------------|--------------------------------------|
| `&`      | AND              | Bitový součin                        |
| `|`      | OR               | Bitový součet                        |
| `^`      | XOR              | Bitový exkluzivní součet             |
| `~`      | NOT              | Bitová negace (invertuje bity)       |
| `<<`     | Left shift       | Posun bitů doleva                    |
| `>>`     | Right shift      | Posun bitů doprava (zachovává znaménko) |
| `>>>`    | Zero-fill right shift | Posun doprava bez zachování znaménka |

* Příklad:
    ```javascript
    alert(5 & 1); // 1 (0101 & 0001 = 0001)
    alert(5 | 1); // 5 (0101 | 0001 = 0101)
    alert(5 ^ 1); // 4 (0101 ^ 0001 = 0100)
    alert(~5);    // -6 (invertuje všechny bity)
    alert(5 << 1); // 10 (posun o 1 bit doleva)
    alert(5 >> 1); // 2
    ```

---

### 🧮 Operátor čárky (`,`)

* Vyhodnotí více výrazů, vrací poslední:
    ```javascript
    let a = (1 + 2, 3 + 4); // 7
    ```

---

### 🔍 Rozdíl mezi `n *= 5 + 5` a `n = n * +5 + 5`

* `n *= 5 + 5`:
    * Nejprve se vyhodnotí `5 + 5` → `10`
    * Pak se provede `n = n * 10`
    * Výsledek: `n` se násobí deseti

* `n = n * +5 + 5`:
    * Nejprve se vyhodnotí `n * +5` → `n * 5`
    * Poté se přičte `+ 5`
    * Výsledek: `n = (n * 5) + 5`

* Příklad:
    ```javascript
    let n = 2;
    n *= 5 + 5; // n = 2 * 10 = 20

    n = 2;
    n = n * +5 + 5; // n = 2 * 5 + 5 = 15
    ```

---
