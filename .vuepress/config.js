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
      { text: 'İletişim', link: '/Iletisim' },
    ],
    sidebar: [
      ['http://ahmetmusakosali.forex21pro3.c2strack.com', 'ProFX Satın Al'],
      ['https://www.ekolfx5.com/hesap-ac?ref=1959&utm_source=refout&utm_term=1959', 'EkolFX\'de Hesap Aç']
    ]
  },
  plugins:[
    [
        'contact-us', // Or 'vuepress-plugin-contact-us'
        {
            /**
             * Mandatory: the email address which the contact data will be sent
             */
            email: 'iletisim@ahmetmusakosali.com.tr',
           
        },
        '@vuepress/google-analytics',
        {
          'ga': 'UA-153662218-2' // UA-00000000-0
        }
    ]
]
}