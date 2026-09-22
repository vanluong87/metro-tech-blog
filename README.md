# Metro Thế Giới — Trang chia sẻ công nghệ thi công metro

Website tĩnh (Astro) giới thiệu công nghệ và kinh nghiệm thi công tàu điện ngầm (metro) từ các nước trên thế giới. Song ngữ Việt/Anh, tối ưu SEO để có thể tìm thấy qua Google.

## Cấu trúc dự án

```
src/
├── content/blog/vi/*.md   ← bài viết tiếng Việt
├── content/blog/en/*.md   ← bài viết tiếng Anh (nếu có bản dịch, đặt CÙNG TÊN FILE với bản vi để tự động liên kết 2 ngôn ngữ)
├── content.config.ts      ← schema (title, description, date, country, tags...) cho bài viết
├── layouts/BaseLayout.astro  ← khung trang dùng chung: SEO meta, hreflang, header/footer
├── components/PostCard.astro ← thẻ hiển thị 1 bài viết trong danh sách
├── i18n/ui.ts              ← chuỗi giao diện (nút, tiêu đề...) cho vi/en
└── pages/
    ├── vi/  (trang chủ, /vi/blog/, /vi/blog/[slug]/, /vi/about/, /vi/rss.xml)
    └── en/  (tương tự, bản tiếng Anh)
```

## Cách thêm một bài viết mới

1. Tạo file markdown mới trong `src/content/blog/vi/ten-bai-viet.md` (tên file = slug URL, nên viết không dấu, cách nhau bằng `-`).
2. Điền frontmatter ở đầu file:

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn 1-2 câu, hiển thị trên Google và trang danh sách"
lang: "vi"
date: 2026-03-01
country: "Tên quốc gia"
tags: ["tag1", "tag2"]
---

Nội dung bài viết viết bằng Markdown...
```

3. (Tuỳ chọn) Viết thêm bản tiếng Anh tại `src/content/blog/en/ten-bai-viet.md` — **đặt trùng tên file** để hệ thống tự động hiện nút chuyển ngôn ngữ giữa 2 bản.
4. Chạy `npm run dev` để xem trước, hoặc `npm run build` để build.

Bài viết mới sẽ tự động xuất hiện trong danh sách (`/vi/blog/`) và sitemap, không cần sửa code.

## Lệnh

| Lệnh | Chức năng |
| --- | --- |
| `npm install` | Cài dependency |
| `npm run dev` | Chạy dev server tại `http://localhost:4321` |
| `npm run build` | Build ra thư mục `dist/` để deploy |
| `npm run preview` | Xem thử bản build trước khi deploy |

## Trước khi deploy (bắt buộc)

1. Mở `astro.config.mjs`, đổi `site: 'https://example.com'` thành domain thật của bạn (dùng để tạo sitemap.xml và canonical URL đúng — quan trọng cho SEO).
2. Mở `public/robots.txt`, đổi domain trong dòng `Sitemap:` cho khớp.

## Deploy để mọi người tìm thấy qua search

Đây là site tĩnh, deploy miễn phí dễ dàng lên:

- **Vercel** (`vercel.com`): kết nối repo Git, chọn framework "Astro", deploy tự động mỗi lần push.
- **Netlify** (`netlify.com`): tương tự, build command `npm run build`, publish directory `dist`.

Sau khi deploy:

1. Vào **Google Search Console** (`search.google.com/search-console`), thêm domain của bạn, gửi sitemap tại `https://your-domain.com/sitemap-index.xml` để Google index nhanh hơn.
2. Mỗi bài viết mới sau khi deploy sẽ tự động có trong sitemap và được Google thu thập trong vài ngày đến vài tuần.

## SEO đã có sẵn

- Thẻ `<title>`, `<meta description>` cho từng trang.
- `canonical` URL và `hreflang` liên kết giữa bản vi/en của cùng một bài viết.
- Open Graph + Twitter Card meta (hiển thị đẹp khi share Facebook/Zalo/Twitter).
- `sitemap-index.xml` tự động sinh khi build.
- RSS feed tại `/vi/rss.xml` và `/en/rss.xml`.
- HTML ngữ nghĩa, gần như không có JavaScript phía client → tải trang rất nhanh, tốt cho xếp hạng Google.
