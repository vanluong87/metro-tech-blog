export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'vi';

export const ui = {
  vi: {
    siteName: 'Metro Thế Giới',
    tagline: 'Chia sẻ công nghệ và kinh nghiệm thi công metro từ các nước trên thế giới',
    nav_home: 'Trang chủ',
    nav_blog: 'Bài viết',
    nav_about: 'Giới thiệu',
    home_title: 'Công nghệ thi công metro từ các nước trên thế giới',
    home_intro:
      'Nơi tổng hợp và chia sẻ kinh nghiệm thực tế về công nghệ, phương pháp thi công tàu điện ngầm (metro) được áp dụng tại nhiều quốc gia — từ khiên đào hầm TBM, NATM, cho tới thi công ga ngầm và đào hở.',
    latest_posts: 'Bài viết mới nhất',
    read_more: 'Đọc tiếp',
    back_to_blog: '← Quay lại danh sách bài viết',
    about_title: 'Giới thiệu',
    footer_note: 'Nội dung chia sẻ mang tính tổng hợp, tham khảo kiến thức kỹ thuật phổ biến.',
  },
  en: {
    siteName: 'World Metro Tech',
    tagline: 'Sharing metro construction technology and experience from around the world',
    nav_home: 'Home',
    nav_blog: 'Articles',
    nav_about: 'About',
    home_title: 'Metro Construction Technology from Around the World',
    home_intro:
      'A collection of real-world experience on metro (subway) construction technologies and methods applied across countries — from TBM shield tunneling and NATM to underground station construction and cut & cover.',
    latest_posts: 'Latest articles',
    read_more: 'Read more',
    back_to_blog: '← Back to articles',
    about_title: 'About',
    footer_note: 'Content is a general summary based on widely known engineering practice.',
  },
} as const;
