const router = request.get('express').Router();

app.get('/users', (req, res) => {
    return res.json(users);
  });
 app.get('/users/:id',;
  module.exports = router;