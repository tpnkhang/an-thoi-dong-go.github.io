export default async function handler(req, res) {
  // In giá trị biến môi trường ra terminal hoặc log của Vercel
  console.log("Gia tri bien moi truong:", process.env.ADMIN_PASSWORD);
  
  return res.status(200).json({ 
    status: "success", 
    debugValue: process.env.ADMIN_PASSWORD ? "Da nhan bien moi truong" : "Bi trong/Chua nhan" 
  });
}
