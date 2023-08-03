import { contactList } from "./contacts.js";

// fazer condição IF no novo array gerado, para alterar o selected e baseado nisso alterar o display da box main
let selectedContact;

export function catchSelect() {
  const chatCards = document.querySelectorAll(".chat");
  chatCards.forEach((chatCard) => {
    chatCard.addEventListener("click", () => {
      selectedContact = contactList.find(({ id }) => id === chatCard.id);
    });
  });
}
