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

function getParams() {
  console.log("ueeee");
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
  console.log(imageBox.style);
  imageBox.style.backgroundImage = `url(project-assets/projects-section/${imageSelector}.jpg)`;
  const bgImageBox = document.getElementsByClassName("image-title-bg")[0];
  bgImageBox.style.backgroundImage = `url(project-assets/projects-section/${imageSelector}.jpg)`;
}

window.addEventListener("load", () => {
  /*The idea is to redirect the user to the contactus page with the email already written */
  const subscribeBtn = document.getElementsByClassName("subscribeBtn");
  let subscribeBtnarr = [...subscribeBtn];
  for (let i = 0; i < subscribeBtnarr.length; i++) {
    subscribeBtnarr[i].addEventListener("click", redirectContacUs);
  }
  /*----------------------------------------------------------------------------*/
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
