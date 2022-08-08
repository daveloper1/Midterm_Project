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
  } else {
    console.log(
      "Thank you for your message, we will contact you as soon as possible!"
    );
  }
}

function redirectContacUs() {
  /*window.location.replace("http://stackoverflow.com");*/
  console.log("hoolaaaa");
}

window.addEventListener("load", () => {
    console.log(window)
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", getFormData);

  const contactUsBtn = document.getElementsByClassName(".contactUsBtn");
  let arrContactUsBtn = [...contactUsBtn];
    console.log(arrContactUsBtn)
  for (let i = 0; i < arrContactUsBtn.length; i++) {
    arrContactUsBtn[i].addEventListener("click", redirectContacUs);
  }
});
