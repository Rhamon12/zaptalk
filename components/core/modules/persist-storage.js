import { contactList } from "./contacts.js";

export function saveContactStorage() {
  // if (localStorage.hasOwnProperty("contactList")) {
  //   // Recuperar valores da propriedade contactListUsers do localStorage
  //   // converter a String para objeto
  //   contactList = JSON.parse(localStorage.getItem("contactList"));
  // }
  // Salvando no localStorage
  localStorage.setItem("contactList", JSON.stringify(contactList));
}
