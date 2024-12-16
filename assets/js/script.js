// page reload and add hero section animation
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("page-loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("opacity-0"); // Start fading out
      setTimeout(() => {
        loader.remove(); // Remove from DOM after fade-out

        // Add .hero_animation class to the hero section content
        const heroSectionContent = document.querySelector(
          ".hero_section_content"
        );
        if (heroSectionContent) {
          heroSectionContent.classList.add("hero_animation");
        }
      }, 500); // Match this duration to the fade-out transition
    }, 300); // Initial load delay (optional)
  });
});

// header add class for bg on scroll

// Get the header element and other required elements
const header = document.querySelector("header");
const logoContainer = document.querySelector(".text-3xl");
const header_container = document.querySelector(".header_container");
const header_menu = document.querySelector("#menu");

// Function to handle scroll event
const handleScroll = () => {
  // Check if the user has scrolled down more than 50px
  if (window.scrollY > 100) {
    // Add the bg-gray-800 class to the header
    header.classList.add("bg-gray-800");
    // Add lg:w-44 to the logo image
    logoContainer.querySelector("img").classList.add("lg:w-36");
    logoContainer.querySelector("img").classList.remove("lg:w-52");
    // Add items-center to the flex container
    header_menu.classList.remove("mt-3");
    header_container.classList.add("items-center");
    header_container.classList.remove("py-3");
  } else {
    // Remove the bg-gray-800 class from the header
    header.classList.remove("bg-gray-800");
    // Remove lg:w-44 from the logo image
    logoContainer.querySelector("img").classList.add("lg:w-52");
    logoContainer.querySelector("img").classList.remove("lg:w-36");
    // Remove items-center from the flex container
    flexContainer.classList.remove("items-center");
  }
};

// Listen for the scroll event
window.addEventListener("scroll", handleScroll);

// menu bar slide js function

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const close_menu = document.getElementById("close_menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("!left-0");
});

close_menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("!left-0");
});

// JavaScript for Service Popup
const serviceCards = document.querySelectorAll(".service-card");
const popup = document.getElementById("service-popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLink = document.getElementById("popup-link"); // Reference to the new button
const popupClose = document.getElementById("popup-close");

// Open Popup with dynamic content
serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;
    const description = card.dataset.description;
    const longDescription = card.dataset.longDescription; // Get the detailed text
    const serviceLink = card.dataset.link; // Get the link from the data attribute

    popupTitle.textContent = service;
    popupDescription.innerHTML = `<p class=\"font-semibold\">${description}</p><p class=\" text-sm md:text-md mt-4 text-gray-700\">${longDescription}</p>`; // Combine short and detailed text
    popupLink.href = serviceLink; // Dynamically update the button link
    popupLink.textContent = `Explore more`; // Update button text dynamically

    popup.classList.remove("hidden");
    popup.classList.add("flex");
    popup.querySelector(".relative").classList.remove("scale-95");
    popup.querySelector(".relative").classList.add("scale-100");
  });
});

// Close Popup
popupClose.addEventListener("click", () => closePopup());

popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

function closePopup() {
  popup.querySelector(".relative").classList.add("scale-95");
  popup.querySelector(".relative").classList.remove("scale-100");
  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
  }, 200);
}

// Counter Animation Logic
const counters = [
  { id: "clients-counter", target: 500 },
  { id: "projects-counter", target: 200 },
  { id: "awards-counter", target: 50 },
  { id: "experts-counter", target: 100 },
];

const animateCounter = (id, target) => {
  let count = 0;
  const speed = target / 100; // Adjust speed here
  const element = document.getElementById(id);

  const updateCounter = () => {
    if (count < target) {
      count += speed;
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target; // Ensure final value
    }
  };

  updateCounter();
};

// Observer Callback
const counterSection = document.getElementById("counter-section");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) =>
          animateCounter(counter.id, counter.target)
        );
        observer.disconnect(); // Stop observing after animation starts
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(counterSection);



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
      // Prevent form submission initially
      e.preventDefault();

      // Clear previous error messages
      let errors = false;

      // Validate Full Name
      let name = document.getElementById('name').value;
      let nameError = document.getElementById('nameError');
      if (name.length < 3) {
          nameError.classList.remove('hidden');
          errors = true;
      } else {
          nameError.classList.add('hidden');
      }

      // Validate Email
      let email = document.getElementById('email').value;
      let emailError = document.getElementById('emailError');
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
          emailError.classList.remove('hidden');
          errors = true;
      } else {
          emailError.classList.add('hidden');
      }

      // Validate Phone
      let phone = document.getElementById('phone').value;
      let phoneError = document.getElementById('phoneError');
      if (!/^\d{10}$/.test(phone)) {
          phoneError.classList.remove('hidden');
          errors = true;
      } else {
          phoneError.classList.add('hidden');
      }

      // Validate Message
      let message = document.getElementById('message').value;
      let messageError = document.getElementById('messageError');
      if (message.trim() === '') {
          messageError.classList.remove('hidden');
          errors = true;
      } else {
          messageError.classList.add('hidden');
      }

      // If no errors, submit the form
      if (!errors) {
          this.submit();
      }
  });
});