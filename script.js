document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("book-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalAuthor = document.getElementById("modal-author");
    const modalDate = document.getElementById("modal-date");
    const modalSynopsis = document.getElementById("modal-synopsis");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".info-btn").forEach(button => {
        button.addEventListener("click", function() {
            const title = this.getAttribute("data-title");
            const author = this.getAttribute("data-author");
            const date = this.getAttribute("data-date");
            const synopsis = this.getAttribute("data-synopsis");

            modalTitle.textContent = title;
            modalAuthor.textContent = author;
            modalDate.textContent = date;
            modalSynopsis.textContent = synopsis;

            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


