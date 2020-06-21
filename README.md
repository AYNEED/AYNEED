# AYneed v2

## Установка

1. Выполнить `yarn install` в корне репозитория.

### Web-версия

1. `cd frontend-web`
2. `yarn run start`

### Backend

1. `cd backend-api`
2. `yarn run start`

## Требования к архитектуре

### 1. Общие положения

1. ~~Monorepo (`yarn workspaces`)~~
2. ~~`TypeScript`~~
3. ~~Глобальный `eslint` на весь репозиторий~~
4. ~~Глобальный `prettier` на весь репозиторий~~
5. ~~`Prettier` на прекоммит~~
6. Централизованный зашифрованный `vault` для креденшиалов и код (`ansible`?), который раскладывает эти креденшиалы по `.env`-файлам
7. ~~Реинсталл всех зависимостей на хук `post-merge`~~
8. Все внутренние урлы должны формироваться на основе расшаренной карты роутов
9. Поддержка `WSS` всеми сервисами
10. Аутентификация по паре "`http-only` кука + `csrf`-токен"
11. Глобальный `jest` для юнит-тестов
12. Поддержка `storybook` (?)
13. Работа со статикой должна быть вынесена в отдельный микросервис или полноценный CDN
14. Логика, которая остается неизменной вне зависимости от концепта (авторизация, избранное, нотификейшны, etc) должна быть обособлена в отдельный слой. Это сильно упростит всем жизнь, когда концепт в очередной раз изменится
15. ~~Предусмотреть централизованный механизм подписок на те данные, которые изменяются в реальном времени~~
16. Поддержка горизонтального масштабирования

### 2. Common code

1. Общие тайпинги для общих сущностей
2. ~~Менеджмент словарей (интернационализация)~~
3. ~~Шаринг кода, отвечающего за интернационализацию (за исключением специфических различий)~~
4. Шаринг кода / конфигов, отвечающих за валидацию данных (`yup`?) или же автонгенерация валидаторов из тайпингов (`runtypes`?)
5. Шаринг общих констант
6. Шаринг карты роутов
7. Все ошибки должны иметь свой уникальный (в рамках системы) код
8. Предусмотреть возможность интернационализации текстов ошибок по кодам

### 3. Backend

1. Поддержка миграций для БД
2. Поддержка интернационализаций для сервисных сообщений
3. Поддержка версионирования api для мобильных приложений (или придумать механизм доставки обновлений в мобильные приложения минуя официальную процедуру со сторами - последнее звучит хорошо, но по опыту, очень нестабильно работает)
4. Подсистема нотификейшнов на отправку должна иметь универсальное api, чтобы можно было легко переключать провайдеров (почта, push, sms и т.д.)
5. У нас должно быть стандартизированное api для внешних интеграций каждого типа (например, платежные системы или SMS-шлюзы), чтобы поставщики услуг были взаимозаменяемыми; все специфические различия должны быть оформлены в виде драйверов

### 4. Common client code (`web` / `mobile`)

1. Шаринг кода, отвечающего за менеджмент состояния
2. ~~Персистентность данных, полученных от api; хранилище должно быть неблокирующим~~
3. ~~Поддержка фрагментов; данные, принадлежащие одному и тому же id должны склеиваться (если данные уже есть и мы уверены что они не устарели), не должно происходить избыточных запросов к api~~

### 5. WEB

1. ~~React~~
2. Optimistic updates
3. Поддержка SSR
4. Состояние должно синхронизироваться между вкладками браузера
5. По хорошему - wss-коннект должен открываться только из текушей вкладки браузера, остальные синхронизируются с ее состоянием
6. Поддержка PWA

### 6. Mobile

1. ReactNative
2. Optimistic updates
3. `react-native-v8` для Android-версии
4. `react-navigation` для роутинга

### 7. Тесты

1. Весь критический функционал должен быть покрыт интеграционными тестами
2. Интеграционные тесты должны уметь запускаться во всех основных средах (`docker` + `puppeteer`)

### 8. Инфраструктура

1. Continuous integration
2. Поддержка staging (одна ветка === один субдомен)
3. Все сервисы должны быть завернуты в контейнеры (`docker`)
4. Оркестрация контейнеров (`kubernetes`?)
