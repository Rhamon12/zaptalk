// const contactMessages = {
//   id_contato_1: [
//     {
//       sentBy: "contact",
//       content: "Oi joaozin",
//       time: formatDateObject(new Date()),
//     },
//     {
//       sentBy: "Me",
//       content: "Oi Afroldin",
//       time: formatDateObject(new Date()),
//     },
//   ],

import { formatDateObject } from "./format-date.js";

// };
let selectedContact;

export const contactMessages = {};

export function selectConversation(contact) {
  selectedContact = contact;
  contactMessages[contact.id] = [
    {
      sentBy: "contact",
      content: "LREAESADASDAS DSASADSADA",
      time: formatDateObject(new Date()),
    },
  ];
}

// Chamar somente quando for enviar uma mensagem
export function sendMessage(content) {
  contactMessages[selectedContact.id].push({
    sentBy: "me",
    content,
    time: formatDateObject(new Date()),
  });
}
