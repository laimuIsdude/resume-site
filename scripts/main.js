const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  //Does the 'header' parameter points to each .accordion-header?
  header.addEventListener('click', () => {
    const item = header.parentElement; //what does parentElement do?
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('.icon'); //does this limit the select within header?
    const isActive = item.classList.contains('active');

    if (isActive) {
      // Collapse
      content.style.maxHeight = content.scrollHeight + 'px'; // Set current height to enable animation
      requestAnimationFrame(() => {
        content.style.maxHeight = '0'; // Smoothly transition to collapsed state
      });
      item.classList.remove('active'); //does it add and remove .active to html?
      icon.textContent = '+';
    } else {
      // Expand
      content.style.maxHeight = content.scrollHeight + 'px'; // Expand to actual content height
      item.classList.add('active');
      icon.textContent = '−';
    }
  });
});

const portfolioImgs = document.querySelectorAll('.portfolio-imgs')
const lightBox = document.getElementById('lightbox');
const lightBoxImgs = document.getElementById('lightbox-img')
const closeBtn = document.getElementById('close-btn');

portfolioImgs.forEach( (img) => {
    img.addEventListener('click', () => {
    lightBox.style.display = "flex";
    lightBoxImgs.src = img.src;
    })

    closeBtn.addEventListener('click', () => {
    lightBox.style.display = "none";
    })

    lightBox.addEventListener('click', (e) => {
        if (e.target === lightBox) {
            lightBox.style.display = "none";
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            lightBox.style.display = "none";
        }
    })
})

document.getElementById("openModal").onclick = () => {
  document.getElementById("contactModal").style.display = "block";
};

document.querySelector(".close").onclick = () => {
  document.getElementById("contactModal").style.display = "none";
};

window.onclick = (e) => {
  if (e.target.id === "contactModal") {
    document.getElementById("contactModal").style.display = "none";
  }
};

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("contactModal").style.display = "none";
    }
})

