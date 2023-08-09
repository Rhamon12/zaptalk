import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { formatDateObject } from "./format-date.js";
import { registerModal } from "./dialog-aside.js";
import { saveContactStorage } from "./persist-storage.js";

const chatCards = document.querySelector(".chat-cards");
const contactListSection = document.querySelector(".contact-list");
const chat = document.querySelector(".chat");
const closeRegisterButtom = document.querySelector(".register-buttom");
const text = document.querySelector(".texting");
const text2 = document.querySelector(".texting-2");

export let contactList = [];
export const activeChats = [];

function createContact(name, status) {
  const newContact = {
    id: uuidv4(),
    name,
    status,
    time: formatDateObject(new Date()),
    message: "Vamos renderizar isso por enquanto",
    selected: false,
    open: false,
  };

  contactList.push(newContact);
  saveContactStorage();
  renderContactList(newContact);
  return newContact;
}

export function renderChatCard(contact) {
  const newChatCard = document.createElement("div");
  newChatCard.classList.add("chat");
  newChatCard.setAttribute("id", contact.id);

  const icon = document.createElement("span");
  icon.classList.add("material-symbols-outlined");
  icon.classList.add("face");
  icon.classList.add("border-chat");
  icon.textContent = "face";
  newChatCard.appendChild(icon);

  const contactName = document.createElement("span");
  contactName.classList.add("contact-name");
  contactName.textContent = contact.name;
  newChatCard.appendChild(contactName);

  const message = document.createElement("span");
  message.classList.add("message");
  message.classList.add("border-chat");
  message.textContent = contact.message;
  newChatCard.appendChild(message);

  const time = document.createElement("span");
  time.classList.add("time");
  time.textContent = contact.time;
  newChatCard.appendChild(time);

  chatCards.appendChild(newChatCard);
}

function renderContactList(contact) {
  if (!document.querySelector(`div[todoId="${contact.id}"]`)) {
    const contactToList = document.createElement("div");
    contactToList.classList.add("chat");
    contactToList.classList.add("contact");
    contactToList.setAttribute("id", contact.id);

    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    icon.classList.add("face");
    icon.classList.add("border-chat");
    icon.textContent = "face";
    contactToList.appendChild(icon);

    const contactName = document.createElement("span");
    contactName.classList.add("contact-name");
    contactName.textContent = contact.name;
    contactToList.appendChild(contactName);

    const message = document.createElement("span");
    message.classList.add("message");
    message.classList.add("border-chat");
    message.textContent = contact.status;
    contactToList.appendChild(message);

    contactListSection.appendChild(contactToList);
  }
}

function getContactLocalStorage() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("contactList"));
  if (!dataFromLocalStorage) return;

  contactList = dataFromLocalStorage;
  contactList.forEach(renderContactList);
}

closeRegisterButtom.addEventListener("click", (e) => {
  e.preventDefault();
  const name = text.value;
  const status = text2.value;

  createContact(name, status);

  text.value = "";
  text2.value = "";
  registerModal.close();
});

getContactLocalStorage();
