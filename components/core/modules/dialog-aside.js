import { contactList, renderChatCard } from "./contacts.js";

const buttonContactList = document.querySelector(".fab");
const modal = document.querySelector(".aside-new-talk");
const buttonCloseContactList = document.querySelector(".close-dialog-button");
const registerModal = document.querySelector(".dialog-contact-register");
const newRegisterButton = document.querySelector(".dialog-title > h3");
const closeRegisterModal = document.querySelector(".close-register-modal");
const chatSection = document.querySelector(".contact-list");

buttonContactList.onclick = function () {
  modal.showModal();
};
buttonCloseContactList.onclick = function () {
  modal.close();
};

newRegisterButton.onclick = function () {
  registerModal.showModal();
};

closeRegisterModal.onclick = function () {
  registerModal.close();
};

chatSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("contact")) {
    const currentContact = e.target;
    contactList.forEach((contact) => {
      if (currentContact.id === contact.id) {
        renderChatCard(contact);
      }
    });
  }
});
