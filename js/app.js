document.getElementById('login-btn').addEventListener('click', (e) => {
  alert("Bald verfügbar!")
});

document.getElementById('register-btn').addEventListener('click', (e) => {
  alert("Bald verfügbar!")
});

document.getElementById('visit-shop').addEventListener('click', (e) => {
  window.location.href = 'https://glitzorium.mysellix.io';
})

document.getElementById('visit-faq').addEventListener('click', (e) => {
  alert("Bald verfügbar!")
});

document.getElementById('join-discord').addEventListener('click', (e) => {
  window.location.href = 'https://construkter.de/discord';
})

document.getElementById('ok-btn').addEventListener('click', (e) => {
  redirect()
})

const minWidth = 1086;
const minHeight = 1;

function checkScreenDimnensions() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth < minWidth || screenHeight < minHeight) {
    //showModal()
  } else {
    //closeModal()
  }
}

function showModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal-overlay").style.display = "none";
}

function redirect(){
  window.location.href = "https://www.google.com";
}

window.onload = checkScreenDimnensions;
window.onresize = checkScreenDimnensions;
