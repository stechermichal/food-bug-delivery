const app = require('./app');

app.listen(process.env.APP_PORT, () => console.log(`Server started on port: ${process.env.APP_PORT}`));
