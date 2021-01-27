# dashoboard
+ '/'
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# logowanie
+ '/login'
  - pola na login i hasło
  - guzik do zalogowania(link do dashoboardu, bo pracujemy tylko nad frontendem)

# widok dostępności stolików
+ '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwcji i wydarzeń
    * każda kolumna = jeden stolik
    * każdy wiersz = 30 minut
    * ma przypominać widok tygodnia w kalendarzu googla, gdzie w kolumnach zamiast dni są różne stoliki
    * po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
+ '/tables/booking/:id'
  - zawiera wszystkie informacji dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
+ '/tables/booking/new'
  - analogicznie do powyżej, ale bez poczatkowych informacji
+ '/tables/events/:id'
  - analogicznie do booking/:id, dotyczy tylko eventów
+ '/tables/events/new'
  - analogicznie do booking/new, dotyczy tylko eventów

# widok kelnera
+ '/waiter'
  - tabela
    * w wierszach stoliki
    * w kolumnach różne rodzaje informacji (np. status, czas od ostatniej aktywności)
    * w ostatniej kolumnie dostępne akcje dla danego stolika
+ '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
+ '/waiter/order/:id'
  - jak powyższa

# widok kuchni
+ '/kitchen'
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    * numer stolika lub zamówienia zdalnego oraz
    * pełne info dotyczące zamówioncyh dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
