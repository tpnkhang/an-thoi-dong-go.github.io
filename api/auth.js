export default async function handler(req, res) {
  // Chỉ cho phép phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { password, action, rowId } = req.body;
    
    // 1. Kiểm tra mật khẩu so với biến môi trường trên Vercel
    if (password !== process.env.ADMIN_HASH) {
      return res.status(200).json({ status: 'error', message: 'Sai mật khẩu quản trị!' });
    }

    // 2. Điền chính xác Link Google Apps Script của bạn vào đây
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWeEamvFiVOcVG98EGpC95rxALZFJ0AgWo9E0gXP48it8SEOuJWEWgkjkWV-7Wjg-J/exec";
    
    // 3. Chuyển tiếp yêu cầu xuống Google Apps Script
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action, password, rowId })
    });
    
    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.toString() });
  }
}
