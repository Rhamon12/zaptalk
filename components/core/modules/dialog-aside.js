const buttonNewChat = document.querySelector(".fab");
const modal = document.querySelector(".aside-new-talk");
const buttonCloseDialog = document.querySelector(".close-dialog-button");
const newContact = document.querySelector(".chat");

const dataClient = [
  {
    id: 1,
    name: "Ingrid Costa",
    status: "Deus!",
  },
  {
    id: 2,
    name: "Mikael Espinola",
    status: "thunder!",
  },
  {
    id: 3,
    name: "Michael Costa",
    status: "Walking to the moon!",
  },
  {
    id: 4,
    name: "Phill McGonagol",
    status: "Avada Kedabra!",
  },
];

buttonNewChat.onclick = function () {
  modal.showModal();
};
buttonCloseDialog.onclick = function () {
  modal.close();
};

<<<<<<< HEAD
export { buttonNewChat, modal, buttonCloseDialog, newContact, dataClient };
=======
console.log("Deu certo!");
>>>>>>> b7e84db48969cb3bed1811ec492abf1f6efc16c0
