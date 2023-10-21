'use strict';

// element toggle function
const toggleElement = (elem) => {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', () => {
  toggleElement(sidebar);
});

// testimonials variables
const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// modal variables
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// modal toggle function
const toggleTestimonialsModal = () => {
  toggleElement(modalContainer);
  toggleElement(overlay);
};

// add click event to all modal items
testimonialsItems.forEach((item) => {
  item.addEventListener('click', () => {
    modalImg.src = item.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = item.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = item.querySelector('[data-testimonials-title]').innerHTML;
    modalText.innerHTML = item.querySelector('[data-testimonials-text]').innerHTML;
    toggleTestimonialsModal();
  });
});

// add click event to modal close button
modalCloseBtn.addEventListener('click', toggleTestimonialsModal);
overlay.addEventListener('click', toggleTestimonialsModal);

// custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

select.addEventListener('click', () => {
  toggleElement(select);
});

// add event in all select items
selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    toggleElement(select);
    filterItemsByCategory(selectedValue);
  });
});

// filter function
const filterItemsByCategory = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
      toggleElement(item);
    } else {
      item.classList.remove('active');
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtns[0];

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterItemsByCategory(selectedValue);
    toggleElement(lastClickedBtn);
    toggleElement(btn);
    lastClickedBtn = btn;
  });
});

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const sections = document.querySelectorAll('[data-section]');

// add event to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const sectionId = link.dataset.navLink;
    const section = document.getElementById(sectionId);

    if (section) {
      sections.forEach((s) => {
        toggleElement(s, s === section);
      });
      navigationLinks.forEach((l) => {
        toggleElement(l, l === link);
      });
      window.scrollTo(0, 0);
    }
  });
});

// contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// add event to all form input fields
formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled', '');
    }
  });
});