# 🐠 Bubbles & Scales – Sklep internetowy z rybkami

**Bubbles & Scales** to projekt zespołowy zrealizowany w ramach przedmiotu *Projekt Zespołowy* w UJD studentkami 3 roku: Burei Yuliia, Czekaj Julia, Kolioglo Kateryna, Maliarchuk Bohdana, Mishchenko Olena. Celem projektu było stworzenie responsywnej, estetycznej i funkcjonalnej strony sklepu internetowego z produktami akwarystycznymi.

---

## 📂 Struktura katalogów

```
/css         → style CSS podzielone tematycznie  
/html        → wszystkie strony HTML  
/img         → obrazy i ikony używane na stronie  
/js          → skrypty JavaScript (wyszukiwarka, koszyk, dane produktów)  
```

---

## 🔧 Funkcjonalności

### 🛒 Koszyk zakupowy
- Działa w przeglądarce z użyciem `localStorage`
- Obsługuje wiele produktów i sumowanie ich ilości
- Dodanie produktu aktualizuje licznik
- Przycisk „Dodano” po kliknięciu

### 🔍 Dynamiczna wyszukiwarka
- Autouzupełnianie nazw produktów podczas wpisywania
- Miniaturka, nazwa i cena w podpowiedziach
- Kliknięcie przenosi do strony `product.html?id=X`

### 🐟 Strona produktu (dynamiczna)
- Jeden wspólny plik `product.html` dla wszystkich produktów
- Dane produktu ładowane dynamicznie na podstawie `id` w URL
- Wszystkie informacje (nazwa, opis, cena, obraz) pobierane z bazy produktów w pliku JS
- Dodatkowo w projekcie znajduje się gotowy zrzut bazy danych MySQL, który może zostać wykorzystany do dalszego rozwoju systemu (np. API, backend, CMS)
- Estetyczny i responsywny wygląd karty produktu

---

## 🗃️ Baza danych produktów (tymczasowa)

Produkty nie są przechowywane na serwerze – aktualnie baza to **tablica obiektów JavaScript** w pliku `product.html` i `search.js`.  
Przykład wpisu:

```js
{
  id: 1,
  name: "Blue Rim",
  price: "49,99 zł",
  image: "img/..git..",
  description: "The Blue Rim is a vibrant fish..."
}
```
Dodatkowo, projekt zawiera gotową bazę danych MySQL (backup.sql), która może być wykorzystana w kolejnych etapach rozwoju – np. przy budowie backendu (Node.js/PHP), stworzeniu panelu admina lub integracji z API.

---

## 📈 Plan rozwoju – backend

W kolejnych etapach możliwy rozwój projektu o:

- Stworzenie backendu w Node.js + Express lub PHP
- Połączenie z rzeczywistą bazą danych (np. MySQL, MongoDB)
- Rejestracja/logowanie użytkownika
- Admin panel do zarządzania produktami
- Dynamiczne generowanie strony z danych z serwera (SSR/API)
- Przeniesienie koszyka do sesji backendowej zamiast localStorage

---

## 📑 Technologie

- HTML5 + CSS3 (własne style)
- JavaScript (Vanilla JS)
- LocalStorage (dla koszyka)
- Brak frameworków – projekt zbudowany od podstaw

---

## ⚙️ Jak uruchomić projekt lokalnie

1. **Sklonuj repozytorium:**  
   `git clone https://github.com/Rika84/Projekt_gr_2025.git`

2. **Przejdź do katalogu projektu:**  
   `cd Projekt_gr_2025`

3. **Otwórz plik `/html/home.html` w przeglądarce**

✅ Projekt nie wymaga serwera – działa lokalnie offline (HTML/CSS/JS)

---

## ✅ Status funkcjonalny

| Strona         | Status     | Uwagi                                  |
|----------------|------------|----------------------------------------|
| home.html      | ✅ gotowe  | koszyk, produkty, wyszukiwarka         |
| product.html   | ✅ gotowe  | dane dynamiczne przez `id`             |
| koszyk.html    | ✅ gotowe  | localStorage, lista zakupów            |
| news.html      | ✅ gotowe  | poprawki graficzne, wyszukiwarka działa |
| about.html     | ✅ gotowe  | informacje o firmie                    |
| contact.html   | ✅ gotowe  | formularz kontaktowy                   |

---

## 👨‍💻 Autorzy i zespół

| Imię i nazwisko       | Zakres prac                                                                 |
|------------------------|------------------------------------------------------------------------------|
| Czekaj Julia           | Projekty graficzne, podglądy stron, tła, ikony, struktura layoutu            |
| Maliarchuk Bohdana     | Dobór kolorystyki strony, zdjęcia rybek                                     |
| Burei Yuliia           | Tworzenie HTML (home, news, about, contact, koszyk), podstawowa baza danych |
| Mishchenko Olena       | Stylowanie CSS (home, news, about, contact, koszyk)                         |
| Kolioglo Kateryna      | Lider projektu: JIRA, Git, testowanie, edycja kodu, wyszukiwarka, optymalizacja, komunikacja z zespołem i prowadzącym |

Zadania i postęp prac były śledzone w systemie **JIRA**.

---

## 📌 Uwaga końcowa

Projekt zrealizowany z naciskiem na czytelność kodu, pracę zespołową i dobre praktyki frontendowe. Gotowy do rozbudowy o backend i integrację z bazą danych w przyszłości.