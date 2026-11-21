# Генератор форм на Typescript

[![hexlet-check](https://github.com/VladaKhazova/react-urfu-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/VladaKhazova/react-urfu-project-81/actions)

[![CI](https://github.com/VladaKhazova/react-urfu-project-81/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/VladaKhazova/react-urfu-project-81/actions/workflows/ci.yml)

Библиотека, с помощью которой удобно создавать формы в шаблонах сайтов. Она заметно сокращает код описания формы за счет автоматической обработки ошибок и различных контролов.

Учебный проект Хекслета: https://ru.hexlet.io/
Как это должно работать: https://files.hexlet.app/a/100lcl

## Стек

- JavaScript

## Установка

<!-- Опишите установку: клонирование, зависимости, переменные окружения -->

```bash
git clone https://github.com/VladaKhazova/react-urfu-project-81.git
cd react-urfu-project-81
```

## Использование

<!-- Добавьте примеры запуска и запись asciinema — именно это смотрит работодатель -->

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

После установки зависимостей соберите пакет командой `npm run build`.

```js
import HexletCode from "@hexlet/code";

const template = { name: "rob", job: "hexlet" };

const form = HexletCode.formFor(template, { url: "/users" }, (f) => {
  f.input("name", { class: "user-input" });
  f.input("job", { as: "textarea", rows: 5 });
});

console.log(form);
```

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
