document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  let activeDescription = null; // Lưu description đang hiển thị
  let activeButton = null; // Lưu button đang kích hoạt

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      let description = this.querySelector(".description");

      if (description) {
        // Nếu description đang mở, ẩn đi và trả về chỗ cũ
        if (description.classList.contains("show")) {
          hideDescription();
          return;
        }

        // Ẩn description cũ nếu có
        hideDescription();

        // Đưa description vào body
        document.body.appendChild(description);

        // Định vị giữa màn hình
        description.style.position = "fixed";
        description.style.top = "50%";
        description.style.left = "50%";
        description.style.transform = "translate(-50%, -50%)";
        description.classList.add("show");

        // Vô hiệu hóa các button khác
        buttons.forEach((btn) => btn.classList.add("disabled"));

        // Lưu trạng thái
        activeDescription = description;
        activeButton = this;
      }
    });
  });

  // Khi click vào description -> Ẩn và trả lại vị trí ban đầu
  document.addEventListener("click", function (event) {
    if (activeDescription && activeDescription.contains(event.target)) {
      hideDescription();
    }
  });

  function hideDescription() {
    if (activeDescription && activeButton) {
      // Ẩn description
      activeDescription.classList.remove("show");

      // Trả lại vào trong button gốc
      activeButton.appendChild(activeDescription);

      // Kích hoạt lại các button
      buttons.forEach((btn) => btn.classList.remove("disabled"));

      // Reset trạng thái
      activeDescription = null;
      activeButton = null;
    }
  }
});
