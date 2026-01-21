document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".show-contacts");
  const contacts = trigger.querySelector(".contacts");

  contacts.style.transition = "none";

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    contacts.style.transition = "all 0.6s ease";
    contacts.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (contacts.classList.contains("show") && !trigger.contains(e.target)) {
      contacts.classList.remove("show");
    }
  });
});

