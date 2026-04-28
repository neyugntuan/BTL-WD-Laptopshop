var showMoreBtns = document.querySelectorAll(".show-more");

for (var i = 0; i < showMoreBtns.length; i++) {
  showMoreBtns[i].addEventListener("click", function() {
    var product = this.parentElement;
    var longDescription = product.querySelector(".description");
    var showMoreText = this.innerHTML;

    longDescription.classList.toggle("hidden");

    if (longDescription.classList.contains("hidden")) {
      this.innerHTML = "Xem thêm";
      longDescription.style.height = "140px";
    } else {
      this.innerHTML = "Thu gọn";
      longDescription.style.height = longDescription.scrollHeight + "px";
    }

    var height = longDescription.scrollHeight + "px";
    longDescription.style.maxHeight = height;
  });
}
