const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// Đảm bảo thư mục 'public/image' tồn tại
const imageFolderPath = path.join(__dirname, 'public/image');
if (!fs.existsSync(imageFolderPath)) {
  fs.mkdirSync(imageFolderPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file với timestamp để tránh trùng lặp
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.json({ filePath: `image/${req.file.filename}` });
});

app.listen(5001, () => {
  console.log('Upload server started on port 5000');
});