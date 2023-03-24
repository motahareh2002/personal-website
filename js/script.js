const loading = document.querySelector(".loader");
const sentMessage = document.querySelector("#sentMessage")
window.addEventListener("load", function () {
    loading.classList.add("hidden")
})
sentMessage.addEventListener("click", () => {
    alert("پیام ارسال شد")
})