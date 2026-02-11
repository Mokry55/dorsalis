# DORSALIS — statyczne demo strony WWW

Projekt przedstawia lekką, responsywną stronę demo dla **Przychodni Rehabilitacyjno-Sportowej DORSALIS** w Ząbkach.

## Struktura

- `/index.html` — strona główna (hero, zaufanie, oferta, FAQ, kontakt + mapa)
- `/oferta/index.html` — rozbudowana oferta usług
- `/kontakt/index.html` — pełny kontakt i dojazd
- `/assets/styles.css` — wspólne style (mobile first)
- `/assets/app.js` — minimalny JS do menu mobilnego
- `/robots.txt` — indeksowanie + sitemap
- `/sitemap.xml` — mapa strony (przykładowa domena)

## Jak uruchomić lokalnie

### Opcja 1: VS Code + Live Server
1. Otwórz folder projektu w VS Code.
2. Zainstaluj rozszerzenie **Live Server**.
3. Kliknij prawym przyciskiem myszy na `index.html` i wybierz **Open with Live Server**.

### Opcja 2: Python HTTP Server
W katalogu projektu uruchom:

```bash
python3 -m http.server 8080
```

Następnie wejdź na: `http://localhost:8080`.

## Publikacja na GitHub + Netlify

### 1) GitHub
```bash
git init
git add .
git commit -m "Initial static demo for DORSALIS"
git branch -M main
git remote add origin https://github.com/TWOJ_LOGIN/dorsalis-demo.git
git push -u origin main
```

### 2) Netlify
1. Zaloguj się do Netlify.
2. Kliknij **Add new site** → **Import an existing project**.
3. Połącz repozytorium GitHub i wybierz projekt.
4. Build command: *(puste)*.
5. Publish directory: `/`.
6. Deploy.

## TODO przed publikacją produkcyjnej wersji

- Podmienić `https://example.com` w canonical, `robots.txt` i `sitemap.xml`.
- Zweryfikować finalne godziny otwarcia i ewentualnie zaktualizować JSON-LD.
- Dodać analitykę (np. GA4) i monitoring konwersji kliknięć `tel:`.
