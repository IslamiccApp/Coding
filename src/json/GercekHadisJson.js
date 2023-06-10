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
    `Cerir b. Abdullah (r.a)'dan şöyle dediği rivayet edilmiştir:
    "Biz, Resûlüllah (s.a.v)'in huzurunda bulunuyorduk. Dolunay şeklindeki aya baktı ve şöyle buyurdu:
    
    Şüphesiz ki siz, şu ayı gördüğünüz gibi Rabbinizi çıplak gözle görebileceksiniz. O'nu görüp müşahede etmekte, herhangi bir sıkıntı çekmeyeceksiniz." (Buhari ve Müslim)`,
    `Ebu Hureyre (r.a)'dan Resûlüllah (s.a.v)'in şöyle buyurduğu rivayet edilmiştir;
    "Sizden birinizin cennetteki en düşük makamı, kendisine -Yüce Allah'ın-
    'Dile bakalım ne dilersen!' demesidir. Yüce Allah ona; 'Diledin mi?' diye sorar, o da 'Evet' der. Bunun üzerine ona şöyle buyurur; Şüphesiz ki sana dilediğin ne varsa, bir kat fazlasıyla birlikte verilecektir! (Müslim)
    `
    ,
    `Cennet ehli cennete girdiği zaman bir münâdî şöyle seslenir; Şüphesiz ki artık size yaşam vardır; ebedi olarak ölmeyeceksiniz. Artık size sağlık afiyet vardır; ebedi olarak hastalanmayacaksınız. Artık size gençlik vardır; ebedi olarak yaşlanmayacaksınız. Artık size nimetlere erişme vardır; ebedi olarak hüzünlenmeyeceksiniz. (Müslim)
    `
    ,
    `Gerçekten mü'min için cennette, göğe doğru altmış mil uzunluğunda içi boş ve tek bir inciden yapılmış bir çadır bulunmaktadır. Onun içinde mü'minin aileleri vardır; mü'min onları ziyaret eder ama bir kısmı diğerini göremez. (Buhari ve Müslim)
    `
    ,
    `Yüce Allah şöyle buyurmuştur, Ben, salih kullarım için hiçbir gözün görmediği, hiçbir kulağın işitmediği ve hiçbir beşerin kalbinden dahi geçiremeyeceği şeyler hazırladım. İsterseniz şu ayeti okuyunuz:
    Hiçbir kimse, yaptıklarının mükafatı olarak gözler aydınlığı -nimetlerden- neler gizlendiğini asla bilemez! Secde;17 (Buhari ve Müslim)
    `
    ,
    `Cennet ehli cennette yerler ve içerler, abdest bozmazlar, sümkürmezler ve idrar yapmazlar. Ama onların bu yedikleri, geğirti ve misk gibi terle dışarı atılır. Nefes alıp veme nasıl kendilerine ilham olunduysa, aynı ilham ile tesbih ederle, tekbir getirirler.
    (Müslim)
    `
    ,
    `Kim istiğfar etmeye devam ederse, Allah onun için her sıkıntıdan bir çıkış yolu, her üzüntüden de bir ferahlık yaratır. Onu hiç ummadığı yerden rızıklandırır. (Ebu Davud)`
    ,
    `Biz, Resûlüllah (s.a.v)'in sadece bir mecliste yüz defa 'Rabbim, beni bağışla ve tövbemi kabul buyur; şüphesiz ki sen tövbeleri
    en çok kabul eden ve en fazla merhamet edensin' diye dua ettiğini sayardık. (Ebu Davud ve Tirmizi rivayet etmiş ve Tirmizi, hadis sahihtir demiştir.)
    `
    ,
    `Nefsim elinde olana yemin olsun ki, eğer siz günah işlememiş olsanız, Yüce Allah sizi mutlaka gönderir ve Allah'a tövbe eden, Allah'ın da tövbelerini kabul ettiği bir topluluğu sizin yerinize mutlaka getirirdi.(Müslim)`
    ,
    `Allah'a yemin olsun ki ben, bir günde yetmiş kereden fazla Allah'a tövbe edip bağışlanma diliyorum. (Buhari)`
    ,
    `Şüphesiz ki benim kalbim -nurdan bir perde ile- perdelen-miştir ve ben her gün yüz kere Allah'a mutlaka tövbe ederim. (Müslim)`
    ,
    `Bir hakim hüküm vereceği zaman ictihad eder de sonra içtihadında isabet ederse, onun için iki mükafat vardır. Eğer ictihad edip hüküm verir ve hata ederse, onun için bir mükafat vardır.
    (Buhari ve Müslim)
    `
    ,
    ` Üç sınıf insan vardır ki, Allah kıyamet günü onlarla konuşmayacak, onları temize çıkarmayacak, onlara bakmayacak ve onlar için çok acıklı bir azap vardır; zina eden ihtiyar, yalancı idareci ve büyüklük taslayan fakir.(Müslim)`
    ,
    `Melekler nurdan yaratılmıştır. Cinler de dumansız bir ateşten yaratılmıştır. Adem ise -Kur'an'da- size açıklandığı şekilde yaratılmıştır. (Müslim)`
    ,
    `Aziz ve Yüce olan Allah, zincirlere bağlanmış bir halde cennete giren bir topluluktan hoşnut olmuştur. (Buhari)`
    ,
    `İmamlarınız-size  namaz  kıldırıyorlar.  Eğer  doğru  -kıldırırlarsa-  sevabı hepinize aittir. Ama hata ederlerse sevabı size, -sorumluğu da- onların aleyhlerinedir. (Buhari)`
    ,
    `"Mü'min, bir delikten iki kere ısırılmaz. (Buhari ve Müslim)`
    ,
    `Peygamber (a.s)'ın hutbe okurken üzerine yaslanıp durduğu bir hurma kütüğü vardı. Minber konulduğu zaman o kütükten, gebe devenin -doğum sancısında çıkardığı- ses gibi bir inilti işittik. Sonunda Peygamber (a.s) hutbeden inip elini onun üzerine koydu ve böylelikle sakinleşip sustu. (Buhari)`
    ,
    `Yüce Allah bir topluluğa azab indirdiği zaman, o azab o topluluğun içinde bulunan -iyi , kötü- herkese isabet eder. Sonra amellerine göre diriltilirler. (Buharı ve Müslim)`
    ,
    `İnsanların üzerine öyle bir zaman gelecek ki, kişi altından sadaka vermek için dolaşıp duracak da o sadakayı alacak kimse bulamayacaktır. Erkeklerin azlığı ve kadınların da çokluğundan dolayı bir erkeğin peşinden kırk kadın gidip kendisine sığındığı görülecektir. (Müslim)`
    ,
    `Ahir zaman da halifelerinizden bir halife, avuçla mal dağıtacak ve onu saymayacaktır. (Müslim)`
    ,
    `Nefsim elinde olan -Allah'a- yemin olsun ki, bir adam kabirden geçerken kabrin üzerine çullanıp 'Keşke bu kabrin sahibi yerinde ben olsaydım!' demedikçe dünya yıkılmaz. Oysa bu temenniyi dini için değil de, başına gelen beladan dolayı yapacaktır. (Buhari ve Müslim)`
    ,
    `Kıyamet, müslümarılarla yahudiler savaşmadıkça kopmayacaktır. Sonunda bir yahudi, taş ve ağacın arkasına saklanır; bunun üzerine taş ve ağaç; 'Ey Müslüman! Arkamda saklanan bir yahudidir. Gel ve onu öldür!' der. Ancak 'Garkad' denilen ağaç hariç; çünkü o, yahudi ağacıdır. (Buharı ve Müslim)`
    ,
    `Dikkat ediniz! Size, hiçbir peygamberin kavmine kendisinden bahsetmediği Deccâl hakkında haber vereyim mi? Şüphesiz ki onun bir gözü kördür. O, kendisiyle birlikte cennet ve cehennemin bir benzerini getirecektir. Onun cennet dediği var ya, o mutlaka cehennemdir. (Buharı ve Müslim.)`
    ,
    `Hiçbir peygamber yoktur ki, ümmetini bir gözü kör olan yalancı -Deccâl- dan korkutmuş olmasın. Şüphesiz ki onun bir gözü kördür, ama hiç şüpheniz olmasın ki Yüce Rabbiniz kör değildir. O-nun iki gözü arasında 'K-F-R-kafir' yazılıdır. (Buhari ve Müslim)`
    ,
    `Benim Resûlüllah (s.a.v)'e Deccâl hakkında sorduğum sorudan daha çok hiçbir kimse soru. sormamıştır. Şüphesiz ki Resûlüllah (s.a.v) bana; 'O sana zarar veremez' buyurunca dedim ki; 'İnsanlar Deccâl ile birlikte dağ kadar ekmek, ırmak kadar da su bulunduğunu söylüyorlar!' Bunun üzerine Resûlüllah (s.a.v) şöyle buyurdu; O, Allah katında bundan daha alçaktır. (Buharİ ve Müslim)`
    ,
    `Âdem'in yaratılışı ile kıyametin kopacağı saat arasında Deccâl'den daha büyük bir olay yoktur! (Müslim)`
    ,
    `İnsanlar Deccâl'den dağlara doğru kaçacaklardır. (Müslim)`
    ,
    `Deccâl'e Isfahan Yahudilerinden yetmiş bin kişi, üzerlerinde talasanlar olduğu halde tabi olur. (Müslim)`
    ,
    `Mekke ve Medine'nin dışında bütün her yere Deccâl ayak basacaktır. Melekler buralarda bulunan bütün yolları tutup saf halinde beklerler. Bunun üzerine Deccâl çorak bir yere iner. Medine üç sarsıntı ile sarsılır. Allah (c.c) bütün kafir ve münafığı oradan çıkarır. (Müslim)`
    ,
    `Kim yemin eder ve yemininde 'Lât ve Uzza hakkı için' derse, hemen 'Allah'dan başka hiçbir ilah yoktur' desin. Kim de kardeşine 'Gel seninle kumar oynayalım' derse, hemen bir sadaka versin. (Buhari ve Müslim)`
    ,
    `Şüphesiz ki Yüce Allah kıskançtır. Allah'ın kıskançlığı ise, bir kişinin Allah'ın haram kıldığı şeyleri yapmasıdır. (Buharı ve Müslim)`
    ,
    `Bildiği halde, babasından başkasını babası olduğunu iddia eden kimse mutlaka -nimete- küfretmiş olur. Kim kendisinin olmayan bir şeyi kendisinin olduğunu iddia ederse bizden değildir ve ateşteki yerini hazırlasın. Kim de bir kişiye 'Kafir' veya 'Allah düşmanı' diye çağırır da durum söylediği gibi olmazsa, söylediği söz kendi aleyhine döner. (Buhari ve Müslim. Bu lafız, Müslim'in lafzıdır,)`
    ,
    `Babalarınızdan yüz çevirmeyiniz. Kim babasından yüz çevirirse, o - nimete-küfretmektir. (Buhari ve Müslim)`
    ,
    `Kim babası olmadığını bildiği halde, babasından başkasını babası diye iddia ederse, o kimseye cennet haramdır. (Buhari ve Müslim)`
    ,
    `Ebu Bekir Sıddık (r.a), Zeyneb ismiyle anılan Ahmes kabilesinden bir kadının yanına vardı. Onun konuşmadığını görünce şöyle dedi; 'Sana ne oluyor ki konuşmuyorsun?' Dediler ki; 'O, konuşmamaya karar verdi.' Bunun üzerine Ebu Bekir Sıddık (r.a); 'Konuş. Çünkü susmak helal değildir. Bu, cahiliyet işlerindendir' dedi. Böylelikle kadın konuştu. (Buhari)`
    ,
    `Resûlüllah (s.a.v)'den şunu ezberledim; Buluğa erdikten sonra artık yetimlik olmaz. Gündüz vaktinden geceye kadar susmak da yoktur. (Ebu Davud hasen bir isnatla rivayet etmiştir.)`
    ,
    `Peygamber (a.s) benim üzerimde zâferanlanmış iki elbise görünce; 'Bunu sana annen mi emretti?'buyurdu. Ben de; 'Onları yıkayacağım'dedim. Bunun üzerine Peygamber (a.s); yıkamak yetmez, onları yak, buyurdu. (Müslim)`
    ,
    `Peygamber (a.s) erkeğin zâferanlı elbise giyinmesini yasaklamıştır. (Buhari ve Müslim)`
    ,
    `Ben, Enes b. Malik (r.a) ile beraber Mecusilerden bir grubun yanında bulunmuştum. Gümüş bir kabın içinde pelte getirildi. Hz. Enes- onu yemedi. Ona-getirene- kabı değiştir, denildi. Bunun üzerine onu ahşap bir kaba aktardı. Bu şekilde getirilince artık onu yedi. (Beyhakî sahih bir isnatla rivayet etmiştir.)`
    ,
    `Şüphesiz ki Peygamber (a.s) bizi ipek ve atlas giymekten, altın ve gümüş kapdan bir şey içmekten men etmiş ve şöyle buyur muştur; Bunlar dünyada onlara -kafirlere- aittir. Ahirette ise sizin -mü'minlerin- olacaktır. (Buharı ve Müslim)`
    ,
    `Gümüş kapda bir şey içen, muhakkak karnında cehennem ateşini lakır lakır öttürmüş olur. (Buhari ve Müslim)`
    ,
    `Resûlüllah (s.a.v) Kur'an ile düşman yurduna yolculuk yapılmasını yasaklamıştır. (Buharı ve Müslim)`
    ,
    `Helak edici yedi husustan kaçınınız!" Ashab; Ey Allah'ın Resulü, onlar nelerdir?dediler. Bunun üzerine şöyle buyurdu:
    Allah'a ortak koşmak, büyü yapmak, haksız yere Allah'ın haram kıldığı canı öldürmek, faiz yemek, yetim malı yemek, düşmanla karşılaşıldığı gün kaçmak ve hiçbir şeyden habersiz, iffetli mü'min kadınlara iftira etmektir. (Buhari ve Müslim)
    `
    ,
    `Bir yerde Taun -Veba hastalığını- işittiğiniz zaman sakın oraya girmeyiniz! Siz orada iken bir yerde vuku bulursa, sakın oradan çıkmayınız! (Buhari ve Müslim)`
    ,
    `Bir adam Peygamber (a.s)' ın huzurunda anıldı ve bir kişi onu hayırla meth etti. Bunun üzerine Peygamber (s.a.v) birkaç kere; 'Yazıklar olsun sana! Arkadaşının boynunu kestin ' buyurduktan sonra şöyle devam etti: Eğer sizden biriniz mutlaka övmesi gerekiyorsa ve onu öyle görüyorsa 'Ben şöyle şöyle sanıyorum' desin. Artık onun hesabı Allah'a aittir. Allah'a rağmen hiçbir kimse aklanmamalıdır. (Buhari ve Müslim)`
    ,
    `Peygamber (a.s) bir adamı Öven ve övgüsünde aşırıya kaçan bir kimseyi işitince şöyle buyurdu: Adamı helak ettiniz veya sırtından hançerlediniz. (Buhari ve Müslim)`
    ,
    `Şüphesiz ki Peygamber (a.s) güzel -kokuyu- geri çevirmezdi. (Buhari)`
    ,
    `Kime reyhan kokusu sunulursa, sakın onu reddetmesin. Çünkü onun taşınması hafif, kokusu ise güzeldir. (Müslim)`
    ,
    `Biz Ebu Hureyre (r.a) ile beraber mescidde oturuyorduk. Birden müezzin ezan okumaya başladı. Bir adam mescidden kalktı yürümeye başladı. Bunun üzerine Ebu Hureyre mescidden çıkıncaya kadar gözüyle o adamı takip etti ve  şöyle  dedi;  İşte  bu  adam  var  ya,  Kâsım'ın  babasına  -Muhammed (a.s)'a- isyan etmiş oldu. (Müslim)`
    ,
    `Resûlüllah (s.a.v) kınından çekilmiş kılıcın elden ele alınıp verilmesini yasaklamıştır. (Ebu Davud ve Tirmizi rivayet etmiş ve Tirmizi hadis hasendir demiştir.)`
    ,
    `Sizden biriniz silah ile kardeşine işarette bulunmasın. Çünkü o farkında olmayabilir, belki de şeytan elinden silahı çeker ve böylelikle ateşten bir çukura yuvarlanmış olur. (Buhari ve Müslim)`
    ,
    `Şüphesiz ki Allah sizin için üç şeye razı olur ve yine sizin için üç şeyi de çirkin görür. Sizin için razı olduğu hususlar; O'na ibadet edip kendisine hiçbir şeyi ortak koşmamanız, toptan hepinizin Allah'ın ipine sarılmanız ve ayrılığa düşmemenizdir. Sizin için çirkin gördüğü hususlar da; Dedi kodu, çok sual sormanız ve malı ziyan etmenizdir. (Müslim)`
    ,
    `Bazınız, bazınızın yaptığı satış üzerine satış yapmaya kalkışmasın, Kendisine izin verilmesi hariç, din kardeşinin istettiği kadına da evlilik teklifinde bulunmasın. (Buhari ve Müslim. Lafız Müslim'indir.)`
    ,
    `Pazara gelenleri, malları ucuza kapmak için yol üzerinde karşılamayınız.
    Şehirli, köylünün malını satmasın."
    
    Tavus  İbn-i  Abbas'a;  'Şehirli,  köylünün  malını  satmasın'  sözü  de  ne demek?diye sorunca, İbn-i Abbas şöyle dedi; 'Ona simsarlık yapmasın. (Buhari ve Müslim)
    `
    ,
    `Resûlüllah (s.a.v) şehirlinin, isterse ana baba bir kardeşi bile olsa, köylüye simsarlık yapmasını yasaklamıştır. (Buhari ve Müslim) `
    ,
    `Babası onu Resûlüllah (s.a.v)'in huzuruna getirip; 'Ben bu oğluma, kendime ait olan bir köleyi verdim' dedi. Resûlüllah (s.a.v) şöyle buyurdu; 'Bütün evlatlarına da aynısını verdin mi?' Babası; 'Hayır' dedi. Bunun üzerine Resûlüllah (s.a.v) şöyle buyurdu; O zaman -evladına verdiğin- hibenden dön. (Buharı ve Müslim)`
    ,
    `Lanete sebep olan iki şeyden sakınınız!" Ashab; Lanete sebep olan iki şey de nedir? diye sordular. Bunun üzerine Resûlüllah (s.a.v) şöyle buyurdu; "İnsanların yoluna veya gölgelendiği yerlere abdest bozmaktır. (Müslim)`
    ,
    `Resûlüllah (s.a.v) kabirlerin badana edilmesini, üzerlerine oturulmasını ve üsüerine bina yapılmasını yasaklamıştır. (Müslim)`
    ,
    `Sizden birinizin kor üzerine oturup da -ateşin- elbisesini yakması ve cildine ulaşması, kabir üzerine oturmasından kendisi için daha hayırlıdır, (Müslim)`
    ,
    `Resûlüllah (s.a.v) hiç iftar edilmeden aralıksız tutulan orucu yasaklamıştı. Bunun üzerine ashab dediler ki; 'Ama sen ara vermeden tutuyorsun?' Bunun üzerine Peygamber (a.s) şöyle buyurdu; Ben sizin gibi değilim. Çünkü ben -Rabbim tarafından- yedirilip içiriliyorum. (Buharı ve Müslim. Bu Buharı'nin lafzıdır.)`
    ,
    `Peygamber (a.s) peşpeşe aralıksız tutulan orucu yasaklamıştır. (Buharı ve Müslim)`
    ,
    `Sizden biriniz sadece Cuma günü oruç tutmasın. Ancak bir gün öncesiyle veya bir gün sonrasıyla birlikte tutulabilir. (Buharı ve Müslim)`
    ,
    `Geceler arasında sadece Cuma gecesini ibadet etmeye ayırmayınız. Günler arasında da sadece Cuma gününü oruç tutmaya ayırmayınız. Ancak o gün sizden birinizin tuttuğu oruca rastlamışsa o başka. (Müslim)`
    ,
    `Namaz için kamete başlanıldığı zaman, farz namazından başka bir namaz -kılmak- yoktur. (Müslim)`
    ,
    `Namaz kılanın önünden geçen kimse, üzerine ne kadar sorumluluk aldığını eğer bilseydi, onun Önünden geçmektense kırk gün beklemesi daha hayırlı olurdu." Rivayet eden dedi ki; Kırk gün mü, kırk ay mı veya kırk sene mi dediğini bilemiyorum. (Buhari ve Müslim)`
    ,
    `Kabirlere karşı namaz kılmayınız ve kabirlerin üzerlerine oturmayınız. (Müslim)`
    ,
    `Namazda   etrafla   meşgul   olmaktan   sakın!   Çünkü   namazda etrafla meşgul olup bakınmak, helak edicidir. Eğer elinde olma yarak vazgeçemiyorsa, o zaman nafile namazlarda yapsın, farzlar da değil. (Tirmizi rivayet etmiş ve hadis hasendir, sahihtir de miştir.)`
    ,
    `Resûlüllah (s.a.v)'e namazda etrafla ilgilenmeyi sorduğumda şöyle buyurdu; O, öyle bir kapmadır ki, şeytan onunla kulu namazdan çekip kapmaktadır. (Buharı)`
    ,
    `Bazı cemâate ne oluyor ki, namaz içinde gözlerini göğe kaldırıyorlar?" Resûlüllah (s.a.v)'in bu husustaki sözü o kadar ağırlaştı ki, sonunda şöyle buyurdu; "Ya böyle yapmaktan vazgeçerler, ya da gözlerinin -nuru- alınır. (Buhari)`
    ,
    `Yemek hazır iken namaz kılınmaz. Büyük veya küçük abdest kendisini zorluyor iken de namaz kılınmaz. (Müslim)`
    ,
    `Namazda eli böğüre koymaktan yasaklandık. (Buharı ve Millim)`
    ,
    `Sizden biriniz başını imamdan önce kaldırdığı zaman Allah'ın, başını merkep başı gibi yapmasından, ya da suretini merkep suretine çevirmesinden çekinmez mi? (Buharı ve Müslim)`
    ,
    `Bir kadına, kocası yanında iken ondan izin almadan -nafîle-oruç tutması helal değildir, Kadın-kocasının izni olmadan bir kimseyi kocasının evine alması da helal değildir. (Buhari ve Müslim)`
    ,
    `Bir kişi hanımını yatağına çağırdığı zaman kadın yüz çevirir ve kocası kendisine kızarak gecelerse, sabahlayıncaya kadar melekler o kadına lanet ederler. (Buhari ve Müslim)
    `
    ,
    `Resûlüllah (s.a.v) hayatının sonlarında bir ara yatsı namazı kıldırmış ve selam verince de şöyle buyurmuştur; Şu gecenizi görüyorsunuz değil mi? Şüphesiz yüz senenin başında, bu gün yeryüzünde bulunanlardan hiçbir kimse -hayatta- kalmayacaktır. (Buhari ve Müslim)`
    ,
    `Resûlüllah (s.a.v) yatsıdan evvel uyumayı ve yatsıdan sonra da konuşmayı hoş görmüyordu. (Buharı ve Müslim)`
    ,
    `Sakın 'Allah dilerse, bir de falanca dilerse' demeyiniz; ama 'Allah dilerse, sonra da falanca dilerse' deyiniz. (Ebu Davud sahih bir isnatla rivayet etmiştir.)`
    ,
    `Sizden biriniz dua ettiği zaman isteğini kararlılıkla ortaya koysun. 'Allah'ım dilersen bana ver' demesin. Çünkü Allah'ı zorlayacak hiçbir şey yoktur. (Buharı ve Müslim)`
    ,
    `Sizden biriniz sakın 'Allah'ım dilersen beni bağışla. Allah'ım dilersen bana merhamet  et'  demesin.  İsteğini  kararlılıkla  ortaya  koysun.  Çünkü  Allah'ı zorlayan hiçbir şey yoktur. (Buharı ve Müslim)`
    ,
    `Sakın bir kadın başka bir kadınla yakın ilişkiye girmesin; sonra o kadını kocasına anlatır da, kocası sanki ona bakıyor gibi olur. (Buharı ve Müslim)`
    ,
    `Üzümü 'Kerm' ismiyle isimlendirmeyiniz. Çünkü Kerm, müslümanın kalbidir." (Buharİ ve Müslim. Bu lafız Müslim'indir.)`
    ,
    `Sizden biriniz sakın 'Nefsim kirlendi' demesin. Ama 'Nefsim kötüleşti' desin. (Buhari ve Müslim)`
    ,
    `Şüphesiz ki Allah, sığırın diliyle otları evirip çevirmesi gibi, sözü ağzında geveleyerek belagat taslayan kişiye çok kızar. (Ebu Davud ve Tırmizi)`
    ,
    `Işlerde ileri gidenler-konuşmalarında edebi yönden derine inip anlaşılamayacak uslüp kullananlar helak oldular." Resûlüllah (s.a.v) bu sözü üç kere tekrar etmiştir. (Müslim)`
    ,
    `Hangi şeyde çirkinlik varsa mutlaka onu lekeler. Hangi şeyde de haya varsa mutlaka onu süsler. (Tirmizi rivayet etmiş ve hadis hasendir demiştir.)`
    ,
    `Mü'min dürten-iğneleyen, lanetliyen, kötü sözlü ve hayasız biri değildir. (Tirmizi rivayet etmiş ve hadis hasendir demiştir.)`
    ,
    `Bir kişi kardeşine 'Ey kâfir ' dediği zaman, bu söz onlardan birine döner. Eğer dediği gibi ise -tamam o kişi kâfirdir- Ama öyle değilse, söylediği söz kendi aleyhine döner. (Buharı ve Müslim)`
    ,
    `Horoza sövmeyiniz; çünkü o namaz için uyandırır. (Ebu Davud, hasen bir isnatla rivayet etmiştir.)`
    ,
    `Rüzgâr Allah'ın rahmetindendir; kah rahmet getirir, kah azap getirir. Rüzgârı gördüğünüz zaman ona sövmeyiniz. Allah'dan hayrını isteyiniz ve onun şerrinden de Allah'a sığınınız. (Ebu Davud, hasen bir isnatla rivayet etmiştir.)`
    ,
    `Resûlüllah (s.a.v) Ümmü Sâib veya Ümmü Müseyyeb'in yanına varıp, 'Ey Ümmü Sâib veya Ümmü Müseyyeb! Sana ne oluyor ki, böyle titreyip duruyorsun?'diye sordu. Dedi ki; 'Allah artırmasın, sıtmaya tutulmuşum!' Bunun üzerine Resûlüllah (s.a.v) şöyle buyurdu; Sakın sıtmaya sövme. Çünkü o hastalık, körüğün demirin pasını giderdiği gibi Âdem oğlunun hatalarını gidermektedir. (Müslim)`
    ,
    ` Sakın münafık birine 'Beyefendi' demeyiniz; çünkü eğer o 'Beyefendi' yapılarak büyütülürse, gerçekten Yüce Rabbinizi kızdırmış olursunuz. (Ebu Davud, sahih bir isnatla rivayet etmiştir.)`
    ,
    `Aziz ve Celil olan Allah indinde en alçak isim, 'Padişahlar padişahı' adıyla isimlendirilen adamın ismidir. (Buhari ve Mülim)`
    ,
    `Kim Allah adıyla sığınırsa, onu koruyunuz. Kim Allah adına bir şey isterse, ona veriniz. Kim sizi davet ederse, icabet ediniz. Kim size bir iyilik yaparsa, onun karşılığını veriniz. Eğer karşılığını vereceğiniz bir şey bulamazsanız, karşılığını verdiğinize kani oluncaya kadar kendisine dua ediniz. (Ebu Davud ve Neseî, Buhari ve Müslim'in isnadlarıyla rivayet edilmiştir.)`
    ,
    `Allah rızası adına sadece cennet istenebilir. (Ebu Davud)`
    ,
    `Yemin malın satılmasını artırır; ama kazancın -bereketini-yok eder. (Buharı ve Müslim)`
    ,
    `Allah sizi yeminlerinizdeki lağvden (dil sürçmesinden) dolayı sorumlu tutmaz.... âyeti, bir adamın 'Vallahi hayır, vallahi evet' diye söylediği yemininden dolayı indirilmiştir.`
    ,
    `Kim bir şeye yemin eder de sonra ondan daha hayırlısını görürse, yemininden dolayı keffaret versin ve o hayırlı olan şeyi yapsın. (Müslim)`
    ,
    `Bir şey üzerine yemin eder de sonra ondan daha hayırlısını görürsen, o hayırlı olanı yerine getir; yemininden dolayı da keffaret ver. (Buhari ve Müslim)`
    ,
    `Kim yemin ederek müslüman bir kişinin hakkını gasbederse, şüphesiz Allah ona cehennemi vacip, cenneti de haram kılar. Bir adam; 'Ey Allah'ın Resulü, basit bir şey olsa yine öyle mi?'diye sorunca şöyle buyurdu; Velev ki misvak ağacından bir dal parçası olsun! (Müslim)`
    ,
    `Putlara ve babalarınıza yemin etmeyiniz. (Müslim)`
    ,
    `Şüphesiz ki Allah sizleri, babalarınız adıyla yemin etmekten men etmiştir. Artık kim yemin edecekse Allah adına yemin etsin ya da sussun. (Buhari ve Müslim)`
    ,
    `Kimin kesecek bir kurbanı varsa, Zilhicce hilali göründüğünde kurbanını kesinceye kadar saçından ve tırnaklarından hiçbir şey almasın. (Müslim)`
    ,
    `Peygamber (a.s), Cuma günü imam hutbe verirken dizler dikip elleri bağlayarak oturmayı yasaklamıştır. (Ebu Davud ve Tirmizi rivayet etmiş; hadis hasendir demişlerdir.)`
    ,
    `Kim bu ağaçtan -yani sarımsak ağacından- yerse, bizim mescidimize sakın yaklaşmasın. (Buharı ve Müslim)`
    ,
    `Bir adam mescidde kaybettiği bir şeyi arayarak 'Kim bana kırmızı deveyi gösterecek?' demişti. Bunun üzerine Resûlüllah (s.a.v) şöyle buyurdu; Bulamayasın! Şüphesiz ki mescidler ne için yapılmışsa, onun için yapılmıştır- o maksatla kullanılır. (Müslim)`
    ,
    `Mescidde bir şey satan veya satın alan birini gördüğünüz zaman 'Allah senin ticaretine kâr vermesin' deyiniz. Mescidde kaybettiği bir şeyi arayan birini gördüğünüzde de 'Allah onu sana geri getirmesin' deyiniz. (Tirmizi rivayet etmiş ve hadis hasendir demiştir.)`
    ,
    `Kim mescidde kaybettiği bir şeyini arayan birini işitirse, 'Allah onu sana geri getirmesin' desin. Çünkü mescidler bunun için yapılmamıştır. (Müslim)`
    ,
    `Resûlüllah (s.a.v) -mescidin- kıble duvarında balgam veya tükürük, ya da sümük gördü; hemen onu kazıdı. (Buhari ve Müslim)`
    ,
    `Mescide tükürmek büyük bir hatadır. Onun keffareti ise gömülmesidir. (Buharı ve Müslim)`
    ,
    `Resûlüllah (s.a.v) pislik yiyen devenin üzerine binmeyi yasak etmiştir. (Ebu Davud,sahih isnatla rivayet etmiştir.)`
    ,
    `Çan, şeytanın çalgılarındandır. (Müslim)`
    ,
    `Melekler, yanlarında köpek veya çan bulunduran bir gruba arkadaşlık etmezler. (Müslim)`
    ,
    `Kim -ziraat ve sürü köpeği hariç- köpek barındırırsa, o kişinin amelinden her gün bir kırat eksilir. (Buhari ve Müslim)`
    ,
    `Resûlüllah (s.a.v)'i şöyle buyururken işittim; Kim -av veya sürü köpeği hariç- köpek beslerse, o kişinin sevabından her gün iki kırat eksilir," (Buhari ve Müslim)`
    ,
    `Cebrail (a.s) Resûlüllah (s.a.v)'e geleceğini vaad etmişti. Fakat gecikince Resûlüllah (s.a.v)'e beklemek ağır gelmiş ve dışarı çıkmıştı. Hemen Cebrail kendisini karşıladı. Resûlüllah (s.a.v) gecikmesinden dolayı şikayetini belirtince Cebrail şöyle dedi: Biz, içinde köpek ve -canlıya ait- resim bulunan bir eve asla girmeyiz. (Buhari)`
    ,
    `İçinde  köpek  ve  -canlı-  resmi  bulunan  bir  eve  melekler  asla  girmez. (Buharı ve Müslim)`
    ,
    `Bu -canlı- resimleri yapanlara kıyamet günü azap edilir ve kendilerine denilir ki; Yarattıklarınıza can verin bakalım! (Buharı ve Müslim)`
    ,
    `Peygamber (a.s) kuş uçmasında uğursuzluk aramazdı. (Ebu Davud, sahih bir isnatla rivayet etmiştir.)`
    ,
    `Hastalıkda -kendiliğinden- bulaşma olmaz. Kuş uçmasında da uğursuzluk uğursuzluk yoktur. Eğer bir şeyde uğursuzluk olsaydı, evde, kadında ve atta olurdu. (Buhari ve Müslim)`
    ,
    `Hastalıkda -kendiliğinden- bulaşma olmaz. Kuş uçmasında da uğursuzluk yoktur. Fe'l ise benim hoşuma gider. Asahab; 'Fe'l nedir?'dediklerinde, 'Güzel söz' buyurdu. (Buhari ve Müslim)`
    ,
    `Resûlüllah (s.a.v) köpek satışından elde edilen parayı, zina parasını ve falcının kazancını yasaklamıştır. (Buharı ve Müslim)`
    ,
    `Kuş ötmesinde uğur veya uğursuzluk aramak, kuş uçmasıyla ve ufak taşlarla fal bakmak sihir çeşitlerindendir. (Ebu Davud, sahih bir isnatla rivayet etmiştir.)`
    ,
    `Kim gelecekten haber veren birine gidip ona bir şey sorar ve onu tasdik ederse, o kişinin kırk günlük kıldığı namaz kabul olunmaz. (Müslim)`
    ,
    `Resûlüllah (s.a.v) bizimle biat ettiği zaman, ölünün arkasından feryat etmeyeceğimize dair bizden söz aldı. (Buharı ve Müslim)`
    ,
    `Kimin (ölümüne) yüksek sesle ağlanır ve feryâd-ı figan edilirse kıyamet günü kendisine böyle ağlanıldığı için azap olunur. (Buharı ve Müslim)
    `
    ,
    `Kim -ölü için- yanaklarına vurur, yakalarını yırtar ve cahiliye âdeti üzere bağırıp çağırırsa bizden değildir. (Buharİ ve Müslim)`
    ,
    `Ölü, kendisi için ağlanıp feryâd-ı figan edilmesinden dolayı kabrinde azap görür-rahatsız olur. (Buhari ve Müslim)`
    ,
    `Faydasız hususlarda- meşakkat yüklenmekten men olunduk. (Buhari)`
    ,
    `Bir gece Medine'de bir ev, hane halkıyla birlikte tutuşup yanmıştı. Onların durumu Resûlüllah (s.a.v)'e anlatılınca şöyle buyurdu; Şüphesiz ki bu ateş, sizin düşmanınızdır. Uyuyacağınız zaman onu söndürünüz. (Buhari ve Müslim)`
    ,
    `Uyuyacağınız zaman evlerinizde yanan ateş bırakmayınız." (Buhari ve Müslim)`
    ,
    `Sizden birinizin ayakkabısının bağı koptuğunda, onu düzeltinceye kadar diğer bir teki ile yürümesin." (Müslim)`
    ,
    `Sizden biriniz tek ayakkabı ile yürümesin; ya ikisini de birden giysin, ya da ikisini de çıkarsın. (Buharı ve Müslim)`
    ,
    `Sizden biriniz işediği zaman tenasül aletini sağ eliyle tutmasın, sağ eliyle kurulanıp temizlenmesin ve kabın içine nefes vermesin. (Buharı ve Müslim)`
    ,
    `Kim bizim emrimize -dinimize- uygun olmayan bir iş yaparsa, o yaptığı reddedilmiştir. (Müslim)`
    ,
    `Ak tüyleri koparmayınız. Çünkü onlar kıyamet günü müslümanın nuru olacaktır. (Hadis hasendir, Ebu Davud, Tirmizi ve Neseî hasen isnatlarla rivayet etmişlerdir. Tirmizi, hadis hasendir demiştir.)`
    ,
    `Resûlüllah (s.a.v) emanet saç -peruk- takana ve takdırana, vücuduna dövme yapana ve yaptırana lanet etmiştir. (Buhari ve Müslim)`
    ,
    `Bir kadın Peygamber (a.s)'a gelip; 'Ey Allah'ın Resulü, kızıma kızamık isabet etti ve saçları döküldü. Ben ise onu evlendirdim; ona emanet saç -peruk- takabilir miyim? Resûlüllah (s.a.v) şöyle buyurdu; Allah peruk takana da takdırana da lanet etmiştir. (Buharı ve Müslim)`
    ,
    `Resûlüllah (s.a.v), başının saçlarının bir kısmının tıraş edilip bir kısmının bırakıldığı küçük bir çocuk gördü. Onları böyle yapmaktan yasaklayarak şöyle buyurdu; Ya hepsini tıraş ediniz, ya da hepsini bırakınız. (Ebu Davud, sahih bir isnatla Buhari ve Müslim şartı üzere rivayet etmiştir.`
    ,
    `Resûlüllah (s.a.v) başın bir kısmının tıraş edilip bir kısmının bırakılmasını yasaklamıştır. (Buharı ve Müslim)`
    ,
    `Ebu Bekir (r.a)'ın babası Ebu Kuhâfe, Mekke'nin fethi günü başı ve sakalı kar gibi beyaz bir halde getirilir. Resûlüllah (s.a.v) şöyle buyurur; Bu -beyaz- saçları değiştiriniz ve siyaha boyamaktan da kaçınınız." (Müslim)`
    ,
    `Şüphesiz Yahudiler ve Hristiyanlar -saçlarını- boyamazlar. Siz ise onlara aykırı hareket ediniz." (Buhari ve Müslim)`
    ,
    `Sol elle yemeyiniz. Çünkü şeytan sol eliyle yer, sol eliyle içerdi." (Müslim)`
    ,
    `Resûlüllah (s.a.v) kadın elibesesi giyen erkeğe ve erkek elbisesi giyen kadına lanet etmiştir. (Ebu Davud, sahih bir isnatla rivayet etmiştir.)`
    ,
    `Resûlüllah (s.a.v) -giyim ve davranışlarında- kadınlara benzemeye çalışan erkeklere ve erkeklere benzemeye çalışan kadınlara lanet etmiştir. (Buhari)`
    ,
    `Sizden biriniz mahremi dışında bir kadınla sakın başbaşa kalmasın. (Buhari ve Müslim)`
    ,
    `Resûlüllah (s.a.v)'e ani bakmaktan sordum, şöyle buyurdu; Bakışını hemen çevir! (Müslim)`
    ,
    `Resûlüllah (s.a.v)'e denildi ki; Bir adam hayırlı bir amel yapar ve insanlar da ondan dolayı bu kişiyi methederse, bu duruma ne dersiniz? Şöyle buyurdu; Bu durum, mü'minin peşin müjdelenmesidir. (Müslim)`
    ,
    `Kim -yaptığı iyiliği- işittirirse, Allah da onun -ayıplarını-işittirir. Kim riya - için amel- yaparsa, Allah da onun iki yüzlülüğünü ortaya çıkarır. (Buhari ve Müslim)`
    ,
    `Biz sultanlarımızın huzuruna girdiğimizde onlara, yanlarından çıktığımızda konuştuklarımızın tersini söylüyoruz -ne dersin? İbn-i Ömer (r.a) şöyle demiştir;
    Biz bunu, Resûlüllah (s.a.v) zamanında münafıklık sayardık. (Buhari)
    `
    ,
    `Ben, ortaklığa ihtiyacı olmayanların en zenginiyim. Kim benden başka birini bana ortak koşarak bir amel yaparsa, onu da ortak koştuğunu da başbaşa bırakırım. (Müslim)`
    ,
    `Resûlüllah (s.a.v) faiz yiyene de yedirene de lanet etmiştir. (Müslim)`
    ,
    `Hibesine dönen, kusmuğuna dönüp -yiyen- gibidir. (Buhari ve Müslim)`
    ,
    `Zenginin, borcunu ödememesi zulümdür. Sizden birinizin -alacağı- bir zengine havale edilirse havaleyi kabul etsin. (Buhari ve Müslim)`
    ,
    `Kim bir köleyi işlemediği bir suçtan dolayı cezalandırır veya tokatlarsa, onun keffareti o köleyi azad etmesidir. (Müslim)`
    ,
    `Resûlüllah (s.a.v) hayvanların hapsedilerek-telef-edilmesini yasakladı. (Buhari ve Müslim)`
    ,
    `Bir kadın, ölünceye kadar bir kediyi hapsettiğinden dolayı azap olundu ve bu yüzden ateşe girdi. Onu hapsettiği zaman ona hiçbir şey yedirmemiş, içirmemiş ve yer haşerelerini yemesi için serbset de bırakmamış idi." (Buhari ve Müslim)`
    ,
    `Siz üç kişi olduğunuz zaman iki kişi, insanlara karışıp dağılıncaya kadar diğer üçüncü kişiyi bırakarak fısıldaşmasın. Çünkü bu durum onu üzer. (Buharı ve Müslim)`
    ,
    `Üç kişi bir araya geldiğinde, ikisi diğer üçüncüyü bırakıp da kendi arasında fısıldaşmasın. (Buharı ve Müslim)`
    ,
    `Bir müslümana, kardeşinden -dargın olarak- üç günden fazla ayrı kalması helal değildir. Kim üç günden fazla dargın kalır da ölürse, cehennem ateşine girer. (Ebu Davud, Buharı ve Müslim şartı üzere sahih bir isnatla rivayet etmiştir.)`
    ,
    `Ameller Pazartesi ve Perşembe günleri huzura arzolunur. Kardeşiyle arasında düşmanlık bulunan kişi hariç, Allah'a ortak koşmayan her kişiyi Cenab-ı Allah affeder. Allah (c.c) ; Şu iki kişiyi barışıncaya kadar bırakınız, buyurur. (Müslim)`
    ,
    `Bir müslümana, kardeşinden -dargın olarak- üç günden fazla ayrı kalması helal değildir; karşılaştıkları zaman biri bu tarafa, diğeri de öbür tarafa dönmektedirler. Onlardan en hayırlısı, selam -verip konuşmaya- ilk başlayandır. (Buhari ve Müslim)`
    ,
    `Bir adam 'İnsanlar helak oldu'dediği zaman, o kişi onların en çok helak olanı olmuş olur. (Müslim)`
    ,
    `Şüphesiz ki Allah bana, hiçbir kimsenin diğerine azgınlık yapmayıp, birinin diğerine karşı üstünlük taslamayacağı kadar birbirinize tevazu göstermenizi vahyetti. (Müslim)`
    ,
    `Yüce Allah şöyle buyurmuştur; Ben kıyamet günü üç kişinin hasmıyım. Benim adımı söyleyerek verdiği sözden cayan adam, hür bir kişiyi satıp parasını yiyen adam ve bir işçiyi ücret karşılığında kiralayıp ondan faydanan, ama parasını vermeyen adam. (Buhari)`
    ,
    `Kıyamet günü sözünden cayan herkes için dikilecek bir bayrak vardır ve denilir ki; Bu, sözünden cayan falancanın bayrağıdır. (Buhari ve Müslim)`
    ,
    `Resûlüllah (s.a.v)'e bir adam alış verişte aldatıldığını anlattı. Bunun üzerine Resûlüllah (s.a.v) şöyle buyurdu; Sen kiminle alış veriş yaparsan 'İslamda aldatma yoktur'de. (Buharı ve Müslim)`
    ,
    `Peygamber (a.s), almaya niyeti olmadığı halde müşteri kızıştırmak için malın fiyatını artırmayı yasaklamıştır. (Buharı ve Müslim)`
    ,
    `Kim bize karşı silah taşırsa, bizden değildir. Kim bizi aldatırsa, bizden değildir. (Müslim)`
    ,
    `İnsanların arasında yaygın iki huy vardır ki, onlar kendileri için -nimete- küfürdür. Bunlar; Nesebe dil uzatıp sövmek ve ölülere yüksek sesle ağlayıp feryâd-ı figan etmektir. (Müslim)`
    ,
    `Kardeşinin felaketinden dolayı sevinç gösterme. Sonra Allah ona acır; seni de belaya çarptırır. (Tirmizi rivayet etmiş ve hadis hasendir demiştir.)`
    ,
    `Bir kişiye, müslüman kardeşini hor görmesi şer olarak yeter. (Müslim)`
    ,
    `Akrabalık bağlarını kesen cennete giremez. (Buhari ve Müslim)`,
    `Yüce Allah size, annelere isyan etmeyi, fakirlerin haklarını-vermemeyi, hakkı olmayan şeyi istemeyi ve kız çocuklarını diri diri toprağa gömmeyi haram kıldı. Sizin dedi kodu yapmanızı, çok soru sormanızı ve malınızı - gereksiz yere- zayi etmenizi hoş karşılamadı. (Buhari ve Müslim)`,
    `İyiliklerin en güzeli, kişinin babasının dostlarıyla ilişkileri, dostluğu sürdürmesidir. (Müslim)`,
    `Kadın, dört şey için nikah edilir: Malı için, soyu sopu için, güzelliği için ve dindarlığı için. Dindar olanını seç ki, mutlu olasın-ellerin topraklansın. (Buharı ve Müslim)`,
    `"Kişi, dostunun dini üzeredir. O halde herkes, kimi dost edindiğine -iyi- baksın." (Ebu Davud)`,
    `Bir adam Resûlüllah (s.a.v)'e gelip şöyle dedi: 'Bir toplumu sevdiği halde onlara katılamayan kişi hakkında ne dersiniz?' Resûlüllah (s.a.v) şöyle buyurdu: Kişi, sevdiği ile beraberdir. (Buharı ve Müslim)`,
    `Kim sabah namazını kılarsa, o kişi Allah'ın koruması altındadır. Sakın Allah sizden, zimmetinden dolayı bir şey istemesin. Çünkü O, zimmetinden dolayı kimden bir şey isterse onu yakalar, sonra da onu yüz üstü cehennem ateşine atar. (Müslim)`,
    `Onlardan bir kısmını cehennem ateşi topuğuna kadar, bir kısmını dizlerine kadar, bîr kısmını beline kadar, bir kısmını da boynu na kadar sarar. (Müslim)`,
    `Kıyamet günü insanlar o kadar terlerler ki, terleri yetmiş arşın yerin içine işler.Kulaklarına varıncaya kadar ter onları kaplar.	(Buharı ve Müslim)`,
    `Bir bedevî Resûlüllah (s.a.v)'e gelerek dedi ki: 'Ey Allah'ın Resulü - cehenneme girmeyi- gerektiren sebepler nelerdir? Resûlüllah (s.a.v) şöyle buyyurdu: Kim Allah'a şirk koşmadan ölürse cennete girer; kim O'na şirk koştuğu halde ölürse ateşe girer. (Müslim)`,
    `Eğer siz günah işlememiş olsaydınız, elbette Allah günah işleyen kimseler yaratırdı. Onlar	Allah'dan	bağışlanmalarını isterler,	O	da	onları bağışlardı, (Müslim)`,
    `Beş vakit namazın misali, sizden birinizin kapısının önünde akan, her gün beş defa girip yıkandığı, suyu bol bir nehir gibidir (Müslim)`,
    `Resûlüllah (s.a.v)'i şöyle buyururken işittim: Hangi bir müslüman ölür de, cenazesi üzerine Allah'a hiçbir şeyi ortak koşmayan kırk kişi namaza durursa, Allah o insanları ölen o kişiye şefaatçi kılar. (Müslim)`,
    `Mü'min, eğer Allah'ın katındaki azabı bilseydi, hiç biri cenneti ümit edemezdi. Kafir de eğer Allah'ın katındaki rahmeti bilseydi, hiç biri cennetinden ümit kesmezdi. (Müslim)`,
    `Altının, gümüşün, kadifenin ve yünlü kumaşın kulu -olan-helak oldu. Eğer kendilerine -bunlar- verilirse hoşnut olur, verilmezse hoşnut olmazlar. (Buhari)`,
    `Eğer dünyanın Allah indinde sivrisineğin kanadı kadar bir değeri olsaydı, kafire ondan bir yudum su bile içirmezdi. (Tirmizi rivayet etmiş ve Hadis hasendir, sahihtir demiştir.)`,
    `Müslüman olup da kendisine yetecek kadar rızkı bulunan ve Allah'ın kendisine lütfettiği nimetlere kanaat getiren kimse muhakkak kurtuluşa ermiştir. (Müslim)`,
    `Zenginlik, mal çokluğundan değildir. Esas zenginlik gönül zenginliğidir. (Buhari ve Müslim)`,
    `Müslüman olup da kendisine yetecek kadar rızkı bulunan ve Allah'ın kendisine ihsan ettiğine kanaat eden kimse kurtuluşa ermiştir. (Müslim)`,
    `Kim mal artırmak için insanlardan dilenirse, o sadece ateş dilenmiş olur. Artık isterse dilenmeyi artırsın, isterse azaltsın. (Müslim)`,
    `Kime bir yokluk isabet eder de onu insanlara açarsa, yokluğu düzelmez. Kim de onu Allah'a arz ederse, Allah'ın ona er veya geç bir rızık kapısı açacağı umulur. (Ebu Davud ve Tirmizi rivayet etmiş; hadis hasendir demiştir.)`,
    `281-	Sevbân (r.a)'dan, Resûlüllah (s.a.v)'in şöyle buyurduğu rivayet edilmiştir:

    Kim bana, insanlardan hiçbir şey istemeyeceğine söz verirse, ben de onun cennete girmesine kefil olurum. Sevbân dedi ki: Ben, bundan sonra- kimseden bir şey istemedim. (Ebu Davud sahih bir isnatla rivayet etmiştir.)
    `,
    `
    Yoksul, insanları dolaşıp da kendisine bir iki lokma ve bir iki hurma verdiğin kimse değildir. Asıl yoksul, kendisini ihtiyaçsız kılacak bir varlık bulamayan, hali anlaşılıp da kendisine sadaka verilemeyen, insanlardan bir şey dilenmek için dikilmeyen kimsedir. (Buharı ve Müslim)
    `,
    `Ancak iki kişiye imrenilir; Allah'ın kendisine mal verip de o malı Hak yolda tüketmeye muvaffak kıldığı kimse ile Allah'ın kendisine hikmet -ilim.irfan- verdiği, onunda o hikmetle hüküm verip, çevresine onu öğrettiği kimsedir. (Buharı ve Müslim)`,
    `Yüce Allah şöyle demiştir: Ey Adem oğlu, Allah yolunda-sen harca ki sana da harcansın. (Buharı ve Müslim)`,
    `Sadaka vermek malı eksiltmez. Allah (c.c.) affeden kulun şerefini artırır. Allah (c.c) için tevazu yapan bir kişiyi, Allah (c.c) mutlaka yüceltir. (Müslim)`,
    `Zulümden kaçınınız; çünkü zulüm kıyamet günü -zulmedeni saran- karanlıklar olur. Cimrilikten de sakınınız; çünkü cimrilik sizden öncekileri helak etti. Onları birbirlerinin kanlarını akıtmaya ve haramları helal addetmeye sevk etti.  (Müslim)`,
    `Ancak iki kişiye imrenilir. Bunlar; Allah'ın kendisine mal verip de onu Hak yolda tüketmeye muvaffak kıldığı kimse ile, Allah tarafından kendisine hikmet - ilim, irfan- verilip onunla hükmeden ve onu öğreten kimsedir. (Buharı ve Müslim)`,
    `Sizden biriniz ölümü arzulamasın. Çünkü eğer iyi biri ise iyilikleri artmış olur, eğer kötü biri ise olur ki tevbe eder. (Buharı ve Müslim. Bu lafız Buharı'nin lafzıdır.)`,
    `İyilik  güzel  ahlaktır.  Günah  ise,  içine  bir  şüphe  düşüren  ve  insanların haberdar olmalarını istemediğin şeydir. (Müslim)`,
    `Bir kul, sakıncalı olandan kaçınmak için, sakıncası olmayan şeyi terk etmedikçe muttakîlerden -Allah'dan korkanlardan- olamaz. (Tirmizi rivayet etmiş ve Hadis hasendir demiştir.)`,
  ]
  export default gercekHadisJson
  