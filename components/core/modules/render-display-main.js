/* <div class="conversation-box-friend bg-conversation">
<span class="material-symbols-outlined face-profile">
  sentiment_content
</span>
<em class="name"></em>
<p class="conversation-profile">

  <span class="time">18:06</span>
</p>
</div> */

import { contactList } from "./contacts.js";

export function renderFriendContact(name, message, time) {
  const contentMessage = document.querySelector(".content-message");

  let divBoxFriend = document.createElement("div");
  divBoxFriend.classList.add("conversation-box-friend");
  divBoxFriend.classList.add("bg-conversation");
  contentMessage.appendChild(divBoxFriend);

  let spanFace = document.createElement("span");
  spanFace.classList.add("material-symbols-outlined");
  spanFace.classList.add("face-profile");
  spanFace.textContent = "sentiment_content";
  divBoxFriend.appendChild(spanFace);

  let nameFriend = document.createElement("em");
  nameFriend.classList.add("name");
  nameFriend.textContent = name.name;
  divBoxFriend.appendChild(nameFriend);

  let conversationFriend = document.createElement("p");
  conversationFriend.classList.add("conversation-profile");
  conversationFriend.textContent = message.message;
  divBoxFriend.appendChild(conversationFriend);

  let spanConversation = document.createElement("span");
  spanConversation.classList.add("time");
  spanConversation.textContent = time.time;
  conversationFriend.appendChild(spanConversation);

  // if (contentMessage.children.length > 1) {
  //   console.log("entrei?");
  //   spanFace.textContent = "sentiment_content";
  //   nameFriend.textContent = name.name;
  //   conversationFriend.textContent = message.message;
  //   spanConversation.textContent = time.time;
  // }
}
