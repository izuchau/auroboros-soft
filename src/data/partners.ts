export type PartnerKind = 'exchange' | 'broker' | 'platform';

export interface Partner {
  id: string;
  name: string;
  kind: PartnerKind;
}

/** Биржи, брокеры и платформы — для бегущей ленты в секции «Рынки». */
export const partners: Partner[] = [
  { id: 'moex', name: 'MOEX', kind: 'exchange' },
  { id: 'quik', name: 'QUIK', kind: 'platform' },
  { id: 'tbank', name: 'T-Bank', kind: 'broker' },
  { id: 'finam', name: 'Finam', kind: 'broker' },
  { id: 'bks', name: 'BCS', kind: 'broker' },
  { id: 'sber', name: 'Sber', kind: 'broker' },
  { id: 'vtb', name: 'VTB', kind: 'broker' },
  { id: 'bybit', name: 'Bybit', kind: 'exchange' },
  { id: 'binance', name: 'Binance', kind: 'exchange' },
  { id: 'okx', name: 'OKX', kind: 'exchange' },
  { id: 'bitget', name: 'Bitget', kind: 'exchange' },
  { id: 'kucoin', name: 'KuCoin', kind: 'exchange' },
  { id: 'huobi', name: 'Huobi', kind: 'exchange' },
  { id: 'metatrader', name: 'MetaTrader', kind: 'platform' },
  { id: 'tiger', name: 'Tiger Brokers', kind: 'broker' },
];
