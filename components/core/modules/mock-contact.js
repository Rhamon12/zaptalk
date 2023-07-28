const contactCard = document.querySelectorAll(".chat-cards .chat");
let boxFriend = document.querySelector(".conversation-box-friend p");

boxFriend.innerHTML = "";

contactCard.forEach((item) => {
  const messageContent = item.querySelector(".message").innerHTML;
  item.addEventListener("click", () => {
    // Concatenar o conteúdo à variável boxFriend
    boxFriend.innerHTML = messageContent;
  });
});
