fetch("/inaudivel_por_favor/components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const logo = document.getElementById("logoNav");
    if(logo){
      logo.src = "/inaudivel_por_favor/img/logo.png";
    }
    
  })
  .catch(err => console.error("Erro carregando navbar:", err));



