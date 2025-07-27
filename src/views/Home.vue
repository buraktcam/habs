<template>
  <div class="w-full bg-[#262626]">
  <div class="h-screen w-full flex flex-col md:flex-row font-sans text-[#262626]" style="font-family: 'Montserrat', sans-serif; color: #262626;">
    <!-- Left Section -->
    <div class="w-full md:w-7/12 flex flex-col">
      <!-- Top part of Left Section -->
      <div class="bg-[#F0F0F0] flex-grow flex flex-col justify-between p-4 md:p-8">
        <header class="w-full flex justify-between items-center">
          <span class="font-bold text-base md:text-lg">HABS.</span>
          <span class="font-semibold text-sm md:text-base md:hidden">Project Studio</span>
        </header>
        <div class="flex-grow flex items-center justify-start pl-2 md:pl-4">
          <div class="flex items-end" style="font-family: 'Anton', sans-serif;">
            <h1 class="text-6xl sm:text-7xl md:text-[12.5vw] font-black leading-none" style="letter-spacing: 0.08em;">HABS</h1>
            <div class="w-3 h-3 sm:w-4 sm:h-4 md:w-[2.2vw] md:h-[2.2vw] bg-[#262626] self-end mb-3 md:mb-5 ml-2 md:ml-3"></div>
            <div class="flex flex-col mb-1 sm:mb-2 md:mb-[1.5vw] ml-4 sm:ml-8 md:ml-56 lg:ml-60 xl:ml-10" style="font-family: 'Anton', sans-serif;">
              <span class="text-lg sm:text-xl md:text-[3.5vw] font-black leading-none tracking-widest">PROJECT</span>
              <span class="text-lg sm:text-xl md:text-[3.5vw] font-black leading-none tracking-widest mt-2 md:mt-12">STUDIO</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Bottom part of Left Section -->
      <div class="bg-[#EC4E34] h-auto md:h-[40vh] min-h-[200px] md:min-h-[250px] flex-shrink-0 p-4 md:p-10 flex flex-col md:flex-row items-center">
        <button @click="scrollToNext" class="w-16 h-16 md:w-32 md:h-32 border-[1.5px] border-[#262626] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#262626] hover:text-white transition-colors group mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-14 md:w-14 text-[#262626] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 12h15" />
          </svg>
        </button>
        <div class="ml-0 md:ml-16 text-center md:text-left">
            <p class="text-lg sm:text-xl md:text-5xl font-medium leading-tight">
              Projeleri tasarlar,<br>
              sonra <span class="underline underline-offset-2 md:underline-offset-8 decoration-[1.5px]">dünyasını kurarız.</span>
            </p>
        </div>
      </div>
    </div>

    <!-- Right Section (Image) -->
    <div class="w-full md:w-5/12 flex-col hidden md:flex">
       <div class="bg-[#F0F0F0] text-right p-6 md:p-8">
          <span class="font-semibold text-base">Project Studio</span>
       </div>
       <div class="flex-grow h-0">
         <img src="@/assets/1.png" alt="Abstract orange and green sculpture" class="w-full h-full object-cover">
       </div>
    </div>
  </div>

  <!-- HAKKIMIZDA Slaytı -->
  <section class="min-h-screen w-full flex flex-col bg-white text-[#262626]" style="color: #262626;">
    <!-- Üst Bar -->
    <div class="w-full px-4 md:px-8 pt-4 md:pt-6">
      <div class="flex justify-between items-center w-full">
        <span class="font-bold text-base md:text-lg">HABS.</span>
        <span class="font-bold text-base md:text-lg">Project Studio</span>
      </div>
    </div>
    
    <!-- Çizgi -->
    <div class="mx-4 md:mx-12 my-4 md:my-6">
      <div class="w-full md:w-[65%] border-t-2 md:border-t-[3.5px] border-[#262626]"></div>
    </div>
    
    <!-- İçerik -->
    <div class="flex flex-col md:flex-row w-full flex-1 px-4 md:px-12 gap-4 md:gap-8">
      <div class="flex flex-col justify-start w-full md:w-1/2">
        <span class="font-black text-[15vw] md:text-[10vw] leading-none text-[#262626] mb-4 md:mb-0" style="font-family: 'Anton', sans-serif;">HAKKIMIZDA</span>
      </div>
      <div class="flex flex-col justify-start w-full md:w-1/2 text-base md:text-[1.5vw] font-normal">
        <p>HABS. Project Studio olarak yeni nesil bir proje ajansıyız.<br>Kendi projelerimizi geliştiriyor, yaratıcı zihinlerin fikirlerine ortak oluyoruz.</p>
        <p class="mt-4 md:mt-6">Doğru fikirleri, doğru markalarla buluşturuyor;<br>iletişim süreçlerinin tümünü stratejik bir bakışla üstleniyoruz.</p>
      </div>
    </div>
    
    <!-- Alt görsel -->
    <div class="w-full flex justify-center mt-4 md:mt-3 pb-4 px-4 md:px-0">
      <div class="w-full">
                 <img src="@/assets/2.png" alt="Ofis" class="w-full object-contain rounded-md" style="max-height: 200px; background: #fff;" />
      </div>
    </div>
  </section>

  <!-- EKİBİMİZ Slaytı -->
  <section class="min-h-screen w-full flex flex-col bg-[#F7F7F7] text-[#262626]" style="color: #262626;">
    <!-- Üst Bar -->
    <div class="w-full px-4 md:px-12 pt-4 md:pt-8">
      <div class="flex justify-between items-center w-full">
        <span class="font-bold text-base md:text-xl">HABS.</span>
        <span class="font-bold text-base md:text-xl">Project Studio</span>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-start w-full mt-6 md:mt-8 relative">
        <span class="font-black text-[15vw] md:text-[10vw] leading-none mb-4 md:mb-0" style="font-family: 'Anton', sans-serif;">EKİBİMİZ</span>
        
        <div class="bg-[#EC4E34] text-white text-sm md:text-2xl p-4 md:p-12 w-full md:w-[45vw] md:min-w-[500px] md:max-w-[800px] rounded font-normal">
          Her biri kendi sektörlerinde 10+ senelik deneyime sahip üç kurucu ile yola çıkan HABS. Project Studio, üzerinde çalıştığı projelerin ihtiyaçlarına göre en uygun ekipleri bir araya getirerek hızlı ve hedef odaklı bir yaklaşımla ilerliyoruz.
        </div>
      </div>
    </div>
    
    <!-- Ekip Kartları -->
    <div class="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-20 flex-1 px-4 md:px-12 pb-6 md:pb-12 mt-6 md:mt-12">
      <!-- Gizem Diler -->
      <div class="flex flex-col items-center w-full md:w-[20%] p-0">
        <img src="@/assets/3.png" alt="Gizem Diler" class="w-48 md:w-full aspect-square object-cover mb-4 md:mb-6 border-[6px] md:border-[10px] border-[#EC4E34]" />
        <div class="w-full text-center md:text-left px-2 md:px-4 pb-4 md:pb-6">
          <div class="font-extrabold text-lg md:text-2xl mb-2">GİZEM DİLER</div>
          <div class="font-semibold text-base md:text-lg mb-2">KURUCU ORTAK</div>
          <div class="text-sm md:text-lg">İş Geliştirme & Sponsorluk Direktörü</div>
        </div>
      </div>
      
      <!-- Doğan Kür -->
      <div class="flex flex-col items-center w-full md:w-[20%] p-0 relative">
        <div class="bg-[#EC4E34] absolute inset-x-[-20px] md:inset-x-[-50px] top-[40%] md:top-[50%] bottom-[-20px] md:bottom-[-45px] z-0"></div>
        <img src="@/assets/4.png" alt="Doğan Kür" class="w-48 md:w-full aspect-square object-cover mb-4 md:mb-6 relative z-10" />
        <div class="w-full text-center md:text-left px-2 md:px-4 pb-4 md:pb-6 relative z-10">
          <div class="font-extrabold text-lg md:text-2xl mb-2">DOĞAN KÜR</div>
          <div class="font-semibold text-base md:text-lg mb-2">KURUCU ORTAK</div>
          <div class="text-sm md:text-lg">Strateji & İletişim Direktörü</div>
        </div>
      </div>
      
      <!-- Sarp Dökmeci -->
      <div class="flex flex-col items-center w-full md:w-[20%] p-0">
        <img src="@/assets/5.png" alt="Sarp Dökmeci" class="w-48 md:w-full aspect-square object-cover mb-4 md:mb-6 border-[6px] md:border-[10px] border-[#EC4E34]" />
        <div class="w-full text-center md:text-left px-2 md:px-4 pb-4 md:pb-6">
          <div class="font-extrabold text-lg md:text-2xl mb-2">SARP DÖKMECİ</div>
          <div class="font-semibold text-base md:text-lg mb-2">KURUCU ORTAK</div>
          <div class="text-sm md:text-lg">Kreatif Direktör & Uygulayıcı Yapımcı</div>
        </div>
      </div>
    </div>
  </section>

  <!-- HEDEFİMİZ Slaytı -->
  <section class="min-h-screen w-full flex flex-col md:flex-row bg-[#F7F7F7] text-[#262626]" style="color: #262626;">
    <!-- Sol Taraf -->
    <div class="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-4 md:py-8 bg-[#F7F7F7]">
      <div class="mb-4 md:mb-8">
        <span class="font-bold text-base md:text-xl text-[#262626]">HABS.</span>
      </div>
      <div class="mb-6 md:mb-8">
        <span class="font-black text-[15vw] md:text-[10vw] leading-none text-[#262626]" style="font-family: 'Anton', sans-serif;">HEDEFİMİZ</span>
      </div>
      <div class="flex-1 flex items-end">
                 <img src="@/assets/6.png" alt="Çalışma Masası" class="w-full object-cover rounded-lg" style="max-height: 40vh;" />
      </div>
    </div>
    
    <!-- Sağ Taraf -->
    <div class="w-full md:w-1/2 bg-[#EC4E34] flex flex-col items-start px-4 md:px-12 py-4 md:py-8 relative h-auto md:h-full">
      <div class="w-full text-left md:text-right mb-6 md:mb-12">
        <span class="font-bold text-base md:text-xl text-[#262626]">Project Studio</span>
      </div>
      <div class="flex-1 flex items-center">
        <div class="text-[#262626] text-lg md:text-4xl font-bold leading-relaxed max-w-[95%] py-4 md:py-8">
          Yaratıcı projelerin sadece gerçekleşmesini değil,<br>
          iz bırakmasını sağlamak.<br> 
          Kendi fikirlerimizi ve yaratıcı zihinlerin <br>
          projelerini, doğru markalarla buluşturarak <br>
          etkili, özgün ve sürdürülebilir deneyimlere dönüştürmek.
        </div>
      </div>
    </div>
  </section>

  <!-- NE YAPIYORUZ Slaytı -->
  <section class="min-h-screen w-full flex flex-col bg-[#F7F7F7] text-[#262626]" style="color: #262626;">
    <!-- Üst Bar -->
    <div class="w-full px-4 md:px-8 pt-4 md:pt-6">
      <div class="flex justify-between items-center w-full">
        <span class="font-bold text-base md:text-lg">HABS.</span>
        <span class="font-bold text-base md:text-lg">Project Studio</span>
      </div>
    </div>
    
    <!-- Ana İçerik -->
    <div class="flex-1 px-4 md:px-12 pb-6 md:pb-12">
      <!-- Başlık -->
      <div class="mb-6 md:mb-8">
        <span class="font-black text-[15vw] md:text-[10vw] leading-none text-[#262626]" style="font-family: 'Anton', sans-serif;">NE YAPIYORUZ?</span>
      </div>
      
      <!-- Kartlar - Mobilde dikey, Desktop'ta yatay -->
      <div class="flex flex-col md:flex-row gap-2 md:gap-4 md:h-[55vh] md:items-end">
        <!-- PROJE GELİŞTİRME -->
        <div class="flex-1 bg-[#EC4E34] text-white p-4 md:p-8 flex flex-col justify-start items-center text-center h-48 md:h-full">
          <h3 class="text-base md:text-2xl font-bold mb-3 md:mb-6 tracking-wide">PROJE GELİŞTİRME</h3>
          <p class="text-sm md:text-2xl font-medium leading-relaxed">
            Yaratıcı fikirleri stratejik bir temel üzerine inşa eder; uygulanabilir projelere dönüştürürüz.
          </p>
        </div>
        
        <!-- İLETİŞİM STRATEJİSİ -->
        <div class="flex-1 bg-[#EC4E34] text-white p-4 md:p-8 flex flex-col justify-start items-center text-center h-48 md:h-[80%]">
          <h3 class="text-base md:text-2xl font-bold mb-3 md:mb-6 tracking-wide">İLETİŞİM STRATEJİSİ</h3>
          <p class="text-sm md:text-2xl font-medium leading-relaxed">
            Doğru kitleyi, doğru mesajla ve doğru kanaldan ulaşmak için bütünsel iletişim çözümleri sunarız.
          </p>
        </div>
        
        <!-- SPONSORLUK -->
        <div class="flex-1 bg-[#EC4E34] text-white p-4 md:p-8 flex flex-col justify-start items-center text-center h-48 md:h-full">
          <h3 class="text-base md:text-2xl font-bold mb-3 md:mb-6 tracking-wide">SPONSORLUK</h3>
          <p class="text-sm md:text-2xl font-medium leading-relaxed">
            Projeleri doğru markalarla buluşturur, anlamlı ve sürdürülebilir iş birlikleri tasarlarız.    
          </p>
        </div>
        
        <!-- PRODÜKSİYON -->
        <div class="flex-1 bg-[#EC4E34] text-white p-4 md:p-8 flex flex-col justify-start items-center text-center h-48 md:h-[80%]">
          <h3 class="text-base md:text-2xl font-bold mb-3 md:mb-6 tracking-wide">PRODÜKSİYON</h3>
          <p class="text-sm md:text-2xl font-medium leading-relaxed">
            Görsel kimlikten video üretimine, sosyal medya içeriklerinden lansman materyallerine kadar tüm yaratıcı çıktıları üretiriz.
          </p>
        </div>
        
        <!-- ETKİ TASARIMI -->
        <div class="flex-1 bg-[#EC4E34] text-white p-4 md:p-8 flex flex-col justify-start items-center text-center h-48 md:h-full">
          <h3 class="text-base md:text-2xl font-bold mb-3 md:mb-6 tracking-wide">ETKİ TASARIMI</h3>
          <p class="text-sm md:text-2xl font-medium leading-relaxed">
            Hazırladığımız içeriklerin stratejik dağıtımını planlar, projenin etki alanını genişletiriz.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- YAKLAŞIMIMIZ Slaytı -->
  <section class="min-h-screen w-full flex flex-col md:flex-row text-[#262626] bg-[#262626]" style="color: #262626;">
    <!-- Sol Taraf - Siyah Arka Plan -->
    <div class="w-full md:w-1/2 bg-[#262626] text-white flex flex-col px-4 md:px-12 py-4 md:py-8">
      <div class="mb-6 md:mb-8 flex justify-between items-center w-full">
        <span class="font-bold text-base md:text-xl text-white">HABS.</span>
        <span class="font-bold text-base md:text-xl text-white">Project Studio</span>
      </div>
      <div class="mb-6 md:mb-8">
        <span class="font-black text-[15vw] md:text-[8vw] leading-none text-white" style="font-family: 'Anton', sans-serif;">YAKLAŞIMIMIZ</span>
      </div>
      <div class="w-full h-px bg-white mt-6 md:mt-12 mb-6 md:mb-8"></div>
      
      <!-- Yaklaşım Maddeleri -->
      <div class="flex-1 space-y-6 md:space-y-10">
        <div>
          <h3 class="text-xl md:text-3xl font-bold mb-4 md:mb-12">1. PROAKTİF DÜŞÜNÜRÜZ</h3>
          <p class="text-base md:text-2xl font-normal leading-relaxed pr-2 md:pr-4">
            Brief beklemeden harekete geçer, proaktif fikirler üretiriz.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl md:text-3xl font-bold mb-4 md:mb-12">2. SÜRECİ SAHİPLENİRİZ</h3>
          <p class="text-base md:text-2xl font-normal leading-relaxed pr-2 md:pr-4">
            Fikir aşamasından uygulamaya kadar yanınızdayız.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl md:text-3xl font-bold mb-4 md:mb-12">3. MARKALAR İÇİN ANLAM ÜRETİRİZ</h3>
          <p class="text-base md:text-2xl font-normal leading-relaxed pr-2 md:pr-4">
            Her projede yalnızca çıktıyı değil, markaya katacağı anlamı ve uzun vadeli etkiyi merkeze alırız.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Sağ Taraf -->
    <div class="w-full md:w-1/2 flex flex-col">
      <!-- Üst Kısım - Görsel -->
      <div class="bg-white h-64 md:h-[50vh]">
        <img src="@/assets/7.png" alt="Çalışma Masası" class="w-full h-full object-cover" />
      </div>
      
      <!-- Alt Kısım - Turuncu Alan -->
      <div class="bg-[#EC4E34] flex items-end justify-end flex-1 p-4 md:p-8 min-h-[100px]">
        
      </div>
    </div>
  </section>

  <!-- PROJELER Slaytı -->
  <section class="min-h-screen w-full flex flex-col md:flex-row text-[#262626]" style="color: #262626;">
    <!-- Sol Taraf - Gri Arka Plan -->
    <div class="w-full md:w-1/2 bg-[#F0F0F0] flex flex-col px-4 md:px-12 py-4 md:py-8">
      <div class="mb-6 md:mb-8">
        <span class="font-bold text-base md:text-xl text-[#262626]">HABS.</span>
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <div class="mb-6 md:mb-8">
          <span class="font-black text-[15vw] md:text-[12vw] leading-none text-[#262626]" style="font-family: 'Anton', sans-serif;">PROJELER</span>
        </div>
        <div class="mb-6 md:mb-8">
          <span class="text-lg md:text-2xl font-bold text-[#262626]">GERÇEKLEŞTİRDİĞİMİZ PROJELER</span>
        </div>
      </div>
    </div>
    
    <!-- Sağ Taraf - Turuncu Arka Plan -->
    <div class="w-full md:w-1/2 bg-[#EC4E34] flex flex-col px-4 md:px-12 py-4 md:py-8">
      <div class="mb-6 md:mb-8 text-left md:text-right">
        <span class="font-bold text-base md:text-xl text-[#262626]">Project Studio</span>
      </div>
    </div>
  </section>

  <!-- PROJELER SHOWCASE Slaytı -->
  <section class="min-h-screen w-full flex flex-col bg-[#F0F0F0]">
    <!-- Üst Bar -->
    <div class="w-full px-4 md:px-12 py-4 md:py-6">
      <div class="flex justify-between items-center w-full">
        <span class="font-bold text-base md:text-xl text-[#262626]">HABS.</span>
        <span class="font-bold text-base md:text-xl text-[#262626]">Project Studio</span>
      </div>
    </div>
    
    <!-- Proje Kartları -->
    <div class="flex-1 flex flex-col px-4 md:px-12 py-4 md:py-8">
      <!-- Projeler -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        <!-- Sol Proje - Volvo -->
        <div class="w-full md:w-2/5 flex flex-col">
          <div class="h-auto flex items-center justify-center mb-4 md:mb-8">
            <img src="@/assets/8.png" alt="Volvo C40" class="w-full h-auto object-contain" />
          </div>
          <div class="p-0">
            <h3 class="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-[#262626]">VOLVO C40 TÜRKİYE LANSMANI</h3>
            <p class="text-sm md:text-xl leading-relaxed text-[#262626]">
              Volvo Cars Türkiye'nin ilk %100 elektrikli aracı olan C40 modeli için kreatif konsept ve prodüksiyon uygulama aşamalarını üstlendiğimiz reklam filmi.
            </p>
          </div>
        </div>
        
        <!-- Sağ Proje - Origani -->
        <div class="w-full md:w-2/5 flex flex-col">
          <div class="h-auto flex items-center justify-center mb-4 md:mb-8">
            <img src="@/assets/9.png" alt="Origani x Muslera" class="w-full h-auto object-contain" />
          </div>
          <div class="p-0">
            <h3 class="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-[#262626]">ORIGANI X MUSLERA</h3>
            <p class="text-sm md:text-xl leading-relaxed text-[#262626]">
              Origani Hair için kreatif konsept ve prodüksiyon uygulama aşamalarını üstlendiğimiz reklam filmi.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Alt Turuncu Alan -->
    <div class="w-full flex flex-col md:flex-row">
      <div class="bg-[#EC4E34] w-full md:w-1/2 px-8 md:px-20 py-8 md:py-20 flex items-center">
        <span class="text-white text-lg md:text-2xl font-bold leading-relaxed tracking-wide">GERÇEKLEŞTİRDİĞİMİZ PROJELER</span>
      </div>
      <div class="bg-[#F0F0F0] w-full md:w-1/2 h-16 md:h-auto"></div>
    </div>
  </section>
  
  <!-- İLETİŞİM Slaytı -->
  <section class="min-h-screen w-full flex flex-col bg-[#262626]">
    <!-- Üst Bar -->
    <div class="w-full px-4 md:px-12 py-4 md:py-6 flex-shrink-0">
      <div class="flex justify-between items-center w-full">
        <span class="font-bold text-base md:text-xl text-white">HABS.</span>
        <span class="font-bold text-base md:text-xl text-white143">Project Studio</span>
      </div>
    </div>
    
    <!-- İletişim Başlığı -->
    <div class="flex flex-col items-center mb-6 md:mb-8 flex-shrink-0">
      <span class="font-black text-[15vw] md:text-[8vw] leading-none text-white mb-2 md:mb-4" style="font-family: 'Anton', sans-serif;">İLETİŞİM</span>
      <div class="w-48 md:w-96 h-px bg-white"></div>
    </div>
    
    <!-- İçerik -->
    <div class="flex-1 flex flex-col md:flex-row min-h-0">
      <!-- Sol Taraf - Turuncu Alan -->
      <div class="w-full md:w-1/2 bg-[#EC4E34] p-6 md:p-16 flex flex-col justify-center">
        <div class="text-white space-y-6 md:space-y-8">
          <p class="text-base md:text-2xl font-normal leading-relaxed">
            Kreatif iletişim projeleri, sponsorluk geliştirme ve görsel prodüksiyon ihtiyaçlarınız için bizimle iletişime geçebilirsiniz.
          </p>
          
          <div class="space-y-3 md:space-y-4">
            <div class="text-base md:text-xl font-medium">
              project@habsproject.com
            </div>
            <div class="w-full h-px bg-white"></div>
          </div>
        </div>
      </div>
      
      <!-- Sağ Taraf - Görsel -->
      <div class="w-full md:w-1/2 bg-[#262626] h-64 md:h-auto">
        <img src="@/assets/10.png" alt="İletişim" class="w-full h-full object-cover" />
      </div>
    </div>
    
    <!-- Footer -->
    <div class="w-full px-4 md:px-12 py-3 md:py-4 bg-[#262626] flex-shrink-0">
      <div class="text-center">
        <span class="text-white text-xs md:text-sm">designed by </span>
        <a 
          href="https://www.linkedin.com/in/sarpdokmeci/" 
          target="_blank"
          class="text-[#EC4E34] text-xs md:text-sm font-medium hover:text-white transition-colors duration-300 hover:underline"
        >
          sarpdkmc
        </a>
        <span class="text-white text-xs md:text-sm"> developed by </span>
        <a 
          href="https://www.linkedin.com/in/buraktoprakcam/" 
          target="_blank"
          class="text-[#EC4E34] text-xs md:text-sm font-medium hover:text-white transition-colors duration-300 hover:underline"
        >
          btc
        </a>
      </div>
    </div>
  </section>
  
  <!-- Scroll to Top Button -->
  <button 
    @click="scrollToTop" 
    v-show="showScrollButton"
    class="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#EC4E34] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#262626] hover:scale-110 transition-all duration-300 z-50"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
  
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Scroll to top button visibility
const showScrollButton = ref(false);

// Normal scroll fonksiyonu
const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

// Scroll to top fonksiyonu
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Scroll event handler
const handleScroll = () => {
  showScrollButton.value = window.scrollY > 500;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Scoped styles can be added here if needed, but TailwindCSS is used for all styling. */
</style> 