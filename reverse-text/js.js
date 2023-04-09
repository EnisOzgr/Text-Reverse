const input = document.getElementById("input-text");
const output = document.getElementById("output-text");
const translateBtn = document.getElementById("translate-btn");

//Çevir butonumu değişkene attıktan sonra click olayını açıyorum.
translateBtn.addEventListener("click", () => {
  //Burada inputa yazılan değeri trim fonksiyonunu kullanarak önünde ve arkasındaki boşlukları siliyorum ve oluşturduğum text değişkenime aktarıyorum.
  const text = input.value.trim();
  
  //Burada kullanıcıdan aldığım değerin girilip girilmediğini kontrol ederek eğer girilmediyse kullanıcıya uyarımı iletiyorum.
  if (text === "") {
    alert("Lütfen bir metin girin!");
    return;
  }
    // Burada ise gelen kelimeyi oluşturduğum fonksiyonun içine atayarak işlemleri yapıldıktan sonra output olarak veriyorum.
  const translatedText = translate(text);
  output.innerText = translatedText;
});

function translate(text) {
  // Burada textimi split komutu ile parçalara ayırıp karakterlere dönüştürüp reverse ile ters çevirim en son join ile tekrar ters biçimde birleştiriyorum.
  return text.split("").reverse().join("");
}
