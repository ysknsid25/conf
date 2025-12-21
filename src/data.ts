export type ConferenceType = 'PHP' | 'Kotlin' | 'JavaScript' | 'TypeScript' | 'Google' | 'SoftSkills' | 'Other';

export interface Conference {
  date: string;
  venue: string;
  coords?: [number, number]; // [lat, lng] - Optional for online events
  name: string;
  url: string;
  theme: string;
  slidesUrl: string;
  proposalUrl?: string; // Add Proposal URL
  isBest: boolean;
  type: ConferenceType;
}

export const conferences: Conference[] = [
  {
    date: '2024-10-27',
    venue: '有明セントラルタワーホール',
    coords: [35.6322, 139.7946],
    name: 'PHP Conference Japan 2024',
    url: 'https://phpcon.php.gr.jp/2024/',
    theme: '最新のPHP事情と未来',
    slidesUrl: 'https://speakerdeck.com/dummy/phpcon2024',
    proposalUrl: 'https://fortee.jp/phpcon-2024/speaker/dummy-proposal',
    isBest: true,
    type: 'PHP',
  },
  {
    date: '2024-06-22',
    venue: '福岡ファッションビル',
    coords: [33.5932, 130.4183],
    name: 'PHP Conference Fukuoka 2024',
    url: 'https://phpcon.fukuoka.jp/2024/',
    theme: 'Webアプリケーションのセキュリティ',
    slidesUrl: 'https://speakerdeck.com/dummy/phpconfukuoka2024',
    isBest: false,
    type: 'PHP',
  },
  {
    date: '2025-02-15',
    venue: '浅草橋ヒューリックホール',
    coords: [35.6974, 139.7860],
    name: 'JSConf JP 2025',
    url: 'https://jsconf.jp/2025/',
    theme: 'Modern Frontend Architecture',
    slidesUrl: 'https://speakerdeck.com/dummy/jsconf2025',
    proposalUrl: 'https://event.jsconf.jp/2025/proposals/hono-islands-architecture',
    isBest: false,
    type: 'JavaScript',
  },
  {
    date: '2024-12-01',
    venue: '渋谷ヒカリエ',
    coords: [35.6590, 139.7035],
    name: 'Tech Conference 2024',
    url: 'https://techconf.example.com/',
    theme: 'エンジニアのキャリア論',
    slidesUrl: 'https://speakerdeck.com/dummy/techconf2024',
    isBest: false,
    type: 'SoftSkills',
  },
  // 同じ場所のテスト用データ
  {
    date: '2025-02-16',
    venue: '浅草橋ヒューリックホール',
    coords: [35.6974, 139.7860],
    name: 'TSKaigi 2025',
    url: 'https://tskaigi.org/2025/',
    theme: 'TypeScript Deep Dive',
    slidesUrl: 'https://speakerdeck.com/dummy/tskaigi2025',
    isBest: true,
    type: 'TypeScript',
  },
  // オンライン開催のテストデータ
  {
    date: '2025-05-20',
    venue: 'Online',
    // coords is omitted
    name: 'Global Tech Online 2025',
    url: 'https://globaltech.example.com/',
    theme: 'Remote Work Best Practices',
    slidesUrl: 'https://speakerdeck.com/dummy/globaltech2025',
    isBest: false,
    type: 'Other',
  }
];
