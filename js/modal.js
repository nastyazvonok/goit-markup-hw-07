/** @format */

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

console.dir(document.querySelector('.madal-input'));

user = {
  'user-name' : document.querySelector('.madal-input'),
  'user-email' : 'dasdasd',
  'user-tel' : 'daasdasd',
};
