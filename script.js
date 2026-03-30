function enterSite() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  intro.classList.add("hide");

  setTimeout(() => {
    intro.remove();
    main.style.display = "block";

    setTimeout(() => {
      main.classList.add("show");
    }, 50);
  }, 600);
}

function setupAboutCards() {
  let topZ = 10;

  const cards = document.querySelectorAll(".card");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const images = document.querySelectorAll(".clickable");

  function bringToFront(card) {
    topZ++;
    card.style.zIndex = topZ;
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      bringToFront(card);
    });
  });

  images.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();

      const parentCard = img.closest(".card");
      if (parentCard) {
        bringToFront(parentCard);
      }

      popup.style.display = "flex";
      popupImg.src = img.src;
    });
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

function openFile(selectedFile) {
  const files = document.querySelectorAll(".file");

  files.forEach(file => {
    if (file === selectedFile) {
      file.classList.toggle("active");
    } else {
      file.classList.remove("active");
    }
  });
}

function openInspiredCard(card) {
  const allCards = document.querySelectorAll(".inspired-card");

  allCards.forEach(item => {
    item.classList.remove("active");
  });

  card.classList.add("active");
}



