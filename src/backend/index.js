const app = require('./app');

const port = 3000;

console.log('Starting Application');

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
