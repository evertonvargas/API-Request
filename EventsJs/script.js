document.querySelector(".button-flex button").addEventListener("click", () => {
    console.log("aqui")
    let hostUser = document.querySelector('input[name="host"]').value;
    let dispositivoUser = document.querySelector(
      'input[name="dispositivo"]'
    ).value;
    let tokenUser = document.querySelector('input[name="token"]').value;
    if (hostUser != "" & dispositivoUser != "" & tokenUser != "") {
      document.querySelector(".host").innerHTML = hostUser;
      document.querySelector(".dispositivo").innerHTML = dispositivoUser;
      document.querySelector(".token").innerHTML = tokenUser;
    }
  });
  