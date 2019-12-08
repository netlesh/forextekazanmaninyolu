---
prev: ./GenelHatalar
next: ./ProFXKurulumu
---

## PROFX NASIL KURULUR

 Kredi Kart ile satın alımda verdiğiniz mail adresine güncel sürüm ve kurulum dökümanları gönderilecektir. Kuruluma başlayıp süreci hızlandırma adına Aşağıdaki linkte 6.3 sürümünü indirip kuruluma başlayabilirsiniz.
 
 [ProFX 6.3 Setup Dosyası](https://drive.google.com/drive/folders/19EwQd8M_ea2idzSzTv4t-nm7IeneutgN?usp=sharing)
 Not: Mail ile Güncel sürüm geldiğinde dosyaları güncel sürüm ile değişimini unutmayınız.

**MT Data Klasörünün Açılması**
ProFX'in çalışabilmesi için Meta Trader'in (MT) çalıştığı alana kopyalanması lazım. Bunun için öncelikle Meta Trader 4 Uygulaması üzerinde sol üst köşedeki File / Dosya tabına tıklayın. Açılan menüden "Open Data Folder" tıklayarak MT'nin çalıştığı klasörü açınız.

![Meta Trader Open Data Folder](../img/open-data-folder.png "Meta Trader Open Data Folder")

**2. Dosyaların MT Eklenmesi**
Setup dosyası içinden çıkan tüm dosyaları açtığınız Meta Trader Data klasörü içindeki aynı klasörün içine kopyalayınız.

**3. Lisanslama Süreci**
ProFX Meta Trader Grafik ekranı üzerinde çalışan ücretli ve özel indicatörleri olan bir Grafik template. Satın alınan bu template'in dağıtımını engellemek için Grafik açıldında internet üzerinden lisans kontrolü yapmaktadır. 

Lisanslama için gereken bilgileri almak için Meta Trader uygulamasının sol üst taraftaki Yıldızlı Klasöre basın. Sonra açılan menüden Scripts tabı altındaki "Account Utility Tool" u çift tıklayıp açılan ekrandaki bilgileri support@forex21.com adresine mail atınız.

![Forex21 AUT](../img/Forex21-AUT.png "Forex21 AUT")

**4. MT DLL Ayarları**
Meta Trader 4 Uygulaması üzerinde sol üst köşedeki Tools (Araçlar) tabı altındaki Options (Seçenekler) sekmesini tıklayın
![MT Options](https://lh3.googleusercontent.com/dNHLgeXhSEgkKP6ouzAp51D_y-1UQrsUL7mCeqnivL44COOxl5PEYnrcOvoUzbYEQeqyyTvPQLg "MT Options")

**ProFX Grafik Penceresinin Sadeleştirilmesi**

İlk Adım ProFX ile gragiklerde karışıklığa neden olmamak için Charts (Grafikler) menüsü içindeki tüm işaretleri kaldırın.

![MT Options Charts - Grafik Özellikleri](https://lh3.googleusercontent.com/MX6YZciTRpHBynNpISYO2ccuvJkO8OV7oKjEeHED2s3_CyUVaNXueq9DRwI4jzwCC_I4JH65e6w "MT Options Charts - Grafik Özellikleri")

**ProFX Lisans Kontrolü için İzin Vermek**

Exper Advisons (Uzman Danışmanlar) menüsüne giriniz. Aşağıdaki gibi Allow (izin ver) yazanları tıklayın. Disable (Devre dışı) yazanlardan işareti kaldırın.

![MT Exper Advisons Ayarları](https://lh3.googleusercontent.com/OiCb3OJyVyAiMbJbEDP1X49bLTc8pSBlSUUaR20OAHfn1ZKOo7suyBaYGJZV7VQCuegfo8Wu1q4 "MT Exper Advisons Ayarları")

ProFX'in açılırken Lisans doğrulaması yapabilmesi için Web Request yazan kısıma aşağıdaki adresleri ekleyin.
https://forex21.com
https://www.forex21.com
https://secure.forex21.com

**Cep Telefondan Bildirim Almak** 
Eğer Meta Trader üzerinden bildirim almıyorsanız. öncelikle cep telefonunuzdaki Meta Trader 4 uygulamasını acınız Sohbet tabına gelip MQID'yi tıklayın.

![MT Sohbet ID - MQID](https://lh3.googleusercontent.com/der0Flk4OPR9r7r9XT4TKRNJM76__2njk41yTZld19o_5kgphcTDnLgIWnYzOw6Mviv-DCB1Cns "MT Sohbet ID - MQID")


Bildirimleri bilgisayarınız açık ve internette iken cep telefonunuzdan alabilmeniz için Meta Trader Tools (Araçlar) menüsü içindeki Options (Seçenekler) ekranı içindeki Notifications (Bildirimler) altındaki tüm alanları işaretleyin. ID kısmına cep telefonuzdaki ID'yi yazıp test butonuna basın. Cep telefonunuza mesaj geldi ise işlem başarılıdır.

![MT Bildirim Ayarlarının Açılması](https://lh3.googleusercontent.com/wX-amIzm-R9J3NZrB8cfWWTT4Gd5HZNfFHTjA39UrR5SbECuEsP_Q-VmnqotbSmZoYVbxafJqgk "MT Bildirim Ayarlarının Açılması")

**ProFX Sinyal Bildirimlerini Almak**
Tools (Seçenekler) altındaki Events (Olaylar) tabına gelip Enable (Etkinleştir) kutucuğunu işaretleyip OK butonuna basarak ekranın kapanmasını sağlayın.

![MT Bildirimlerin Açılması](https://lh3.googleusercontent.com/pF-2cInknIhI9okzC9hnhYS_JbjyjFKH4J57XauxHgS_rDTnajGiXY1-ofYVBLjy5XwpgespfnE "MT Bildirimlerin Açılması")

**AutoTrade'in Açılması**
Grafik ekran üzerinden Sell (Satım) - Buy (Alım) butonlarına bastığınızda işlem yapabilmesi için Meta Trader uygulamasının üst tarafında yer alan AutoTrader (Otomatik Alım Satım) butonun yeşil yanması gerekmektedir. Eğer kırmızı ise butona basıp aktif ediniz.

![MT Otomatik Alım Satım Açılması](https://lh3.googleusercontent.com/hobP17B9Fi1DLnfoL9w1bHKrkTSBaq-A4t6KzxoV_vRebET2brQIYNFvPZnufrwcvvOqPctfUa8 "MT Otomatik Alım Satım Açılması")

**Grafik Ekranına ProFX'i Getirme**
ProFX'in çalışabilmesi için Meta Trader 4 üzerinde gragik ekranının açık ve ProFX'in ekran üzerinde konumlandırılmış olması gerekiyor. Bu işlem için ProFX'in çalışacağı ekranı açın. Sonra sırası ile Meta Trader menüsünde Charts >> Template >> ProFX 6 - Standard 'ı işaretleyin. 

![ProFX Template Aç](../img/profx-template-ekleme.jpg "ProFX Template Aç")

Ekran üzerinde BUY - SELL butonlarını görüyorsanız artık sinyal alımına başlayabilirsiniz. Eğer butonları görmüyorsanız [***Genel Hatalar***](https://www.forextekazanmaninyolu.info.tr/ProFX/GenelHatalar.html) sayfasına  bakınız. 

ProFX BUY ve SELL butonlarını kullanabilmek için [***Ayarlar***](https://www.forextekazanmaninyolu.info.tr/ProFX/ProFXAyarlar.html) sayfasını inceleyiniz.
