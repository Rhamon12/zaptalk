import { contactList, renderChatCard } from "./contacts.js";
import { catchSelect } from "./catch-selected.js";
import { saveContactStorage } from "./persist-storage.js";

const buttonContactList = document.querySelector(".fab");
const modal = document.querySelector(".aside-new-talk");
const buttonCloseContactList = document.querySelector(".close-dialog-button");
export const registerModal = document.querySelector(".dialog-contact-register");
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
      if (currentContact.id === contact.id && contact.open === true) {
        return alert("A conversa já está aberta!");
      }
      if (currentContact.id === contact.id && contact.open === false) {
        contact.open = true;
        renderChatCard(contact);
        modal.close();
      }
    });
  }
  catchSelect();
});
