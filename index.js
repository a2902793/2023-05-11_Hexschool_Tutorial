const express = require('express');
const app = express();

app.set('json spaces', 5); // to pretify json response

const PORT = 3000;
const fileparser = require('./fileparser');

app.get('/', (req, res) => {
  res.send(`
    <h2>AWS Educate × 六角學院 2023-05-11 Node.js 直播班</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Select a file: 
        <input name="file" type="file" />
      </div>
      <input type="submit" value="Upload" />
    </form>

  `);
});

app.post('/api/upload', async (req, res) => {
  await fileparser(req)
  .then(data => {
    res.status(200).json({
      message: "Success",
      data
    })
  })
  .catch(error => {
    res.status(400).json({
      message: "An error occurred.",
      error
    })
  })
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
})
