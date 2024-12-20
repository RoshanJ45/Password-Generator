    var password = document.getElementById("password");
    function genPassword() {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passLength = 15;
      var passwordValue = "";
      for (var i = 0; i < passLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        passwordValue += chars.substring(randomNumber, randomNumber + 1);
      }
      document.getElementById("password").value = passwordValue;
    }
    function copyPassword() {
      var copyText = document.getElementById("password");
      copyText.select();
      document.execCommand("copy");
    }
  