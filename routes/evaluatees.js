const express = require('express');
const evaluatees = require('../data/evaluatees');
 
const router = express.Router();
 
// GET /api/evaluatees  ค้นหา (?q=ชื่อ&department=แผนก&status=สถานะ)
router.get('/', (req, res) => {
  const { q, department, status } = req.query;
  let result = evaluatees;
 
  if (q) {
    result = result.filter((p) => p.full_name.includes(q));
  }
  if (department) {
    result = result.filter((p) => p.department === department);
  }
  if (status) {
    result = result.filter((p) => p.status === status);
  }
 
  res.json({
    status: 'success',
    message: 'พบ ' + result.length + ' คน',
    data: result
  });
});
 
// GET /api/evaluatees/3  ดูข้อมูล 1 คน
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = evaluatees.find((p) => p.id === id);
 
  if (!person) {
    return res.status(404).json({
      status: 'error',
      message: 'ไม่พบผู้รับการประเมิน id ' + id,
      data: null
    });
  }
  res.json({
    status: 'success',
    message: 'พบข้อมูล',
    data: person
  });
});
 
module.exports = router;

