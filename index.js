const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.end('Travel');
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.end('About page');
});


app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.end('404 - Страница не найдена');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Ошибка сервера');
});

app.listen(app.get('port'), () => {
    console.log('Express запущен на http://localhost:' + app.get('port'));
});