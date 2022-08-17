function getFormData() {
  let nameExist = true;
  const uName = document.querySelector(".user-name").value;
  const uEmail = document.querySelector(".user-email").value;
  const uPhone = document.querySelector(".user-phone").value;
  const uMessage = document.querySelector(".user-message").value;

  if (uName == "" || (uEmail == "" && uPhone == "")) {
    nameExist = false;
    console.error(
      "You have to introduce the Full name and email or phone number to contact you. :) "
    );
    alert("nnnoooooooo");
  } else {
    console.log(
      "Thank you for your message, we will contact you as soon as possible!"
    );
    alert("suuuuuu");
  }
}

function redirectContacUs() {
  /*window.location.replace("http://stackoverflow.com");*/
  console.log("hoolaaaa");
}

window.addEventListener("load", () => {
  /*The idea is to redirect the user to the contactus page with the email already written */
  const subscribeBtn = document.getElementsByClassName("subscribeBtn");
  let subscribeBtnarr = [...subscribeBtn];
  for (let i = 0; i < subscribeBtnarr.length; i++) {
    subscribeBtnarr[i].addEventListener("click", redirectContacUs);
  }

  $(".project-link").click(function() {
    console.log('AJAAAA')
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
});
