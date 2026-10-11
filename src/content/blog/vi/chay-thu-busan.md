---
title: "Chạy thử tích hợp toàn tuyến trước khi khai thác metro: Kinh nghiệm từ Busan"
description: "Trước khi một tuyến metro được phép chở khách, toàn bộ hệ thống — đoàn tàu, tín hiệu, điện, PCCC, cửa chắn ke ga — phải được chạy thử tích hợp trong hàng tháng trời. Bài viết giới thiệu các giai đoạn chạy thử và cách mạng lưới metro tại Busan tổ chức công tác này."
lang: "vi"
date: 2026-10-11
country: "Hàn Quốc"
tags: ["chạy thử", "commissioning", "tích hợp hệ thống", "vận hành thử", "Busan"]
draft: false
heroImage: "/images/blog/chay-thu-busan.svg"
heroImageAlt: "Sơ đồ các giai đoạn chạy thử tích hợp toàn tuyến metro, từ thử nghiệm tĩnh đến vận hành thương mại"
---

## Vì sao cần chạy thử tích hợp toàn tuyến?

Một tuyến metro không phải là tổng của các hệ thống riêng lẻ hoạt động độc lập, mà là một hệ thống-của-các-hệ-thống (system of systems) — đoàn tàu, tín hiệu, cấp điện kéo, thông gió, PCCC, cửa chắn ke ga, hệ thống soát vé — phải phối hợp chính xác với nhau trong mọi tình huống, kể cả tình huống bất thường. Mỗi hệ thống con có thể được nhà thầu riêng thiết kế, sản xuất và thử nghiệm đạt yêu cầu kỹ thuật của chính nó, nhưng điều đó không đảm bảo rằng khi ghép lại, toàn bộ hệ thống sẽ vận hành an toàn và ổn định. Chạy thử tích hợp (integrated testing & commissioning) là giai đoạn bắt buộc, thường kéo dài nhiều tháng, nhằm xác minh điều đó trước khi cơ quan quản lý cấp phép khai thác thương mại.

## Các giai đoạn chạy thử điển hình

Công tác chạy thử một tuyến metro thường được tổ chức theo trình tự tăng dần về mức độ phức tạp và rủi ro:

1. **Thử nghiệm tĩnh (static testing)**: kiểm tra từng thiết bị, hệ thống con riêng lẻ tại chỗ sau khi lắp đặt — cách điện, tiếp địa, chức năng cơ bản của tủ điện, cảm biến, thiết bị tín hiệu — chưa có tàu chạy.
2. **Thử nghiệm động (dynamic testing)**: cho đoàn tàu chạy trên tuyến với tốc độ và tần suất tăng dần, ban đầu không chở khách, để kiểm tra tương tác tàu-đường ray-tín hiệu-cấp điện trong điều kiện thực tế vận hành.
3. **Chạy thử tích hợp (integrated testing)**: thử nghiệm đồng thời nhiều hệ thống con trong các tình huống phối hợp — ví dụ tín hiệu phát lệnh hãm khẩn cấp đồng thời với cắt điện kéo và mở cửa thoát hiểm khi có báo cháy giả định — để xác minh các hệ thống "nói chuyện" đúng với nhau.
4. **Chạy thử mô phỏng tải trọng & tình huống bất thường**: mô phỏng các kịch bản như mất điện một phần lưới, một đoàn tàu hỏng giữa tuyến, lỗi tín hiệu cục bộ, để kiểm tra quy trình ứng phó và khả năng phục hồi vận hành.
5. **Vận hành thử (trial running)**: chạy toàn bộ tuyến theo đúng biểu đồ chạy tàu dự kiến khi khai thác thương mại, liên tục trong một khoảng thời gian đủ dài (thường vài tuần), để đo độ tin cậy thực tế (ví dụ số sự cố trên mỗi nghìn km chạy tàu) trước khi chở khách.
6. **Vận hành thử có hành khách hạn chế / soft opening**: ở một số dự án, trước khi khai thác chính thức, tuyến được mở cho một lượng khách hạn chế hoặc chạy không thu phí trong thời gian ngắn để kiểm tra hành vi thực tế của hành khách tại ga và trên tàu.

## Ai tham gia và kiểm tra cái gì?

Chạy thử tích hợp đòi hỏi sự phối hợp giữa nhiều bên: nhà thầu hệ thống (tín hiệu, đoàn tàu, điện), đơn vị vận hành tương lai, cơ quan quản lý an toàn độc lập (independent safety assessor), và đôi khi cả đơn vị bảo hiểm. Cơ quan quản lý an toàn thường yêu cầu một bộ hồ sơ chứng minh an toàn hệ thống (safety case) được xây dựng dần qua các giai đoạn thiết kế, lắp đặt và chạy thử, trong đó kết quả chạy thử tích hợp là một trong những bằng chứng quan trọng nhất. Chỉ khi hồ sơ này được chấp thuận, tuyến mới được cấp phép khai thác thương mại chở khách.

## Cách tiếp cận tại Busan

Mạng lưới đường sắt đô thị tại Busan, Hàn Quốc gồm nhiều tuyến metro truyền thống có người lái cùng với tuyến đường sắt nhẹ tự động không người lái, nên công tác chạy thử tại đây phải xử lý đồng thời nhiều cấp độ tự động hóa khác nhau trong cùng một mạng lưới kết nối. Với các tuyến tự động hóa cao, khối lượng chạy thử tích hợp thường lớn hơn đáng kể so với tuyến truyền thống, vì phải xác minh rằng hệ thống có thể tự xử lý đúng các tình huống bất thường mà trước đây dựa vào quyết định của lái tàu. Kinh nghiệm chung từ các mạng lưới metro Hàn Quốc là bố trí thời gian chạy thử tích hợp đủ dài ngay trong lịch trình tổng thể của dự án từ giai đoạn lập kế hoạch, thay vì coi đây là bước "kiểm tra cuối" có thể rút ngắn khi dự án bị trễ tiến độ ở các giai đoạn thi công trước đó.

## Bài học kinh nghiệm

Chạy thử tích hợp toàn tuyến thường bị đánh giá thấp về thời gian cần thiết trong kế hoạch tổng thể của dự án, vì nó diễn ra sau khi phần lớn công trình xây dựng đã hoàn thành — thời điểm áp lực đưa tuyến vào khai thác đang lên cao nhất. Tuy nhiên, đây chính là giai đoạn duy nhất phát hiện được các lỗi tương tác giữa hệ thống con mà không nhà thầu riêng lẻ nào có thể tự kiểm tra. Kinh nghiệm quốc tế cho thấy việc rút ngắn giai đoạn này để kịp ngày khai trương mang lại rủi ro vận hành lớn hơn nhiều so với lợi ích của việc khai thác sớm vài tuần hay vài tháng.
