# Spiele Design Standard

Erarbeitet am 2026-03-02 anhand von `single_choice_quiz`.
Diese Vorlage gilt für alle Spieltypen beim Design-Durchgang.

---

## Layout (Mobile, max-width: 600px)

### Overlay & Body
- `.gm-body` Padding: `20px 12px 8px` (oben mehr Luft, unten minimal damit Buttons nah ans Ende kommen)

### Spielkarte
- `.game-card` (bzw. spielspezifische Karte): `padding-top: 28px` — mehr Luft nach dem Header
- `padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 44px)` — Buttons etwas über dem Screenrand

---

## Fragetext-Box

Jede Frage bekommt eine sichtbare Box — analog zu `.tfs-statement-card` / `.scn-bubble`.

```css
.XX-question {
  font-size: 1.1rem;         /* Desktop */
  font-weight: 600;
  line-height: 1.4;
  color: #1c2342;
  text-align: center;
  background: linear-gradient(135deg, #f7f7fb, #eef0f7);
  border: 1px solid rgba(28, 35, 66, 0.08);
  border-radius: 16px;
  padding: 16px;
  margin-top: 24px;          /* Abstand zur Meta-Zeile */
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.65);
}

/* Mobile */
@media (max-width: 600px) {
  .XX-question {
    font-size: 1rem;
    padding: 14px 12px;
  }
}
```

---

## Antwort-Buttons

### Allgemein
- `text-align: center`

### Mobile
- `font-size: 17px` (CSS-Default, JS kann nach unten anpassen)
- `padding: 14px 12px`
- Gap zwischen Buttons: `14px`
- Buttons per `margin-top: auto` nach unten schieben (letzter Button kurz vor Screenende)

> **Hover-Wobble auf Touch verhindern:**
> `@media (hover: none)` → hover-Transform auf Buttons deaktivieren, damit beim Scrollen kein Wackeln entsteht.

> **`margin-top: auto` NUR für Single Choice (4 fixe Optionen, kein Footer-Button).**
> Bei allen anderen Spielen mit Footer-Button (MC, category_sort usw.) **kein** `margin-top: auto`.
> Grund: `auto` füllt die Karte exakt auf Screenhoehe. Der Footer-Button landet dann knapp am Rand –
> zu wenig für den Badge, zu wenig für gutes Aussehen, Container wirkt abgehackt.
> Natürlicher Flow + `updateScrollMode()` für Overflow-Fälle ist die richtige Lösung.

### Flexible Schriftgröße (JS)
Funktion `adjustXXOptionFontSize` nach dem Rendern per `requestAnimationFrame` aufrufen.

```js
function adjustXXOptionFontSize(buttons, maxPx = 17, minPx = 12) {
  if (!buttons.length) return;

  const cs = window.getComputedStyle(buttons[0]);
  const paddingV = (parseFloat(cs.paddingTop) || 14) + (parseFloat(cs.paddingBottom) || 14);

  for (let size = maxPx; size >= minPx; size--) {
    buttons.forEach((b) => { b.style.fontSize = size + "px"; });

    const lineHeight = size * 1.35;
    const maxBtnHeight = lineHeight * 2 + paddingV + 4; // 2 Zeilen + Padding + Puffer

    const allFit = Array.from(buttons).every((b) => b.scrollHeight <= maxBtnHeight);
    if (allFit) break;
    // Bei minPx: kein weiterer Versuch, Text darf umbrechen
  }
}
```

Aufruf nach `rootEl.appendChild(card)`:
```js
const optionButtons = card.querySelectorAll(".XX-option");
requestAnimationFrame(() => adjustXXOptionFontSize(optionButtons));
```

---

## Reihenfolge beim Durchgang

1. Fragetext-Box hinzufügen
2. Antwort-Buttons: text-align center, font-size 17px, padding, gap 14px
3. margin-top: auto auf den Options-Container
4. Flexible Schriftgröße per JS einbauen
5. Card-Padding oben/unten anpassen
6. Im Browser auf Mobile prüfen, Feintuning

---

## Bereits erledigt

- [x] `single_choice_quiz`
- [x] `multiple_choice_quiz`
- [x] `true_false_swipe`

## Noch ausstehend
- [ ] `scenario_choice`
- [ ] `gap_fill`
- [ ] `match_pairs`
- [ ] `order_steps`
- [ ] `category_sort`
- [ ] `timeline_order`
- [ ] `sentence_builder`
- [ ] `scenario_choice`
- [ ] `gap_fill`
- [ ] `match_pairs`
- [ ] `order_steps`
- [ ] `category_sort`
- [ ] `timeline_order`
- [ ] `sentence_builder`
