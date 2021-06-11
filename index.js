let emailCollectorForm = document.querySelector(".email-collector");
emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newFormData = new FormData(event.target);
  let userFirstName = newFormData.get("firstName");
  let userEmailAddress = newFormData.get("emailAddress");
  let updatedHtmlContent = `
      <h2 class="content-section-title">Thank you for Registering <span class = "user-name">${userFirstName}</span>!</h2>
      <p class="content-section-subtitle">We are happy to have you 💜</p>
      <p class="content-section-info">
        We will now be sending you daily E-Mails on <span class = "user-email">${userEmailAddress}</span>! <br><br>
        Why don't you explore our site meanwhile, we're sure you'll love it!
      </p>
      <div class = "email-collector">
        <a href="https://pithvadhwnail.github.io/responsive-gaming-blog/" class="btn btn-primary">Visit</a>
      </div>
      <p class="privacy">
        We'll never share your information without your permission
      </p>`;
  let mainContent = document.querySelector(".content-section");
  mainContent.innerHTML = updatedHtmlContent;
});
