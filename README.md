Web-приложение для поиска репозиториев GitHub с помощью
GitHub REST API.
Результаты поиска представлены в виде таблицы со следующими столбцами: название,
язык, число форков, число звёзд, дата обновления.
По выбору строки отображаются детали. В деталях выбранного репозитория
необходимо отображаеся: название, зык, количество звезд, лицензия.
Реализована пагинация и сортировка с возможностью выбора направления
по следующим столбцам: название, число звёзд, число форков, дата обновления.

Скриншоты проекта представлены ниже.

Начальна страница.
![image](https://github.com/user-attachments/assets/88185c93-4879-4de5-b0e0-1bd35362b52d)

Вывод информации поиска.
![image](https://github.com/user-attachments/assets/ef6b9bd0-2ed1-4ff2-b430-c5accbf086d0)

Вывод подробной информации о репозитории.
![image](https://github.com/user-attachments/assets/be422c5e-d603-4183-a9a1-fcd9cce7171c)

Также в проект добавлена пагинация: можно выбрать количество репозиториев на страницу, а также номер страницы. Выбор вывода количества репозиториев состоит из 4-х вариантов: 10, 20, 30, 40 страниц, на картинке предсавлен вывод 20 репозиториев на странницу.
![image](https://github.com/user-attachments/assets/df8a03fb-071d-4cd2-ba2e-a36dd7df603c)

Переключение между страницами.
![image](https://github.com/user-attachments/assets/73e83d99-3c92-4294-8f0d-7bf0848ec6be)

В проекте реадизована сортировка по следующим столбцам: название, число форков, число звезд, дата обновления. На картинке представлен пример соритровке по дате обновления по убывания и по увеличению.
![image](https://github.com/user-attachments/assets/f7fd0f44-3fea-4e2d-801e-fdb2eeb325bd)
![image](https://github.com/user-attachments/assets/380e2cfd-3fe9-4fee-b7a7-83b387192fed)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
