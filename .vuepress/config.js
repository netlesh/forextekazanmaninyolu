module.exports = {
  title: 'Forex\'te Kazancınızı Arttırın',
  description: 'Artık Forex\'te Kaybetmek YOK',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'ProFX',
        items: [
          { text: 'Kurulumu', link: '/ProFX/ProFX-Kurulumu' },
          { text: 'Ayarları', link: '/ProFX/ProFX-Ayarlar' },
          { text: 'Genel Hatalar', link: '/ProFX/GenelHatalar' },
          { text: 'Strateji Önerisi', link: '/StratejiOnerisi' },
          { text: 'Başarı Tablosu', link: '/ProFX/ProFX-Basarisi' },
        ]
      },
      { text: 'MyFxBook',
        items: [
          { text: 'Nasıl Kullanılır?', link: '/MyFxBook/MyFxBook-nedir' },
          { text: 'Kurulumu', link: '/MyFxBook/MyFxBook-kurulumu' },
          { text: 'FX Durumunu Paylaş', link: '/MyFxBook/MyFxBook-Forex-hesap-raporu-yayinlama' },          
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
          'ga': 'UA-153662218-2'
        }
    ],
     '@vuepress/back-to-top'
]
}
