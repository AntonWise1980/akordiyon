/* Kısaca scriptimin yapmak istediği: önce css class larına ulaşarak
click eventi ile tetiklenen fonksiyonumla class isimlerini değiştirip
o elementi aktif olan bir sınıfa geçirmek. Bu işlemi yaparken de
diğer elementi pasif hale getirmek. HTML sayfasındaki sınıflar
"panel" ve "panel active" olarak iki tanedir. Bu klass larımızı 
panel yada panel active olacak şekilde sayfaya js kodumuz ile 
müdahale etmiş olduk. 
*/

//panel sınıfı olan tüm elementleri panels objemize aldık.
const panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
//panel itemın her bir item'ına olay dinleyici ekliyorum.
    panel.addEventListener('click', ()=>{
        
// click olayı gerçekleştiğinde yapılacak işlemler başlıyor.
// çağırdığımız fonksiyon ile paneldeki sınıfların hepsini normal panele çeviriyorum
// böylelikle hepsi panel class oluyor active olan kalmıyor.
        
    removeActiveClasses()

// tıklama işlemi gerçekleşti, active classlar silindikten sonra
// şimdide active classı tekrar ekliyoruz. Böylelikle sadece
// tıklanan panelin sınıfı active hale gelmiş oluyor.       
        
    panel.classList.add('active')

// event listener içindeki fonkiyonun kapamaları.
    })
// panelsin for each için kapamalar.    
})

// şimdi yukarıda çağırılan active class ı temizleyecek fonksiyonu yazıyoruz.
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
// teşekkürler Davey seni hiç unutmayacağım. ;)