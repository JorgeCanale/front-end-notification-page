const unreadMessages = document.querySelectorAll(".unreaded");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");
unread.innerText=unreadMessages.length

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unreaded");
        const newUnreadMessages = document.querySelectorAll(".unreaded");
        unread.innerText = newUnreadMessages.length;
    })
})
markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => message.classList.remove("unreaded"))
    const newUnreadMessages = document.querySelectorAll(".unreaded");
    unread.innerText = newUnreadMessages.length;
})