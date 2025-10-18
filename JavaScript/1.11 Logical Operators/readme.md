## Shrnutí článku: Logické operátory – `||` (OR), `&&` (AND), `!` (NOT)

Tento článek popisuje tři základní logické operátory v JavaScriptu, jejich chování s různými datovými typy a pravidla jejich priority.

---

### 🌟 `||` (Logické OR)

- **Tradiční použití:** Vrací `true`, pokud je alespoň jeden z operandů `true`.
- **JavaScriptové chování:** Vyhodnocuje operandy zleva doprava a **vrací první *truthy* hodnotu**, na kterou narazí. Pokud jsou všechny hodnoty *falsy*, vrací poslední z nich.
    ```javascript
    alert(1 || 0); // 1 (první truthy hodnota)
    alert(null || "no comment" || 1); // "no comment" (první truthy hodnota)
    alert(null || undefined || 0); // 0 (všechny falsy, vrací poslední)
    ```
- **"Zkratové vyhodnocení" (Short-circuiting):** Jakmile je nalezena *truthy* hodnota, zbytek výrazu se již nevyhodnocuje.
- **Využití:**
    1.  **Získání první *truthy* hodnoty** ze seznamu proměnných nebo výrazů.
    2.  **Nastavení výchozí hodnoty:** `let promenna = hodnota || "vychozi";`

---

### 🚀 `&&` (Logické AND)

- **Tradiční použití:** Vrací `true`, pouze pokud jsou **všechny** operandy `true`.
- **JavaScriptové chování:** Vyhodnocuje operandy zleva doprava a **vrací první *falsy* hodnotu**. Pokud jsou všechny hodnoty *truthy*, vrací poslední z nich.
    ```javascript
    alert(1 && 0); // 0 (první falsy hodnota)
    alert(1 && 5 && null && 3); // null (první falsy hodnota)
    alert("Hello" && "World"); // "World" (všechny truthy, vrací poslední)
    ```
- **"Zkratové vyhodnocení":** Jakmile je nalezena *falsy* hodnota, zbytek výrazu se ignoruje.
- **Využití:**
    1.  **Nalezení první *falsy* hodnoty.**
    2.  **Podmíněné spuštění kódu:** `if (podminka) { prikaz(); }` je ekvivalentní `podminka && prikaz();`.

---

### 🔄 `!` (Logické NOT)

- **Jednoduchý operátor:** Má pouze jeden operand.
- **Funkce:**
    1.  Nejprve převede operand na boolean (`true`/`false`).
    2.  Poté vrátí jeho **opačnou hodnotu**.
    ```javascript
    alert(!true); // false
    alert(!0); // true
    ```
- **Dvojité NOT (`!!`):** Často se používá pro explicitní převod hodnoty na boolean.
    ```javascript
    alert(!!"non-empty string"); // true
    alert(!!null); // false
    ```
    Stejný výsledek jako `Boolean(hodnota)`.

---

### 📊 Priorita operátorů

- Logický **`!` (NOT)** má nejvyšší prioritu ze všech logických operátorů.
- Logický **`&&` (AND)** má vyšší prioritu než `||` (OR).
- Logický **`||` (OR)** má nejnižší prioritu.
- Příklad:
    ```javascript
    // a && b || c && d  se vyhodnotí jako  (a && b) || (c && d)
    ```
- Doporučení: Pokud si nejste jisti, **používejte závorky `()`** pro zajištění správného pořadí vyhodnocení.

---

### 📋 Shrnutí

- `||` (OR) vrací první **truthy** hodnotu.
- `&&` (AND) vrací první **falsy** hodnotu.
- `!` (NOT) invertuje boolean hodnotu.
- Priorita je: `!` > `&&` > `||`.
- Tyto operátory se často používají pro práci s *truthy*/*falsy* hodnotami, nejen s čistými booleany.