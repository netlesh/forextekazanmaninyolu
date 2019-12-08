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
          { text: 'Genel Hatalar', link: '/ProFX/GenelHatalar' },
          { text: 'Başarı Tablosu', link: 'https://datastudio.google.com/embed/reporting/310123f3-ad6f-4f79-b433-0a83d566d052/page/yIW8' },
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
  },
  plugins:[
    [

        '@vuepress/google-analytics',
        {
          'ga': 'UA-153662218-2' // UA-00000000-0
        }
    ],
    '@vuepress/back-to-top'
]
}