const express = require('express');
const app = express();
const path = require('path');
let articles = require('./articles')

// Указываем EJS в качестве шаблонизатора
app.set('view engine', 'ejs');

// Указываем папку для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Роуты
app.get('/', (req, res) => {
  res.render('index', { articles: articles });
});

app.get('/image-generator', (req, res) => {
  res.render('image', { articles: articles });
});

app.get('/blog', (req, res) => {
  // Отправить все статьи в шаблон EJS
  res.render('blog', { articles: articles });
});

// Роут для отдельной новости
app.get('/blog/:slug', (req, res) => {
  // Найти статью по слагу
  const article = articles.find(a => a.slug === req.params.slug);

  // Если статья не найдена, вернуть 404
  if (!article) {
      return res.status(404).render('404');
  }

  // Отправить данные статьи в шаблон EJS
  res.render('endBlog', { article: article });
});



app.use(function(req, res, next) {
  res.status(404).render('404');
});


// Запускаем сервер
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});