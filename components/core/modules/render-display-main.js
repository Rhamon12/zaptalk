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

export function renderFriendContact() {
  const contentMessage = document.querySelector(".content-message");
  const divBoxFriend = document.createElement("div");
  divBoxFriend.classList.add("conversation-box-friend");
  divBoxFriend.classList.add("bg-conversation");
  contentMessage.appendChild(divBoxFriend);
  const spanFace = document.createElement("span");
  spanFace.classList.add("material-symbols-outlined");
  spanFace.classList.add("face-profile");
  spanFace.textContent = "sentiment_content";
  divBoxFriend.appendChild(spanFace);
  const nameFriend = document.createElement("em");
  nameFriend.classList.add("name");
  nameFriend.setAttribute("name", contactList.name); // vem undefined
  divBoxFriend.appendChild(nameFriend);
  const conversationFriend = document.createElement("p");
  conversationFriend.classList.add("conversation-profile");
  divBoxFriend.appendChild(conversationFriend);
  const spanConversation = document.createElement("span");
  spanConversation.classList.add("time");
  conversationFriend.appendChild(spanConversation);
}
