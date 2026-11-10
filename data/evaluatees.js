// ข้อมูลตัวอย่าง: รายชื่อผู้รับการประเมิน (ครูแจก ไม่ต้องพิมพ์เอง)
// สัปดาห์ 4 ยังไม่ใช้ฐานข้อมูล เก็บไว้ใน Array ก่อน สัปดาห์ 5 จะย้ายไป MySQL
// status: draft = กำลังกรอก, submitted = ส่งแล้วรอกรรมการ, completed = ประเมินเสร็จ
// progress: กรอกตัวชี้วัดไปแล้วกี่เปอร์เซ็นต์

const evaluatees = [
  { id: 1,  full_name: 'นายสมชาย รักสอน',        department: 'เทคโนโลยีสารสนเทศ', position: 'ครูชำนาญการ',      email: 'somchai@college.ac.th', phone: '0820000001', status: 'submitted', progress: 100 },
  { id: 2,  full_name: 'นางสุดา มีสุข',            department: 'การบัญชี',          position: 'ครู',              email: 'suda@college.ac.th',    phone: '0820000002', status: 'draft',     progress: 30 },
  { id: 3,  full_name: 'นายปรีชา ช่างคิด',        department: 'ช่างไฟฟ้ากำลัง',     position: 'ครูชำนาญการพิเศษ', email: 'preecha@college.ac.th', phone: '0820000003', status: 'completed', progress: 100 },
  { id: 4,  full_name: 'นางสาวนภา แสงทอง',      department: 'การตลาด',           position: 'ครูผู้ช่วย',         email: 'napa@college.ac.th',    phone: '0820000004', status: 'draft',     progress: 0 },
  { id: 5,  full_name: 'นายวิชัย ยนต์ดี',          department: 'ช่างยนต์',           position: 'ครู',              email: 'wichai@college.ac.th',  phone: '0820000005', status: 'submitted', progress: 100 },
  { id: 6,  full_name: 'นางสาวพิมพ์ใจ เขียนโค้ด',  department: 'เทคโนโลยีสารสนเทศ', position: 'ครูผู้ช่วย',         email: 'pim@college.ac.th',     phone: '0820000006', status: 'draft',     progress: 60 },
  { id: 7,  full_name: 'นายธนากร ทองดี',         department: 'การบัญชี',          position: 'ครูชำนาญการ',      email: 'thanakorn@college.ac.th', phone: '0820000007', status: 'completed', progress: 100 },
  { id: 8,  full_name: 'นางมาลี ใจงาม',           department: 'การตลาด',           position: 'ครูชำนาญการพิเศษ', email: 'malee@college.ac.th',   phone: '0820000008', status: 'submitted', progress: 100 },
  { id: 9,  full_name: 'นายสุรชัย ไฟแรง',         department: 'ช่างไฟฟ้ากำลัง',     position: 'ครู',              email: 'surachai@college.ac.th', phone: '0820000009', status: 'draft',     progress: 85 },
  { id: 10, full_name: 'นางสาวจันทร์เพ็ญ ดวงดี',  department: 'เทคโนโลยีสารสนเทศ', position: 'ครู',              email: 'janpen@college.ac.th',  phone: '0820000010', status: 'completed', progress: 100 },
  { id: 11, full_name: 'นายประเสริฐ ล้อแม็ก',      department: 'ช่างยนต์',           position: 'ครูผู้ช่วย',         email: 'prasert@college.ac.th', phone: '0820000011', status: 'draft',     progress: 15 },
  { id: 12, full_name: 'นางวันดี ศรีสุข',          department: 'การบัญชี',          position: 'ครูผู้ช่วย',         email: 'wandee@college.ac.th',  phone: '0820000012', status: 'submitted', progress: 100 }
];

module.exports = evaluatees;
