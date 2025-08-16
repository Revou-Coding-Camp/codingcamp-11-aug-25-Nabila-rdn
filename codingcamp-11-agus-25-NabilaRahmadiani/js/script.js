
welcomeSpeech();

function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

function sendMessage() {
  // ambil semua value
  const name = document.getElementById('user-name').value.trim();
  const instansi = document.getElementById('user-instansi').value.trim();
  const phone = document.getElementById('user-phone').value.trim();
  const message = document.getElementById('user-message').value.trim();

  // validasi sederhana
  if (!name || !instansi || !phone || !message) {
    alert('Please fill in all fields!');
    return;
  }

  // tampilkan value di console dan alert
  console.log('Name:', name);
  console.log('Instansi:', instansi);
  console.log('Phone:', phone);
  console.log('Message:', message);

  alert(`Your message has been submitted!\n\nName: ${name}\nInstansi: ${instansi}\nPhone: ${phone}\nMessage: ${message}`);

  // opsional: reset form
  document.querySelector('form').reset();
}