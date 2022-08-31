function getFormData() {
  /*This function will get the user information to be able to contact them via email OR phone.*/
  let nameExist = true;
  const uName = document.querySelector(".user-name").value;
  const uEmail = document.querySelector(".user-email").value;
  const uPhone = document.querySelector(".user-phone").value;
  const uMessage = document.querySelector(".user-message").value;
  //console.log(isValidPhone(uPhone));
  if (uName == "" || (!isValidEmail(uEmail) && !isValidPhone(uPhone))) {
    nameExist = false;
    console.error(
      "You have to introduce the full name and email or phone number to contact you. :) "
    );
    alert(
      "You have to introduce the full name and email or phone number to contact you. :) "
    );
  } else {
    console.log(
      "Thank you for your message, we will contact you as soon as possible!"
    );
    alert(
      "Thank you for your message, we will contact you as soon as possible!"
    );
  }
}

function SubscribeFcn() {
  /*This function will get the email of the user to subscribe him/her. It checks if the email is valid.*/
  const userEmail = document.querySelector(".email");
  if (!isValidEmail(userEmail.value)) {
    alert("The introduced email is not valid. Please try again.");
    window.location = window.location;
    window.location.href = "#cta-section";
    /*userEmail.scrollIntoView();*/
  } else {
    //console.log(userEmail.value);
    window.confirm(userEmail.value);
  }
}
function isValidPhone(phoneNumber) {
  /*This function validates the phone number available in spain (or that's the idea) */
  
  //debug
  /*console.log(phoneNumber);
  console.log(phoneNumber.length == 9);
  console.log(!(phoneNumber.toLowerCase() != phoneNumber.toUpperCase()));*/
  return (
    phoneNumber &&
    phoneNumber.length == 9 &&
    !(phoneNumber.toLowerCase() != phoneNumber.toUpperCase())
  );
}
function isValidEmail(email) {
  /*This function validates the email address*/
  let isValid = false;
  if (!email) {
    return isValid;
  } else if (email.includes("@")) {
    let org = email.split("@")[1]; // get the second part of the email
    isValid = org.includes(".") ? true : false;
  }
  return isValid;
}

function redirectProject() {
  /* Get the new location of the "Learn more" and change the title & subtitles*/
  const newLocation = this.querySelector("a").getAttribute("href");
  const title = this.querySelector(".project-title").innerHTML;
  const subtitle = this.querySelector(".project-description").innerHTML;
  window.location.href = newLocation + `?title=${title}&subtitle=${subtitle}`;
}

function QueryPage(params) {
  const title = params.title;
  const subtitle = params.subtitle;
  const titleBox = document.getElementsByClassName("title")[0];
  const subtitleBox = document.getElementsByClassName("subtitle")[0];

  titleBox.innerHTML = title;
  subtitleBox.innerHTML = subtitle;

  let imageSelector = 1;
  switch (title.toLowerCase()) {
    case "simplify":
      imageSelector = 1;
      break;
    case "dashcoin":
      imageSelector = 2;
      break;
    case "vectorify":
      imageSelector = 3;
      break;
    case "orbit":
      imageSelector = 4;
      break;
    case "purify":
      imageSelector = 5;
      break;
    case "cryptopie":
      imageSelector = 6;
      break;
  }

  const imageBox = document.getElementsByClassName("image-title")[0];
  //console.log(imageBox.style);
  imageBox.style.backgroundImage = `url(project-assets/projects-section/${imageSelector}.jpg)`;
  const bgImageBox = document.getElementsByClassName("image-title-bg")[0];
  bgImageBox.style.backgroundImage = `url(project-assets/projects-section/${imageSelector}.jpg)`;
}

window.addEventListener("load", () => {
  const projectCard = document.getElementsByClassName("project");
  let projectCardArr = [...projectCard];

  for (let i = 0; i < projectCardArr.length; i++) {
    projectCardArr[i].addEventListener("click", redirectProject);
  }
  var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  if (params.title != null) {
    /* console.log(params.title);
    console.log(params.subtitle);*/
    QueryPage(params);
  }
});
