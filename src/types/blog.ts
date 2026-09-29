export type PageTab = 'home' | 'articles' | 'about' | 'contact';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  location: string;
  email?: string;
}

export interface AuthorSession {
  isAuthenticated: boolean;
  name: string;
  email: string;
  role: string;
  unlockedAt?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  pullQuote?: string;
  publishedAt: string;
  dateIso: string;
  readTime: string;
  featured?: boolean;
  isNew?: boolean;
  coverImage: string;
  coverCaption?: string;
  author: Author;
  tags?: string[];
  likes: number;
  views: number;
  bookmarksCount?: number;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  topic: 'Editorial Inquiry' | 'Commission & Project' | 'Syndication & Rights' | 'Reader Letter';
  message: string;
  submittedAt: string;
}

