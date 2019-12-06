module.exports = {
  title: 'FOREX\'te KAZANCINIZI ARTTIRIN',
  description: 'ARTIK FOREX\'TE KAYBETMEK YOK',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'ProFX',
        items: [
          { text: 'Kurulumu', link: '/ProFX/ProFXKurulumu' },
          { text: 'Strateji Önerisi', link: '/StratejiOnerisi' },
          { text: 'Ayarları', link: '/ProFX/ProFXAyarlar' }
        ]
      },
      { text: 'SSS ', link: '/sss' },
      { text: 'EkolFX', link: '/EkolFX' },
    ],
    sidebar: [
      ['http://ahmetmusakosali.forex21pro3.c2strack.com', 'ProFX Satın Al'],
      ['https://www.ekolfx5.com/hesap-ac?ref=1959&utm_source=refout&utm_term=1959', 'EkolFX\'de Hesap Aç']
    ]
  }
}