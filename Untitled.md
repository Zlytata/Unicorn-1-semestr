# 🧠 Shrnutí článku: Polyfills a transpilers

Tento článek vysvětluje, jak moderní JavaScriptové funkce a syntaxe fungují v praxi, a jak zajistit jejich kompatibilitu se staršími prohlížeči pomocí **transpilerů** a **polyfillů**.

## ✨ Transpilery

- **Definice:** Převádí moderní JavaScript (ES6+) do starší verze (např. ES5), aby jej podporovaly starší prohlížeče.
    
- **Princip:**
    
    - Převede moderní syntaxi na ekvivalentní starší zápis.
        
    - Příklad: `height = height ?? 100;` → `(height !== undefined && height !== null) ? height : 100;`
        
- **Použití:**
    
    - Spouští se na vývojářově počítači, výsledný kód se nasazuje na server.
        
    - Často se integruje do build systémů (např. **webpack**).
        
- **Nejznámější nástroj:** **Babel** (automatizace přes `babel-loader`).
    

## 📦 Polyfill

- **Definice:** Skript, který doplňuje chybějící funkce v prostředí.
    
- **Princip:** Pokud funkce není dostupná, polyfill ji implementuje.
    
    - Příklad: `Math.trunc()` v některých starších enginech chybí.
        
        javascript
        
        ```
        if (!Math.trunc) {
          Math.trunc = function(number) {
            return number < 0 ? Math.ceil(number) : Math.floor(number);
          };
        }
        ```
        
- **Knihovny:**
    
    - **core-js** – široká podpora moderních funkcí, možnost volby jen potřebných částí.
        
    - Dříve se používal i **Babel Polyfill** (nyní nahrazeno core-js).
        

## 🎯 Důležité detaily

- **Rozdíl mezi transpilerem a kompilátorem:**
    
    - Transpiler převádí kód **v rámci stejného jazyka** (ES6 → ES5).
        
    - Kompilátor převádí kód do **jiného jazyka nebo binárního formátu** (např. JS → WebAssembly).
        
- **Frameworky:**
    
    - **React** (frontend) a **Nest.js** (backend) spoléhají na transpiler (Babel, TypeScript compiler), aby moderní kód fungoval v prohlížečích nebo Node.js..
        
- **Nástroje pro kompatibilitu:**
    
    - compat-table – stav podpory ES6+ funkcí.
        
    - caniuse.com – podpora API v prohlížečích.
        

## 🧼 Co už není nutné vědět

- Historické zmínky o **Traceur transpileru** (dnes prakticky nepoužívaný).
    
- Staré poznámky o manuálním přidávání polyfillů – dnes se řeší přes **core-js** nebo build systémy.
    
- Diskuze z komentářů na stránce (už zastaralé).
    

## 📋 Shrnutí

- **Transpiler:** Převádí moderní syntaxi na starší (např. Babel + webpack).
    
- **Polyfill:** Doplňuje chybějící funkce (např. core-js).
    
- **Frameworky:** React, Nest.js a další využívají transpiler pro kompatibilitu.
    
- **Rozdíl:** Transpiler = stejný jazyk, Kompilátor = jiný jazyk/binární formát.
    
- **Doporučení:** Používat Babel + core-js, sledovat kompatibilitu na `compat-table` a `caniuse`.