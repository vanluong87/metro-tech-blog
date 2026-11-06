---
title: "Giám sát sức khỏe kết cấu hầm metro bằng cảm biến IoT: Kinh nghiệm Doha, Qatar"
description: "Hệ thống cảm biến IoT gắn trong vỏ hầm và ga ngầm giúp đội vận hành metro Doha theo dõi liên tục biến dạng, độ nghiêng và vết nứt kết cấu, phát hiện sớm dấu hiệu bất thường trước khi chúng trở thành sự cố nghiêm trọng."
lang: "vi"
date: 2026-11-06
country: "Qatar"
tags: ["giám sát kết cấu", "IoT", "bảo trì dự phòng", "an toàn công trình ngầm"]
draft: false
heroImage: "/images/blog/giam-sat-ket-cau-doha.svg"
heroImageAlt: "Sơ đồ mạng cảm biến IoT gắn trên vỏ hầm metro truyền dữ liệu về trung tâm giám sát"
---

## Vì sao cần giám sát sức khỏe kết cấu liên tục

Vỏ hầm và kết cấu ga ngầm của một tuyến metro được thiết kế để chịu tải trong hàng chục năm, nhưng trong suốt thời gian vận hành, kết cấu luôn chịu tác động từ nhiều nguồn: tải trọng đoàn tàu lặp lại, biến động mực nước ngầm, chuyển vị đất nền do các công trình xây dựng lân cận, và đặc thù khí hậu địa phương. Tại Doha, nơi mạng lưới Doha Metro vận hành trong điều kiện nền đất cát - đá vôi và tốc độ đô thị hóa, xây dựng mới diễn ra rất nhanh xung quanh các tuyến hầm, những thay đổi nhỏ về biến dạng kết cấu có thể tích lũy theo thời gian mà mắt thường khó nhận biết qua kiểm tra định kỳ thông thường. Giám sát sức khỏe kết cấu (structural health monitoring - SHM) bằng cảm biến IoT ra đời để lấp đầy khoảng trống đó: thay vì chỉ kiểm tra trực quan vài lần mỗi năm, hệ thống cảm biến thu thập dữ liệu liên tục, 24/7, giúp phát hiện sớm xu hướng bất thường trước khi chúng phát triển thành vết nứt lớn hay biến dạng nguy hiểm.

## Các loại cảm biến thường được lắp đặt

- **Cảm biến biến dạng (strain gauge)**: gắn trực tiếp lên bề mặt bê tông hoặc thép vỏ hầm để đo ứng suất cục bộ theo thời gian thực.
- **Cảm biến độ nghiêng và chuyển vị (tiltmeter, inclinometer)**: theo dõi độ lún lệch hoặc xoay của kết cấu, đặc biệt quan trọng tại các đoạn hầm gần công trình xây dựng mới.
- **Cảm biến đo mở rộng vết nứt (crack gauge)**: lắp tại các vị trí đã có vết nứt nhỏ được ghi nhận trong kiểm tra ban đầu, để theo dõi tốc độ mở rộng.
- **Cảm biến áp lực nước ngầm (piezometer)**: đo biến động mực nước và áp lực thủy tĩnh tác động lên vỏ hầm.
- **Cảm biến rung và gia tốc**: ghi nhận dao động kết cấu khi đoàn tàu chạy qua, dùng để phát hiện thay đổi đặc trưng động học của kết cấu theo thời gian.

Mỗi cảm biến kết nối với một bộ thu thập dữ liệu (data logger) cục bộ, truyền tín hiệu qua mạng không dây hoặc cáp quang dọc tuyến hầm về trung tâm giám sát.

## Từ dữ liệu thô đến cảnh báo sớm

Lượng dữ liệu từ hàng trăm, hàng nghìn điểm cảm biến dọc một tuyến metro là rất lớn, nên giá trị thực sự nằm ở khả năng xử lý và phân tích, không chỉ ở việc thu thập. Hệ thống SHM hiện đại thường bao gồm:

1. **Thiết lập ngưỡng cảnh báo** cho từng loại cảm biến, dựa trên giới hạn thiết kế kết cấu và lịch sử dữ liệu nền (baseline) thu thập trong giai đoạn đầu vận hành.
2. **Phân tích xu hướng theo thời gian** để phân biệt biến động bình thường (theo nhiệt độ, mùa, chu kỳ tàu chạy) với dấu hiệu suy giảm kết cấu thực sự.
3. **Cảnh báo tự động** gửi tới đội kỹ thuật khi một chỉ số vượt ngưỡng hoặc có xu hướng bất thường kéo dài, kèm vị trí chính xác trên tuyến.
4. **Tích hợp với hệ thống bảo trì** để lên lịch kiểm tra trực quan bổ sung tại các điểm có cảnh báo, trước khi quyết định can thiệp sửa chữa.

## Lợi ích đối với vận hành dài hạn

Việc áp dụng SHM giúp đơn vị vận hành metro chuyển từ mô hình bảo trì theo lịch cố định sang bảo trì dựa trên tình trạng thực tế (condition-based maintenance), tập trung nguồn lực vào đúng vị trí cần quan tâm thay vì kiểm tra đồng loạt toàn tuyến. Tại các đô thị phát triển nhanh như Doha, nơi hoạt động xây dựng xung quanh tuyến hầm vẫn tiếp diễn sau khi metro đã đưa vào khai thác, hệ thống cảm biến còn đóng vai trò như một "cảnh báo sớm" khi công trình lân cận gây ảnh hưởng ngoài dự kiến đến kết cấu ngầm, cho phép đơn vị vận hành phối hợp với chủ đầu tư công trình đó để điều chỉnh phương án thi công kịp thời. Về lâu dài, dữ liệu lịch sử tích lũy từ hệ thống SHM còn là cơ sở quan trọng để đánh giá tuổi thọ còn lại của kết cấu và lập kế hoạch gia cường, cải tạo khi tuyến metro tiến gần đến cuối chu kỳ thiết kế ban đầu.
