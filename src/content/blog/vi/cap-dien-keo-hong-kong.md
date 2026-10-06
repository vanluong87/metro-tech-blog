---
title: "Hệ thống cấp điện kéo & đường dây tiếp xúc: Kinh nghiệm từ MTR Hồng Kông"
description: "Ray thứ ba (third rail) và dây tiếp xúc trên cao (OCS) là hai giải pháp cấp điện kéo phổ biến cho metro. Bài viết giới thiệu nguyên lý vận hành, yêu cầu an toàn và cách MTR Hồng Kông phối hợp cả hai công nghệ trên cùng một mạng lưới."
lang: "vi"
date: 2026-10-06
country: "Hồng Kông"
tags: ["cấp điện kéo", "ray thứ ba", "đường dây tiếp xúc", "OCS", "MTR"]
draft: false
heroImage: "/images/blog/cap-dien-keo-hong-kong.svg"
heroImageAlt: "Sơ đồ so sánh hệ thống ray thứ ba và đường dây tiếp xúc trên cao cấp điện cho đoàn tàu metro"
---

## Vì sao cần hệ thống cấp điện kéo riêng cho metro

Đoàn tàu metro điện cần một nguồn điện liên tục, ổn định dọc suốt chiều dài tuyến để vận hành động cơ kéo. Khác với đường sắt quốc gia vốn thường dùng điện áp xoay chiều cao thế, phần lớn các tuyến metro đô thị sử dụng điện một chiều (DC) điện áp thấp hơn — phổ biến ở mức 600-750V DC — do khoảng cách giữa các ga ngắn, đoàn tàu tăng tốc và hãm liên tục, và yêu cầu không gian lắp đặt gọn trong hầm hoặc dọc tuyến trên cao. Có hai giải pháp chính để truyền điện này tới đoàn tàu: ray thứ ba (third rail) đặt dọc theo đường ray, và dây tiếp xúc trên cao (overhead catenary system - OCS) kết hợp với cần lấy điện (pantograph) trên nóc tàu.

## Hệ thống ray thứ ba (third rail)

Ray thứ ba là một thanh dẫn điện đặt song song với hai ray chạy tàu, thường ở bên cạnh hoặc giữa khổ đường. Đoàn tàu lấy điện qua một bộ guốc trượt (collector shoe) tiếp xúc trực tiếp với ray thứ ba, còn dòng điện hồi lưu quay về qua chính ray chạy tàu. Ưu điểm của giải pháp này là không cần kết cấu cột đỡ và dây trên cao, giúp giảm chiều cao yêu cầu của hầm — một yếu tố quan trọng giúp tiết kiệm chi phí đào hầm trên các tuyến đi ngầm. Nhược điểm là ray thứ ba mang điện áp nguy hiểm ở độ cao gần mặt ray, nên bắt buộc phải có tấm chắn bảo vệ phía trên hoặc bên cạnh, cùng khoảng hở cách ly tại các điểm giao cắt, ghi đường ray (turnout) và lối đi bộ dọc hầm để đảm bảo an toàn cho nhân viên bảo trì và hành khách trong tình huống khẩn cấp.

## Hệ thống dây tiếp xúc trên cao (OCS)

OCS truyền điện qua một hệ dây dẫn căng phía trên đoàn tàu, được đoàn tàu lấy điện bằng cần pantograph gắn trên nóc. Giải pháp này phù hợp với các tuyến đi trên mặt đất hoặc trên cao, cho phép dùng điện áp cao hơn (thường là điện xoay chiều) để giảm tổn hao truyền tải trên khoảng cách dài, đồng thời tránh được rủi ro tiếp xúc trực tiếp ở độ cao thấp. Đổi lại, hệ thống đòi hỏi không gian tĩnh không lớn hơn cho dây và cột đỡ, nên ít khi được dùng cho các đoạn hầm có tiết diện hạn chế.

## Cách tiếp cận của MTR Hồng Kông

Mạng lưới MTR tại Hồng Kông là một ví dụ điển hình về việc phối hợp cả hai công nghệ trên cùng một hệ thống tùy theo đặc điểm từng tuyến. Phần lớn các tuyến metro đô thị truyền thống của MTR sử dụng ray thứ ba cấp điện một chiều, phù hợp với mạng lưới đi ngầm dày đặc dưới khu trung tâm. Trong khi đó, các tuyến có nguồn gốc là đường sắt liên tỉnh/ngoại ô được nâng cấp và sáp nhập vào hệ thống MTR lại sử dụng dây tiếp xúc trên cao với điện áp xoay chiều cao hơn, phù hợp với đặc thù chạy tàu tốc độ cao hơn trên khoảng cách dài giữa các ga ở khu vực ít đô thị hóa. Việc vận hành song song hai công nghệ trong cùng một mạng lưới đòi hỏi quy hoạch rõ ràng về điểm chuyển đổi, đào tạo nhân sự vận hành và bảo trì theo từng loại hình, cũng như thiết kế đoàn tàu tương thích với hệ thống cấp điện của tuyến mà chúng vận hành.

## Trạm biến áp kéo và tính dự phòng

Dù chọn công nghệ nào, điện năng đều được cấp từ các trạm biến áp kéo (traction substation) bố trí dọc tuyến, nhận điện từ lưới điện quốc gia ở điện áp cao rồi hạ áp, chỉnh lưu (nếu dùng DC) trước khi đưa vào ray thứ ba hoặc dây tiếp xúc. Để đảm bảo tàu không bị gián đoạn khi một trạm gặp sự cố, hệ thống thường được thiết kế theo nguyên tắc dự phòng N+1: các trạm liền kề có khả năng san sẻ tải cho đoạn tuyến của trạm gặp sự cố trong thời gian ngắn, đồng thời dòng điện hồi lưu qua ray chạy tàu cũng được giám sát và cách điện với kết cấu xung quanh để hạn chế hiện tượng ăn mòn điện phân (stray current corrosion) ảnh hưởng đến cốt thép công trình ngầm lân cận.

## Bài học kinh nghiệm

Lựa chọn giữa ray thứ ba và OCS không chỉ là vấn đề kỹ thuật điện đơn thuần, mà gắn liền với đặc điểm tuyến (ngầm hay trên cao), vận tốc khai thác mong muốn và lịch sử hình thành của từng đoạn mạng lưới. Kinh nghiệm của MTR cho thấy một hệ thống metro trưởng thành hoàn toàn có thể vận hành đồng thời nhiều công nghệ cấp điện khác nhau, miễn là có quy hoạch kỹ thuật nhất quán, đào tạo nhân sự chuyên biệt và các biện pháp an toàn được thiết kế phù hợp cho từng loại hình cấp điện.
