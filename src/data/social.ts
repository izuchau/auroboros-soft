import type { Locale } from '../types';

export type SocialNetworkId = 'telegram' | 'max' | 'youtube' | 'tiktok' | 'instagram' | 'vkvideo';

export interface SocialLink {
  id: SocialNetworkId;
  /** Channel or profile URL — replace with your links */
  href: string;
  label: Record<Locale, string>;
  /** Пока канала нет — иконка без ссылки */
  comingSoon?: boolean;
}

/** Ссылки на соцсети — правьте href под ваши каналы */
export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    href: 'https://t.me/Auroboros_soft',
    label: { ru: 'Telegram', en: 'Telegram' },
  },
  {
    id: 'max',
    href: 'https://max.ru/join/JHMwlJIOoyz2qfIjovufLuBDHP2-PsYMn6RxQwughPs',
    label: { ru: 'MAX', en: 'MAX' },
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/@Auroboros_soft',
    label: { ru: 'YouTube', en: 'YouTube' },
  },
  {
    id: 'tiktok',
    href: 'https://www.tiktok.com/@auroboros.soft',
    label: { ru: 'TikTok', en: 'TikTok' },
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/auroboros.soft',
    label: { ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'vkvideo',
    href: 'https://vkvideo.ru/@auroboros_soft',
    label: { ru: 'VK Видео', en: 'VK Video' },
  },
];
