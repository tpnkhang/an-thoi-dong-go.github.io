export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { password, action, rowId } = req.body;
    
    // So sánh mật khẩu người dùng gửi lên với Biến môi trường trên Vercel
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ status: 'error', message: 'Sai mật khẩu quản trị!' });
    }

    // Nếu mật khẩu đúng, Vercel Serverless sẽ gọi tiếp đến Google Apps Script của bạn
    const SCRIPT_URL = "LINK_GOOGLE_APPS_SCRIPT_CỦA_BẠN";
    
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ action, rowId })
    });
    
    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.toString() });
  }
}
