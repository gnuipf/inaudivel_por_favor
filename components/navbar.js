fetch("/inaudivel_por_favor/components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });
