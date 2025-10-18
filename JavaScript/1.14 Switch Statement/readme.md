# Shrnutí článku: Příkaz `switch`

Tento článek vysvětluje, jak `switch` příkaz funguje jako alternativa k
vícenásobným `if` kontrolám. Poskytuje přehlednější a čitelnější způsob
porovnávání jedné hodnoty s mnoha možnými variantami.

---

## ✨ Jak `switch` funguje

- **Syntaxe:** Skládá se z klíčového slova `switch(výraz)`, jednoho nebo více
  bloků `case` a nepovinného bloku `default`.
- **Porovnávání:** Hodnota `výrazu` se porovnává s hodnotami v každém `case`
  bloku pomocí **striktní rovnosti** (`===`).
- Pokud je nalezena shoda, provede se kód v odpovídajícím bloku `case`.

---

## 🎯 Důležité detaily

- **`break`**: Klíčové slovo `break` je **zásadní**. Ukončí provádění kódu a
  vyskočí z `switch` bloku.
- **"Fall-through"**: Pokud chybí `break`, provádění kódu bude **pokračovat** do
  dalšího `case` bloku, a to bez ohledu na to, zda odpovídá, dokud nenarazí na
  `break` nebo konec `switch` příkazu.
- **Seskupování (`case`):** Více `case` bloků může být seskupeno, aby sdílely
  stejný kód. Stačí je napsat pod sebe bez `break`.
- **`default`**: Nepovinný blok `default` se provede, pokud žádný z `case` bloků
  neodpovídá. Funguje jako `else` v `if` příkazu.

---

## 📝 Příklad použití

```javascript
let a = 2 + 2;

switch (a) {
    case 3:
        alert("Příliš málo");
        break;
    case 4:
        alert("Přesně tak!");
        break;
    case 5:
        alert("Příliš moc");
        break;
    default:
        alert("Neznámá hodnota");
}
```

# 📋 Shrnutí

- **Účel:** Čistší alternativa k dlouhým řetězcům `if...else if...`.
- **Porovnání:** Vždy používá striktní rovnost (`===`).
- **`break`**: Klíčový pro správné chování, zabraňuje "fall-through".
- **`default`**: Zachytí případy, které neodpovídají žádnému `case`.
