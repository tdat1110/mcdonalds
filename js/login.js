$(document).ready(function(){
    $(".veen .rgstr-btn button").click(function(){
      $('.veen .wrapper').addClass('move');
      $('.body').css('background','#e0b722');
      $(".veen .login-btn button").removeClass('active');
      $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function(){
      $('.veen .wrapper').removeClass('move');
      $('.body').css('background','#ff4931');
      $(".veen .rgstr-btn button").removeClass('active');
      $(this).addClass('active');
    });
  });

  const emailElm = document.getElementById('username');
  const passwordElm = document.getElementById('password')
  const loginForm = document.getElementById('login')
  function handleRegister(e) {
      e.preventDefault();
      const user = {
          email: emailElm.value,
          password: passwordElm.value,
      }
      const usersLocal = localStorage.getItem('users');
      if (usersLocal === null) {
          const users = [user];
  
          localStorage.setItem('users', JSON.stringify(users));
      } else {
          const users = JSON.parse(usersLocal);
         
          for (let index = 0; index < users.length; index++) {
              const element = users[index];
              if(element.email === user.email) {
                  alert('Bi trung email!');
                  return;
              }
          }
      }
      emailElm.value = "";
      passwordElm.value = "";
      alert("Dang nhap thanh cong!")
      window.location = "./home.html"
  }
  loginForm.addEventListener('submit', handleRegister );
