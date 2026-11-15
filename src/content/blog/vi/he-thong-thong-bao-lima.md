---
title: "Hệ thống thông báo hành khách & thông tin hành trình (PA/PIS) trong ga metro: Kinh nghiệm Lima, Peru"
description: "Hệ thống PA/PIS kết hợp loa thông báo công cộng với màn hình hiển thị thông tin hành trình theo thời gian thực, giúp hành khách tại các ga của Lima Metro nắm bắt lịch trình, sự cố và hướng dẫn an toàn một cách nhất quán."
lang: "vi"
date: 2026-11-15
country: "Peru"
tags: ["PA/PIS", "thông tin hành khách", "hệ thống M&E", "vận hành ga metro"]
draft: false
heroImage: "/images/blog/he-thong-thong-bao-lima.svg"
heroImageAlt: "Sơ đồ hệ thống PA/PIS trong ga metro: trung tâm điều khiển, loa công cộng và màn hình thông tin hành trình"
---

## PA/PIS là gì và vì sao ga metro cần đến nó

Trong một nhà ga metro đông người, thông tin kịp thời là yếu tố quyết định giữa một hành trình suôn sẻ và một tình huống hỗn loạn. Hệ thống PA (Public Address — loa thông báo công cộng) và PIS (Passenger Information System — hệ thống thông tin hành khách) là hai thành phần luôn đi cùng nhau trong thiết kế M&E (cơ điện) của ga ngầm và ga trên cao. PA phát âm thanh — thông báo định kỳ, cảnh báo khẩn cấp, hướng dẫn sơ tán — còn PIS hiển thị thông tin bằng hình ảnh trên màn hình LED/LCD tại sảnh chờ, ke ga và trong đoàn tàu: thời gian tàu đến, ga tiếp theo, tình trạng vận hành tuyến. Tại Lima Metro (Línea 1 và các tuyến đang mở rộng), hai hệ thống này được tích hợp chặt với trung tâm điều khiển vận hành (OCC) để đảm bảo thông tin phát ra tại mọi ga là đồng nhất và cập nhật theo thời gian thực.

## Kiến trúc hệ thống: từ trung tâm điều khiển đến từng ga

- **Trung tâm điều khiển vận hành (OCC)**: nơi điều phối viên giám sát toàn tuyến, phát thông báo thủ công khi có sự cố, hoặc kích hoạt các bản tin tự động đã lập trình trước (ví dụ thông báo tàu sắp đến dựa trên dữ liệu từ hệ thống tín hiệu).
- **Mạng truyền dẫn trục chính**: cáp quang hoặc đường truyền dữ liệu chuyên dụng nối OCC với bộ điều khiển PA/PIS tại từng ga, đảm bảo độ trễ thấp và khả năng hoạt động độc lập (fail-safe) nếu mất liên kết tạm thời.
- **Thiết bị đầu cuối tại ga**: loa phân vùng theo khu vực (sảnh, ke ga, hành lang) để thông báo có thể nhắm đúng đối tượng, cùng màn hình PIS treo tại lối vào, ke ga và phía trên cửa toa tàu.
- **Tích hợp với hệ thống tín hiệu & giám sát**: dữ liệu vị trí tàu theo thời gian thực được đưa vào PIS để tính toán và hiển thị thời gian chờ chính xác, thay vì lịch trình cố định.

## Phân loại nội dung thông báo theo mức độ ưu tiên

Một nguyên tắc thiết kế quan trọng là phân cấp ưu tiên giữa các loại thông báo. Thông báo khẩn cấp (cháy, sự cố an toàn, yêu cầu sơ tán) luôn được gán mức ưu tiên cao nhất, có khả năng ngắt ngang bất kỳ bản tin thường lệ đang phát và tự động phát trên toàn bộ loa của ga hoặc toàn tuyến. Thông báo vận hành thường lệ (tàu đến, đổi hướng, chậm trễ) có mức ưu tiên trung bình, thường phát tự động theo lịch trình tín hiệu. Thông báo tiện ích (quảng cáo, thông tin dịch vụ) có mức ưu tiên thấp nhất và bị tạm ngưng ngay khi có bản tin cấp cao hơn. Cơ chế phân cấp này, cùng với khả năng điều phối viên ghi đè bằng tay bất kỳ lúc nào, là yêu cầu bắt buộc trong các tiêu chuẩn an toàn vận hành đường sắt đô thị.

## Song ngữ và khả năng tiếp cận thông tin

Tại Lima, phần lớn thông báo PA được phát bằng tiếng Tây Ban Nha, với một số tuyến bổ sung bản tin tiếng Anh ngắn gọn ở các điểm trung chuyển có lượng khách quốc tế cao. Màn hình PIS hỗ trợ hiển thị song ngữ hoặc dùng icon/pictogram chuẩn hóa để giảm phụ thuộc vào ngôn ngữ, đặc biệt hữu ích cho hành khách khiếm thị một phần hoặc không thông thạo ngôn ngữ địa phương. Thiết kế tốt còn tính đến khả năng tiếp cận cho người khiếm thính — ví dụ đảm bảo mọi thông báo loa quan trọng đều có bản tương đương hiển thị trên màn hình, không chỉ phát âm thanh đơn lẻ.

## Vận hành, kiểm thử và bảo trì hệ thống

PA/PIS được kiểm thử tích hợp cùng hệ thống tín hiệu và điều khiển tàu trong giai đoạn chạy thử trước khi tuyến đưa vào vận hành thương mại, nhằm xác nhận độ trễ hiển thị, độ rõ âm thanh tại các khu vực ồn (gần đường ray, lối thông gió) đạt tiêu chuẩn. Trong giai đoạn vận hành, đội kỹ thuật thực hiện kiểm tra định kỳ loa, màn hình và đường truyền; dữ liệu lỗi thiết bị (màn hình mất kết nối, loa hỏng) được báo về trung tâm giám sát để xử lý trước khi ảnh hưởng đến chất lượng thông tin hành khách nhận được. Với các hệ thống metro đang phát triển, đầu tư đúng mức vào PA/PIS từ giai đoạn thiết kế — bao gồm phân cấp ưu tiên rõ ràng, khả năng song ngữ/tiếp cận và tích hợp dữ liệu thời gian thực — là yếu tố góp phần trực tiếp vào trải nghiệm và sự an toàn của hành khách mỗi ngày.
