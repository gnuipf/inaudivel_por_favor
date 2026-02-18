fetch("./components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(err => console.error("Erro carregando navbar:", err));

