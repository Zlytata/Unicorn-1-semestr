## Shrnutí článku: Základy JavaScriptu a "Hello, world!"

Tento článek se zaměřuje na úplné základy vkládání **JavaScriptu** do **HTML** stránek. Ukazuje, jak zobrazit klasickou hlášku "Hello, world!" a vysvětluje základní principy.

### Klíčové informace:

* **Značka `<script>`:** Pro vložení JavaScriptu do HTML se používá značka `<script>`. Vše, co je uvnitř této značky, je považováno za JavaScriptový kód.

* **Vložení kódu přímo do HTML:** Kód můžete vložit přímo do HTML souboru. Například pro zobrazení upozornění:
    ```html
    <script>
      alert('Hello, world!');
    </script>
    ```

* **Externí skripty:** Lepší praxí je ukládat JavaScriptový kód do samostatných souborů s příponou `.js`. Tyto soubory se pak do HTML vkládají pomocí atributu `src` ve značce `<script>`:
    ```html
    <script src="/cesta/k/souboru/skript.js"></script>
    ```
    Tento přístup má několik výhod:
    * **Přehlednost:** Odděluje HTML a JavaScript, což zlepšuje čitelnost kódu.
    * **Ukládání do mezipaměti (cache):** Prohlížeč si externí soubor stáhne pouze jednou. Při návštěvě dalších stránek, které používají stejný skript, jej již nemusí stahovat znovu, což zrychluje načítání.

* **Omezení značky `<script>`:** Značka `<script>` nemůže mít zároveň atribut `src` a obsahovat kód. Musíte si vybrat jednu z možností. Pokud tedy chcete použít externí soubor, musíte pro další kód vytvořit novou značku `<script>`.

* **Starší atributy `type` a `language`:** Článek zmiňuje, že dříve se používaly atributy jako `type="text/javascript"` a `language="javascript"`. Dnes již **nejsou nutné**, protože prohlížeče automaticky předpokládají, že se jedná o JavaScript.

### Dovysvětlení:

* **Proč je lepší používat externí skripty?**
    Kromě zmíněného ukládání do mezipaměti a lepší přehlednosti má tento přístup i další výhody. Usnadňuje **správu kódu**, protože stejný skript můžete použít na více stránkách a v případě potřeby jej upravit pouze na jednom místě. Také to podporuje **spolupráci v týmu**, kdy se jeden člověk může starat o HTML a druhý o JavaScript, aniž by si navzájem zasahovali do práce.