---
prev: ./GenelHatalar
next: ./ProFXKurulumu
---

[[toc]]

# BUY ve SELL Butonlarının Ayarlanması

[***Kurulum***](./ProFX/ProFXKurulumu) sayfasında gerekli ayarları yaptıktan ve Forex21'den lisans tanımları yapıldı ise artık sinyal üretmeye başlayacaktır. 

<p align="center">

![Kazanç Artırma Ekranı örnek](../img/profx-ilk-hali.png "Forex'te başarının sırrı ProFX")

</p>

Bu sayfada grafik ekran üzerindeki SELL ve BUY butonlarının kullanımı için gerekli ayarların nasıl yapılacağı anlatılacaktır. Butonların ayarlanması için grafik ekran üzerinde F7 tuşuna basın veya Meta Trader üzerinde Charts (Grafik) > Template > Profx 6 - Standard tıklayın.

![ProFX Ayarlarına Ulaşmak için](../img/profx-template-ekleme.jpg)

## ProFX EA Common Ayarları

Açılacak olan ekranda önce Common tabina gelip anlatıma başlayalım

![ProFX Common Ayarları](../img/Profx-Common-Ayarları.png)

Common tabı altında hangi yönde işleme gireceğinizi belirtiyorsunuz. Long demek Alış (BUY), Short ise Satış (SELL)'i ifade etmektedir. Çift taraflı yani hem Alış yönünde hem de satış yönünde işlemlere girmek için long&short'u seciniz. 

Grafik ekran üzerinde oluşan sinyallerin Windows bildirim mesajı olarak görüntülenmesi için "Enable Alerts" kutucuğu işaretlenir.

ProFX'in yeni sürüm güncellemesi sonrasında her bir grafik için ayrı ayrı işlem yapmamak için Safety tabı altındaki Allow kutucuklarını işaretleyiniz.

## ProFX EA inputs Ayarları
Açılan ekranda inputs tabına giriniz. Burası ProFX'in asıl ayarlar bölümü. 

### Daha önce oluşturulmuş ayarların yüklenmesi
Daha önceden ilgili grafik için elinizde set uzantılı dosya varsa ***Load*** butonuna basarak yükleyebilirsiniz. Eğer yaptığınız ayarları dosya olarak kaydetmek istiyorsanız ***Save*** butonuna basınız.

![ProFX Ayar Penceresi](../img/ProFX-Ayar-Ekrani.png)

Aşağıda linkini verdiğim alandan benim kullandığım ayarları kendi bilgisayarınıza indirebilirsiniz. 

[Presents](/Presents)

### En Çok Kullanılan Ayarlar
Şimdi burada en çok kullanılanları size anlatacağım.

#### Singnal Generations 
Forex21'in ProFX'de sinyal üretmek için tasarlayıp düzenlediği indikatörlerini göstermekte. Önerim bunun tamamının YES olması.

#### Alerts
ProFX'in ürettiği sinyalin grafik ekran haricinde sizlere iletilmesini ayarladığınız alandır. Önerim bunun tamamının YES olması.

#### One Click Trading 
Bu kısım grafik ekran üzerindeki ***BUY - SELL butonlarının yapılandırıldığı*** alandır. Hızlı işleme girmek için önemli bir yer olması fakat yanlış ayarlama sonucu büyük zararlarda verebilir. Bu yüzden önem gösterilmeli

**Max Sell/Buy Order**; ProFX butonları kullanılarak en fazla kaç açık işlem barınacağını belirtiyor.

**SL Type**; Stop Lost (Zarar Kes) tanımının yapıldığı yerdir. Bu bölüm altında 3 seçenek bulunmaktadır. Bunlar: 

***No SL*** Stop Lost olması

***Fixed pips*** Bunu seçerseniz ***SL Fized pips*** alanına yazdığınız değer kadar ters işleme kaldığında işlemi sonlandıracak.

***Swing High/Low*** Grafiğin açık olduğu ürün için optimal olarak hesaplanan düşük veya yüksek değerler. Bunu hiç kullanmadım. o yüzden tam bilgi veremeyeceğim. Belki riske atacak sermayem çok olursa denerim :) 

***Risk Type*** işleme girilecek değerin tipimi ayarladığınız yerdir. Burada 2 seçenek sunuyor. Eğer ***fixed***'i (Sabit) seçerseniz ***Risk Fixed*** alanına işleme girmek istediğiniz sabit lot değeri seçiniz. Eğer ***percent***'i seçerseniz ***Risk percent*** alanına işleme girmek istediğiniz lot'un yüzdelik değerini giriniz.


