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


// Tạo thời gian kết thúc = hiện tại + 7 ngày
// Tạo thời gian kết thúc = hiện tại + 7 ngày
  const endTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

  function updateCountdown(){

    const now = new Date().getTime();
    const distance = endTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    if(distance <= 0){
      clearInterval(timer);
    }
  }

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);
