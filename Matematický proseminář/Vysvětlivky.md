
---

## 🧐 Velká Fermatova věta

^4dd7d3

Velká Fermatova věta (někdy nazývaná Fermatova poslední věta, *Fermat's Last Theorem*) je slavné tvrzení z **teorie čísel**, které po staletí vzdorovalo snahám matematiků o důkaz. Jde o jeden z nejslavnějších a nejdéle nevyřešených problémů v historii matematiky.

---

### **Vysvětlivka v kostce** 💡

**Tvrzení Velké Fermatovy věty:**

> Neexistují žádná tři kladná celá čísla $x$, $y$ a $z$, která by splňovala rovnici:
>
> $$x^n + y^n = z^n$$
>
> pokud je **exponent $n$ celé číslo striktně větší než 2** ($n > 2$).

* Pro $n=1$ ($x+y=z$) a $n=2$ ($x^2+y^2=z^2$, tedy **Pythagorova věta**) existuje **nekonečně mnoho** řešení v kladných celých číslech. Např. $3^2 + 4^2 = 5^2$.
* Věta tvrdí, že jakmile se exponent $n$ zvýší na $3, 4, 5,$ a tak dále, žádné takové řešení už **neexistuje**.

---

Jistě, zde je vysvětlení pojmu **přirozená čísla** zformátované v raw Markdownu.

---

## 🔢 Detailní přehled Základních Číselných Množin

Tyto množiny postupně rozšiřují pole čísel a jsou v sobě vnořeny: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.

---

### **Přirozená čísla ($\mathbb{N}$)** 👶

^3bd8f0

* **Definice:** Množina čísel, která slouží k **počítání** ("kolik?") a **řadění** ("který v pořadí?").
* **Množina:** Jsou to všechna **kladná celá čísla** kromě **0**.
    $$\mathbb{N} = \{1, 2, 3, 4, 5, \ldots\}$$
* **Uzavřenost (operace):** Jsou **uzavřená** pro **sčítání** a **násobení** (výsledek je vždy v $\mathbb{N}$).
* **Otevřenost (omezení):** **Nejsou** uzavřená pro odčítání ($3 - 5 = -2$) ani dělení ($5 \div 2 = 2,5$). Pro vyřešení tohoto omezení byla zavedena celá čísla.

---

### **Celá čísla ($\mathbb{Z}$)** 🧊

^92753c

* **Definice:** Rozšiřují přirozená čísla o **nulu** a **záporná celá čísla**.
* **Množina:** Všechna **celá** čísla (kladná, záporná i nula).
    $$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$
* **Důvod zavedení:** Umožňují neomezeně provádět operaci **odčítání** (např. při počítání dluhů nebo teplot pod bodem mrazu).
* **Uzavřenost:** Uzavřená pro **sčítání**, **odčítání** i **násobení**.
* **Otevřenost (omezení):** **Nejsou** uzavřená pro dělení ($3 \div 4 = 0,75$). Pro vyřešení tohoto omezení byla zavedena racionální čísla.

---

### **Racionální čísla ($\mathbb{Q}$)** 🧩

^630f3c

* **Definice:** Množina všech čísel, která lze vyjádřit jako **podíl** (poměr) dvou celých čísel.
* **Množina:** Čísla, která lze zapsat jako **zlomek** $\frac{a}{b}$.
    $$\mathbb{Q} = \left\{\frac{a}{b} \mid a \in \mathbb{Z}, b \in \mathbb{Z} \setminus \{0\}\right\}$$
* **Příklady:** Zahrnuje všechna celá čísla (např. $7 = \frac{7}{1}$), konečná desetinná čísla ($1,5 = \frac{3}{2}$) a periodická desetinná čísla ($0, \overline{3} = \frac{1}{3}$).
* **Důvod zavedení:** Umožňují neomezeně provádět operaci **dělení** (kromě dělení nulou).
* **Uzavřenost:** Uzavřená pro **sčítání**, **odčítání**, **násobení** i **dělení** (kromě dělení nulou).

---

### **Reálná čísla ($\mathbb{R}$)** 📏

^d441f7

* **Definice:** Je to celá množina čísel, která jsou umístěna na **číselné ose**. Zahrnují racionální i iracionální čísla.
* **Množina:** $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$ (kde $\mathbb{I}$ je množina iracionálních čísel).
* **Iracionální čísla ($\mathbb{I}$):** Čísla, která **nelze** vyjádřit jako zlomek; mají **nekonečný neperiodický** desetinný rozvoj.
    * **Příklady:**
        * **Transcedentní čísla** (nejsou kořenem žádné polynomiální rovnice s celočíselnými koeficienty): $\mathbf{\pi}$ a $\mathbf{e}$.
        * **Algebraická iracionální čísla:** $\mathbf{\sqrt{2}}$, $\sqrt{3}$, atd. (kořeny polynomiálních rovnic).
* **Důvod zavedení:** Jsou potřebná k přesnému popisu všech **měřitelných** veličin ve fyzice, geometrii a technice (např. délky, plochy, objemy).
* **Uzavřenost:** Většina běžných matematických funkcí (odmocnina, logaritmus) má smysluplné výsledky pouze v reálných číslech.

---

### ✍️ **Základní Symbolické Zápisy v Teorii Množin

^469d6c

|   Symbolický zápis    |                 Čtení/Význam                  |                 Příklad                  | Vysvětlení                                                    |      |                                    |      |                          |
| :-------------------: | :-------------------------------------------: | :--------------------------------------: | :------------------------------------------------------------ | ---- | ---------------------------------- | ---- | ------------------------ |
|     **$x \in X$**     |       Prvek $x$ **náleží** množině $X$.       |            $3 \in \mathbb{N}$            | Číslo 3 je prvkem množiny přirozených čísel.                  |      |                                    |      |                          |
|   **$x \notin X$**    |      Prvek $x$ **nenáleží** množině $X$.      |         $\pi \notin \mathbb{Q}$          | Číslo $\pi$ není prvkem množiny racionálních čísel.           |      |                                    |      |                          |
|   **$A \subset X$**   |  Množina $A$ je **podmnožinou** množiny $X$.  |     $\mathbb{N} \subset \mathbb{Z}$      | Přirozená čísla jsou podmnožinou celých čísel.                |      |                                    |      |                          |
| **$A \not\subset X$** | Množina $A$ **není podmnožinou** množiny $X$. |     $\{1, 5\} \not\subset \{1, 2\}$      | Množina $\{1, 5\}$ obsahuje prvek 5, který není v $\{1, 2\}$. |      |                                    |      |                          |
|    **$A \cup B$**     |       **Sjednocení** množin $A$ a $B$.        |  $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$  | Množina prvků, které leží alespoň v jedné z $A, B$.           |      |                                    |      |                          |
|    **$A \cap B$**     |         **Průnik** množin $A$ a $B$.          |     $\{1, 2\} \cap \{2, 3\} = \{2\}$     | Množina prvků, které leží v $A$ **i** v $B$.                  |      |                                    |      |                          |
|  **$A \setminus B$**  |         **Rozdíl** množin $A$ a $B$.          | $\{1, 2, 3\} \setminus \{2, 3\} = \{1\}$ | Množina prvků, které leží v $A$ **a ne** v $B$.               |      |                                    |      |                          |
|    **$\emptyset$**    | **Prázdná množina** (neobsahuje žádný prvek). |                    $                     | \emptyset                                                     | = 0$ | Mohutnost prázdné množiny je nula. |      |                          |
|          **$          |                       X                       |                   $**                    | **Mohutnost** (kardinalita) množiny $X$.                      | $    | \{a, b, c\}                        | = 3$ | Počet prvků množiny $X$. |
