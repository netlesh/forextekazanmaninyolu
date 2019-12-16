module.exports = {
  title: 'Forex\'te Kazancınızı Arttırın',
  description: 'Artık Forex\'te Kaybetmek YOK',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'ProFX',
        items: [
          { text: 'Kurulumu', link: '/ProFX/ProFXKurulumu' },
          { text: 'Ayarları', link: '/ProFX/ProFXAyarlar' },
          { text: 'Genel Hatalar', link: '/ProFX/GenelHatalar' },
          { text: 'Strateji Önerisi', link: '/StratejiOnerisi' },
          { text: 'Başarı Tablosu', link: '/ProFX/ProFXBasarisi' }
        ]
      },
      { text: 'SSS ', link: '/sss' },
      { text: 'EkolFX', link: '/EkolFX' },
    ],
    sidebar: [
      ['http://ahmetmusakosali.forex21pro3.c2strack.com', 'ProFX Satın Al'],
      ['https://www.ekolfx5.com/hesap-ac?ref=1959&utm_source=refout&utm_term=1959', 'EkolFX\'de Hesap Aç'],
      ['http://www.myfxbook.com/members/kazanmaninyolu/kazanmaninyolu/3941362', 'Başarı Raporu']
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
