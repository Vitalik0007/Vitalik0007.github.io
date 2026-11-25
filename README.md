# Vitalii Yavorskyi — Unity Developer Portfolio

Оновлений статичний сайт-портфоліо у темній GameDev-темі (без jQuery та зайвих залежностей).

## Що треба доробити вручну, коли будеш готовий
1. **Скріншоти та посилання для `ViceHustle`:**
   - Додай скріншоти гри в папку `image/` (наприклад `vicehustle1.jpg`, `vicehustle2.jpg`) і заміни `image/vicehustle-cover.svg` в `index.html` та `project-vicehustle.html`.
   - Заміни посилання розробника Google Play на пряме посилання на сторінку **ViceHustle** у `index.html` та `project-vicehustle.html`.
2. **Комерційний проєкт зі стору (за бажанням):**
   - Якщо контракт/NDA дозволяє — можеш продублювати одну з карток `<article class="project-card" data-category="commercial released">` у `index.html`, додати скріншот, опис твоєї ролі та посилання на Google Play / App Store.
3. **PDF-резюме (за бажанням):**
   - Можеш покласти свій актуальний PDF-файл у корінь (наприклад `Vitalii_Yavorskyi_Unity_Developer.pdf`) і додати кнопку `Download CV` поруч із `Contact Me` в `index.html`.

## Як задеплоїти безкоштовно на GitHub Pages
1. Створи новий репозиторій на GitHub (наприклад `vitalii-portfolio` або `Vitalik0007.github.io`).
2. Запуш туди вміст цієї папки:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio v2"
   git branch -M main
   git remote add origin https://github.com/Vitalik0007/<REPO_NAME>.git
   git push -u origin main
   ```
3. У налаштуваннях репозиторію на GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch (`main` / `/root`)**.
4. Через 1–2 хвилини сайт буде доступний за HTTPS-посиланням і ніколи не «засинатиме».

