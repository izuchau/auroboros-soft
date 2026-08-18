import type { Locale } from '../types';

export interface DashboardPreviewImage {
  src: string;
  caption: Record<Locale, string>;
  width?: number;
  height?: number;
}

export interface DashboardPreviewGroup {
  productId: 'moex-pro' | 'crypto-pro';
  title: Record<Locale, string>;
  images: DashboardPreviewImage[];
}

export const dashboardPreviews: DashboardPreviewGroup[] = [
  {
    productId: 'moex-pro',
    title: { ru: 'MOEX pro', en: 'MOEX pro' },
    images: [
      {
        src: '/images/products/moex-dashboard-overview.png',
        caption: { ru: 'Обзор: P&L и статистика', en: 'Overview: P&L and stats' },
      },
      {
        src: '/images/products/moex-dashboard-positions.png',
        caption: { ru: 'Позиции и сделки', en: 'Positions and trades' },
      },
    ],
  },
  {
    productId: 'crypto-pro',
    title: { ru: 'CRYPTO pro', en: 'CRYPTO pro' },
    images: [
      {
        src: '/images/products/crypto-dashboard-overview.png',
        caption: { ru: 'Обзор', en: 'Overview' },
        width: 1024,
        height: 526,
      },
      {
        src: '/images/products/crypto-dashboard-instruments.png',
        caption: { ru: 'Инструменты', en: 'Instruments' },
        width: 1024,
        height: 523,
      },
    ],
  },
];
