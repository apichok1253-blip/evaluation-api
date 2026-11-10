const express = require('express');
const evaluateeRouter = require('./routes/evaluatees');
 
const app = express();
app.use(express.static('public'));
 
// URL ไหนขึ้นต้นด้วย /api/evaluatees ส่งต่อให้ไฟล์ routes/evaluatees.js จัดการ
app.use('/api/evaluatees', evaluateeRouter);
 
app.listen(3000, () => {
  console.log('เซิร์ฟเวอร์ทำงานที่ http://localhost:3000');
});

