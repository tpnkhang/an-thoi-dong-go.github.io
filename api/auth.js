export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    // Ép kiểu dữ liệu an toàn tránh lỗi đọc body
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    
    const { password, action, rowId } = body || {};
    
    // Kiểm tra biến môi trường trên Vercel
    if (!process.env.ADMIN_HASH) {
      return res.status(200).json({ status: 'error', message: 'Lỗi Server: Chưa cài đặt biến ADMIN_PASSWORD trên Vercel!' });
    }

    // So khớp mật khẩu
    if (password !== process.env.ADMIN_HASH) {
      return res.status(200).json({ status: 'error', message: 'Sai mật khẩu quản trị!' });
    }

    // Link Google Apps Script của bạn
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWeEamvFiVOcVG98EGpC95rxALZFJ0AgWo9E0gXP48it8SEOuJWEWgkjkWV-7Wjg-J/exec";
    
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action, password, rowId })
    });
    
    const textData = await response.text();
    let data;
    try {
      data = JSON.parse(textData);
    } catch (err) {
      data = { status: "success", raw: textData };
    }

    return res.status(200).json(data);

  } catch (error) {
    return res.status(200).json({ status: 'error', message: 'Lỗi ngoại lệ: ' + error.toString() });
  }
}
