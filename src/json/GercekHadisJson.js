const gercekHadisJson = [
    "Şüphesiz ki Yüce Allah kıskanır. Allah (c.c)'in kıskanması, Allah'ın haram kıldığı şeyi kişinin yapmasıdır. (Buhari ve Müslim)",
    "Akıllı, kendini hesaba çeken ve ölümden sonrası için çalışandır. Âciz ise, kendisini hevasına kaptıran ve Allah'dan -olmayacak- şeyler bekleyendir. (Tirmizi)",
    "Kim bir şey için yemin eder de, sonra yemininin aksine bir şey yapmayı takvaya daha uygun görürse, takvayı yerine getirsin. (Müslim)",
    "Bir takım kavimler, kalpleri kuşların kalpleri gibi olduğu halde -onlar gibi Allah'a dayanıp güvendikleri için- cennete girerler.(Müslim)",
    "Eğer siz, Allah'a hakkıyla dayanıp güvenseydiniz, kuşları rızıklandırdığı gibi sizi de rızıklandırırdı; sabahleyin açlıktan karınları çekilmiş bir vaziyette çıkarlar, akşama karınları dolmuş olarak dönerler. (Tirmizi )",
    "Hz. Peygamber (s.a.v) evinden çıktığı zaman şöyle derdi:Allah'ın adıyla başlar, Allah'a tevekkül ederim. Allah'ım! Sapmaktan veya saptırılmaktan, kaymaktan veya kaydırılmaktan, haksızlık yapmaktan veya haksızlığa uğramaktan, saygısızlık yapmaktan veya bana saygısızlık yapılmasından sana sığınıyorum.",
    "Kim evinden çıkarken; 'Allah'ın adıyla başlarım, Allah'a te vekkül ederim,Allah'ın izni dışında hiçbir hareket ve kuvvet yoktur’ derse, o kişiye şöyle denilir:'Hidayete erdirildin, yeterli kılındın ve koruma altına alındın' ve şeytan o kişiden uzaklaşır.(Tirmizi)",
    "Ey Allah'ın Resulü, bana İslam hakkında öyle bir söz söyle ki, senden başka hiçbir kimseye bu hususta bir şey sormayayım.Resûlüllah (s.a.v) şöyle buyurdu: Allah'a iman ettim, de. Sonra da dosdoğru ol. (Müslim)",
    "Hayırlı işler yapmakta acele ediniz! Yakında karanlık gece parçaları gibi fitneler ortaya çıkacaktır. Kişi mü'min olarak sabahlayıp, kafir olarak geceler; mü'min olarak geceler, kâfir olarak sabahlar. Bir parça dünya malı için dinini satar. (Müslim)",
    "İki  nimet  vardır  ki,  insanların  çoğu  o  hususlarda  aldanmışlardır.  Onlar- sıhhat ve boş vakittir. (Buhari)",
    "Bir mümin, diğer müminlerin kusurlarını örterek onları korur ve kollarsa, Allah da onun kusurlarını örter. (Müslim)",
    "Mümin, insanların en şerefli ve değerli olanıdır. Kim bir mümine kötülük yaparsa, Allah da ona kötülük yapar. Kim bir mümine yardım ederse, Allah da ona yardım eder. (Tirmizi)",
    "İslam, güzel ahlaktır. (Müslim)",
    "Mümin, başkalarına zarar verici sözler söylemez, kaba davranışlarda bulunmaz ve kimseye zulmetmez. (Tirmizi)",
    "Bir kimse, inancı gereği başkalarına güzel nasihat verirse, ona dünya ve ahirette sevap yazılır (Müslim)",
    "Kim bir yetimi himaye eder ve ona iyi davranırsa, ben ve onun arasında cennette şu şekildeyiz (Buhari)",
    "Kadınlara iyi davranın, çünkü kadınlar sizin yardımcılarınızdır (Müslim)",
    "Allah, güzel ahlaklı ve insana faydası dokunan işleri yapmaya çağıran kişiyi sevdiği gibi, insanların da onu sevmelerini sağlar.(Tirmizi)",
    "İman, 70 şubeden oluşur en üstünü ise 'La ilahe illallah' demektir (Müslim)",
    "Sabır imandandır (Buhari)",
    "Yeryüzünde sevgi ve merhamet olmadığı sürece, insanlar birbirlerine huzur bulamazlar.(Tirmizi)",
    "Bir kimse, Müslüman kardeşinin bir ihtiyacını giderirse, Allah da onun ihtiyacını giderir (Müslim)",
    "Kim, bir Müslüman'ın zor zamanında ona yardım ederse, Allah da kıyamet gününde ona yardım eder (Buhari)",
    "Bir Müslüman, diğer Müslümanların sıkıntılarını giderirse, Allah da onun sıkıntılarını giderir (Müslim)",
    "Bir kimse, kendisi için istediğini diğer Müslümanlar için de istemedikçe gerçek imana ulaşamaz (Buhari)",
    "Güçlü olan, hırslı davranan değil, öfkesini kontrol altına alan kişidir (Müslim)",
    "Kim, bir Müslüman'ın ayıbını örterse, Allah da onun kıyamet günündeki ayıplarını örter (Buhari)",
    "Bir mümin, başkalarına karşı dürüstlük ve sadakatle davranır (Müslim)",
    "İmanınızı korumak için kötü arkadaşlardan uzak durun.(Tirmizi)",
    "Kim bir Müslüman'ın onurunu korursa, Allah da onun onurunu korur (Müslim)",
    "Mümin, insanlarla güzel ilişkiler kurandır.(Tirmizi)",
    "Bir kimse, Allah için bir hayır işlerse, Allah da ona yedi yüz katı kadar sevap verir (Müslim)",
    "Kim bir köle azat ederse, Allah da onun her uzvunu cehennemden azat eder (Buhari)",
    "Güler yüz, bir sadaka olarak kabul edilir.(Tirmizi)",
    "Kim, Allah'ın hoşnutluğunu kazanmak için bir iyilik yaparsa, Allah da ona rızık ve bereket verir (Müslim)",
    "İyilik ve kötülük arasında iyilikle karşılık vermek en iyisidir.(Tirmizi)",
    "Müminler birbirlerini sevmeli, merhametle davranmalı ve birbirlerine yardım etmelidir. (Müslim)",
    "Kim, başkalarının ayıplarını araştırırsa, Allah da onun ayıplarını araştırır. (Buhari)",
    "Müminler, sıkıntıya düştüklerinde sabır göstermeli ve dua etmelidir. (Müslim)",
    "İnsanlara hakkıyla güvenmek, imanın yarısıdır.(Tirmizi)",
    "İman, güzel ahlaktan ayrılmaz (Müslim)",
    "Bir mümin, başkalarına iyilik yapmayı adet haline getirirse, Allah da ona cennetteki yerini hazırlar (Buhari)",
    "Bir kimse, kendisi için sevdiğini Müslüman kardeşi için de istemedikçe gerçek imana erişemez (Müslim)",
    "Kim, bir Müslüman'ın ihtiyacını giderirse, Allah da kıyamet gününde onun ihtiyaçlarını giderir (Buhari)",
    "Mümin, insanlara karşı güvenilir ve sadık olmalıdır (Müslim)",
    "Kim, Allah'ın rızası için bir Müslüman'a yardım ederse, Allah da ona dünya ve ahirette yardım eder.(Tirmizi)",
    "İyi sözler, sadaka olarak kabul edilir (Müslim)",
    "Kim, bir Müslüman'ın ayıbını örterse, Allah da onun kıyamet günündeki ayıplarını örter (Buhari)",
    "Bir mümin, başkalarına iyilik yapmayı adet haline getirirse, Allah da ona cennetteki yerini hazırlar (Müslim)",
    "Müminler birbirlerini sevmeli, merhametle davranmalı ve birbirlerine yardım etmelidir. (Tirmizi)",
    "Kim, Allah'ın rızası için bir Müslüman'a yardım ederse, Allah da ona dünya ve ahirette yardım eder. (Müslim)",
    "Mümin, insanlara karşı güvenilir ve sadık olmalıdır. (Buhari)",
    "Kim, bir Müslüman'ın ihtiyacını giderirse, Allah da kıyamet gününde onun ihtiyaçlarını giderir.(Tirmizi)",
    "Bir kimse, kendisi için sevdiğini Müslüman kardeşi için de istemedikçe gerçek imana erişemez (Müslim)",
    "Bir mümin, başkalarına iyilik yapmayı adet haline getirirse, Allah da ona cennetteki yerini hazırlar (Buhari)",
    "Kim, bir Müslüman'ın ayıbını örterse, Allah da onun kıyamet günündeki ayıplarını örter (Müslim)",
    "Mümin, insanlara karşı güvenilir ve sadık olmalıdır.(Tirmizi)",
    "Kim, Allah'ın rızası için bir Müslüman'a yardım ederse, Allah da ona dünya ve ahirette yardım eder (Müslim)",
    "Müminler birbirlerini sevmeli, merhametle davranmalı ve birbirlerine yardım etmelidir (Buhari)",
    "Bir kimse, kendisi için sevdiğini Müslüman kardeşi için de istemedikçe gerçek imana erişemez.(Tirmizi)",
    "Ramazan ayının son on günü girince, Resûlü'llah (s.a.v) geceleri uyanık geçirir, ev halkını uyandırır, ibadete ağırlık verir ve hanımlarından uzaklaşırdı. (Buhari ve Müslim)",
    "Allah (c.c), altmış yaşına ulaşıncaya kadar ecelini geciktirdiği kişiye, iler sürebileceği hiçbir mazeret bırakmamıştır. (Buhari)",
    "Kardeşini güler yüzle karşılamak dahi olsa , hiçbir iyiliği hor görme. (Müslim)",
    "Kim. sabah veya akşam mescide gidip gelirse, her gidişinde veya dönüşünde Allah ona cennette bir ziyafet hazırlar. (Buhari ve Müslim)",
    "Ey Müslüman kadınlar, hiçbir komşu kadını, velev ki koyun paçası bile olsa, komşusunun verdiği bir şeyi hakir görmesin. (Buharı ve Müslim)",
    "Kim iki soğuk-vaktin, sabah ve ikindi- namazını kılarsa cennete girer. (Buharı ve Müslim)",
    "Her iyilik sadakadır. (Buhari)",
    "Sizden biriniz namaz kılarken uyuklarsa, hemen uykusu geçinceye kadar yatıp uyusun. Çünkü biriniz uykulu iken namaz kılarsa, farkında olmaz, belki de kendisi için istiğfar edeyim derken bedduada bulunuyor. (Buharı ve Müslim)",
    "Kim, gece virdini veya ondan bir şeyi okumadan uyuyakalır da onu sabah namazı ile öğle namazı arasında okursa, sanki onu geceden okumuş gibi kendisine yazılır. (Müslim)",
    "Ümmetimin hepsi cennete girecek; ancak yüz çevirenler hariç. Denildi ki: 'Ey Allah'ın Resulü, yüz çevirenler de kimdir?' Buyurdu ki: Kim bana itaat ederse cennete girer, kim de bana isyan ederse yüz çevirmiş olur. (Buharı)",
    "Resûlüllah (s.a.v)'ı şöyle söylerken işittim: Ya saflarınızı düzeltirsiniz, ya da Allah yüzlerinizi farklı yönlere çevirir. (Buhari ve Müslim)",
    "Kim hayra Öncülük ederse, onu yapanın mükafatı kadar kendisine de mükafat vardır. (Müslim)",
    "Kim, Allah yolunda cihat eden bir gaziyi savaşa hazırlarsa, muhakkak gaza etmiş gibi -sevap işlemiş- olur. Kim, cihada çıkan gazinin ailesine yardım ederse, muhakkak gaza etmiş gibi-sevap işlemiş- olur. (Buhari ve Müslim)",
    "Sizden biriniz, kendisi için sevdiğini kardeşi için de sevmedikçe - hakkıyla- iman etmiş olamaz. (Buharı ve Müslim)",
    "Sizden kim bir kötülük görürse, hemen onu eliyle değiştirsin. Eğer güç yettiremezse diliyle -değiştirsin. Eğer buna da güç yettiremezse kalbiyle- reddetsin; bu ise imanın en zayıf derecesidir. (Müslim)",
    "Münafığın alameti üçtür; konuştuğunda yalan konuşur, söz verdiğinde yerine getirmez, kendisine verilen- emanete hıyanetlik eder. (Buharı ve Müslim)",
    "Zulümden kaçınınız. Çünkü zulüm, kıyamet gününde karanlıklar halinde - zulmedeni- sarar. Cimrilikten de kaçınınız. Çünkü cimrilik, sizden öncekileri helak etti, onları birbirlerinin kanlarını akıtmaya ve haramları helal saymaya sürükledi. (Müslim)",
    "Kıyamet günü haklar, sahiplerine mutlaka iade edilecektir. Hatta boynuzsuz koyun için boynuzlu koyuna kısas -tatbik- edilecektir. (Müslim)",
    "Kim bir karış toprağı haksız yere gasbederse, yedi kat yer onun boğazına geçirilir. (Buharı ve Müslim)",
    "Müslüman; dilinden ve elinden müslümanların selamette olduğu kimsedir. Muhacir de; Allah'ın men ettiği şeyleri terk edendir. (Buhari ve Müslim)",
    "Kim, bir müslümanın hakkını yemin ederek gasbederse, Allah ona cehennemi vacip, cenneti de haram kılar. Bir adam dedi ki: 'Ey Allah'ın Resulü, basit bir şey olsa da mı? Resûlüllah (s.a.v) buyurdu ki: Misvak ağacından bir dal bile olsa. (Müslim)",
    "Sizden biriniz insanlara namaz kıldırdığı zaman hafif kıldırsın. Çünkü onların arasında zayıf, hasta ve yaşlılar vardır. Ama sizden biriniz kendi başına namaz kıldığı zaman, istediği kadar uzatsın. (Buharı ve Müslim)",
    "Kim sabah namazını kılarsa, o kişi Allah'ın koruması altındadır. Sakın Allah, -himayesine alırken yaptığınız- anlaşmadan dolayı sizden bir şey istemesin! Çünkü O, yaptığı anlaşmadan dolayı kimden bir şeyi isterse onu yakalar, sonra da yüz üstü onu cehennem ateşine atar!",
    "Müslüman, müslümanın kardeşidir. Ona zulmetmez, onu düşmana teslim etmez. Kim bir kardeşinin ihtiyacını giderirse, Allah da onun ihtiyacını giderir. Kim bir müslümandan bir sıkıntı giderirse, Allah da ondan kıyamet gününün sıkıntılarından bir sıkıntıyı giderir. Kim bir müslümanın ayıbını örterse, Allah da kıyamet günü onun ayıbını örter. (Buharı ve Müslim)",

  ]
  export default gercekHadisJson
  