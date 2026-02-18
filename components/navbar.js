fetch("./components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const base = window.location.origin + "/inaudivel_por_favor/";

    const logo = document.getElementById("logoNav");
    if (logo) {
      logo.src = base + "img/logo.png";
    }

    
  })
  .catch(err => console.error("Erro carregando navbar:", err));




