import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public', {
    setHeaders: function(res) {
      res.set('Cross-Origin-Opener-Policy', 'same-origin');
      res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
  }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
})