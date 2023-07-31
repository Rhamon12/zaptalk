import "./contacts.js";
import { contactList } from "./contacts.js";

const displayFriendChat = document.querySelector(".name");

function saveContact() {
  localStorage.setItem("contacts", JSON.stringify(contactList));
}

function getContact() {
  const contacts = localStorage.getItem(contacts);
  displayFriendChat.innerHTML = contacts[0];
}
getContact();
saveContact();
