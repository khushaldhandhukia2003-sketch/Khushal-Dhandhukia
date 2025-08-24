/* ===== Custom Sections JS ===== */

// ==========================
// Banner Button Animation
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const bannerButtons = document.querySelectorAll(".banner-btn");
  bannerButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});

// ==========================
// Shoppable Grid – Add to Cart
// ==========================
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    e.preventDefault();
    const productId = e.target.dataset.productId;

    try {
      let response = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          items: [{ id: productId, quantity: 1 }]
        })
      });

      if (response.ok) {
        alert("Product added to cart!");
      } else {
        let err = await response.json();
        alert("Error: " + err.description);
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  }
});

// ==========================
// Popup – Show/Hide
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("custom-popup");
  const closeBtn = document.getElementById("popup-close");

  if (popup) {
    // Show after 5s
    setTimeout(() => {
      popup.classList.remove("hidden");
    }, 5000);

    // Close button
    closeBtn?.addEventListener("click", () => {
      popup.classList.add("hidden");
    });

    // Close when clicking overlay
    popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup-overlay")) {
        popup.classList.add("hidden");
      }
    });
  }
});
