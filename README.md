# 🌿 An Thới Đông Go - Cẩm Nang Du Lịch Thông Minh

> Dự án tham gia cuộc thi **"Tuổi trẻ sáng tạo – Chung tay phát triển xã An Thới Đông"** năm 2026.
> Lĩnh vực: Chuyển đổi số & Phát triển kinh tế địa phương.


## 📖 Giới thiệu Dự án
**An Thới Đông Go** là một nền tảng cẩm nang du lịch trực tuyến nhằm số hóa toàn bộ thông tin các điểm du lịch, ẩm thực, văn hóa và lưu trú tại xã An Thới Đông (huyện Cần Giờ). 

Dự án ra đời nhằm giải quyết rào cản thiếu hụt thông tin tập trung, giúp khách du lịch tự túc và người dân dễ dàng tra cứu, định hướng di chuyển, góp phần thúc đẩy du lịch sinh thái và kinh tế địa phương theo định hướng "Thành phố Cần Giờ" trong tương lai.

## Tính năng Nổi bật
* **Bản đồ Tương tác (Interactive Map):** Ứng dụng Leaflet.js giúp hiển thị trực quan các điểm đến. Tự động thu/phóng (Auto-zoom) thông minh khi người dùng tìm kiếm.
* **Tìm kiếm & Lọc thông minh:** Tích hợp bộ lọc theo danh mục (Ẩm thực, Du lịch, Tâm linh...) với icon trực quan.
* **Đóng góp Cộng đồng (UGC):** Người dân địa phương có thể đề xuất địa điểm mới thông qua biểu mẫu thân thiện.
* **Hệ thống Quản trị (Admin Panel):** Khu vực dành riêng cho Ban tổ chức kiểm duyệt, phê duyệt hoặc từ chối các đề xuất trước khi hiển thị lên bản đồ (Sử dụng kiến trúc Serverless với Google Apps Script).
* **Mobile-First UX/UI:** Giao diện tối ưu 100% cho điện thoại thông minh, hệ màu "Sinh thái ngập mặn" mang đậm bản sắc Cần Giờ.

## Kiến trúc Kỹ thuật (Tech Stack)
Dự án được xây dựng theo mô hình **No-code/Low-code Backend**, tối ưu chi phí vận hành (0đ):
* **Frontend:** HTML5, JavaScript (Vanilla), Tailwind CSS.
* **Map Engine:** Leaflet.js & OpenStreetMap.
* **Database:** Google Sheets (Chia làm 2 luồng: `Pending` và `Approved`).
* **Backend API:** Google Apps Script (Xử lý logic kiểm duyệt, phân quyền).
* **Deployment & Hosting:** Vercel.

## Hướng dẫn Cài đặt & Vận hành

1. **Clone dự án:**
   ```bash
   git clone [https://github.com/your-username/an-thoi-dong-go.git](https://github.com/your-username/an-thoi-dong-go.git)
   
   * Khởi chạy Local: Mở file index.html trực tiếp trên trình duyệt, hoặc sử dụng Live Server trên VS Code.
   * Kiến trúc Google Sheets: Dữ liệu được liên kết trực tiếp qua REST API. Đảm bảo file cấu trúc có đủ 2 tab Approved (Vị trí đầu tiên) và Pending.

# Nhóm Tác giả
Trần Phạm Như Khang - Chi đoàn 12A4, THPT An Nghĩa.
Nguyễn Hân Vy - Chi đoàn 10A3, THPT An Nghĩa.
