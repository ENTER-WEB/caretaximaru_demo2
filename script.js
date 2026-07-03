const modal = document.getElementById("site-modal");
function openModal() {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.querySelectorAll("[data-modal-top]").forEach((button) => {
  button.addEventListener("click", () => {
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const modalType = anchor.dataset.modal;
    if (modalType) {
      event.preventDefault();
      openModal();
      return;
    }

    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") {
      event.preventDefault();
      openModal();
      return;
    }

    const target = document.querySelector(targetId);
    if (!target) {
      event.preventDefault();
      openModal();
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
