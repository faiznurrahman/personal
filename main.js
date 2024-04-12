onload = () =>{
        document.body.classList.remove("container");
};
var pesanIndex = 0;
var pesan = [
        "Gimana mainnya hari ini seru?",
        "Pastinya seru dong",
        "Kamu pasti bingung yaa ini buat apaan?",
        "Sebenernya cuma buat permintaan maaf tentang yang kemarin sih",
        "Tapi aku rasa kamu juga udah ga permasalahin ya",
        "Apa masih??????",
        "Tetep ajaa aku pengin minta maaf sekali lagi dengan ini",
        "Jadi aku dimaafin ga?",

        ];
        function gantiPesan() {
                var pesanElement = document.getElementById("pesan");
                var nextButton = document.getElementById("nextButton");
                
                pesanIndex = (pesanIndex + 1) % pesan.length;
                pesanElement.innerText = pesan[pesanIndex];
              
                if (pesanIndex === pesan.length - 1) {
                  nextButton.style.display = "none"; // Sembunyikan tombol "Next"
                  // Tambahkan tombol "Yes" dan "No" dengan kelas yang berbeda
                  var yesButton = document.createElement("button");
                  yesButton.innerText = "Yes";
                  yesButton.style.backgroundColor = "#28a745"; // Ganti warna latar belakang menjadi hijau
                  yesButton.style.color = "white"; // Ganti warna teks menjadi putih
                  yesButton.style.borderRadius = "5px"; // Tambahkan border-radius
                  yesButton.style.padding = "5px 20px"; // Tambahkan padding
                  yesButton.style.border = "none"; // Hapus border
                  yesButton.style.cursor = "pointer"; // Ganti cursor menjadi pointer
                  yesButton.onclick = function() {
                    window.location.href = "give.html"; // Ganti URL dengan URL tujuan
                  };
                  var noButton = document.createElement("button");
                  noButton.innerText = "No";
                  noButton.style.backgroundColor = "#dc3545"; // Ganti warna latar belakang menjadi merah
                  noButton.style.color = "white"; // Ganti warna teks menjadi putih
                  noButton.style.borderRadius = "5px"; // Tambahkan border-radius
                  noButton.style.padding = "5px 20px"; // Tambahkan padding
                  noButton.style.border = "none"; // Hapus border
                  noButton.style.cursor = "pointer"; // Ganti cursor menjadi pointer
                  noButton.onmouseover = function() {
                    // Saat tombol "No" dihover, posisinya akan berubah secara acak
                    var container = document.querySelector(".container");
                    var maxX = container.clientWidth - noButton.offsetWidth;
                    var maxY = container.clientHeight - noButton.offsetHeight;
                    var newX = Math.floor(Math.random() * maxX);
                    var newY = Math.floor(Math.random() * maxY);
                    noButton.style.position = "absolute";
                    noButton.style.left = newX + "px";
                    noButton.style.top = newY + "px";
                  };
                  var container = document.querySelector(".container");
                  container.appendChild(yesButton);
                  container.appendChild(noButton);
                }
              }
