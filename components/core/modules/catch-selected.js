import { contactList } from "./contacts.js";
import { selectConversation } from "./conversation.js";
import { renderFriendContact } from "./render-display-main.js";

// fazer condição IF no novo array gerado, para alterar o selected e baseado nisso alterar o display da box main

let contentMessage = document.querySelector(".content-message");

export function catchSelect() {
  const chatCards = document.querySelectorAll(".chat");

  chatCards.forEach((chatCard) => {
    chatCard.onclick = () => {
      const selectedContact = contactList.find(({ id }) => id === chatCard.id);
      contentMessage.innerHTML = "";
      selectConversation(selectedContact);
      renderFriendContact(selectedContact);
    };
  });
}
