import { v4 as uuidv4 } from "https://jspm.dev/uuid";
const chatCard = document.querySelector(".chat");
const textButton = document.querySelector(".text-button");
const text = document.querySelector(".texting");

export const names = ["Fulano", "Beltrano", "Sicrano", "Eevee", "Pikachu"];

export const contactList = [];

export function createContact(name) {
  const newContact = {
    id: uuidv4(),
    name,
    selected: false,
  };

  contactList.push(newContact);

  return newContact;
}

names.forEach((name) => {
  createContact(name);
});

textButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = text.value;

  createContact(name);
  console.log(contactList);

  text.value = "";
  text.focus();
});
