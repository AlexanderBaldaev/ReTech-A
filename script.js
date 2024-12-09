function openLoginPopup() {
  document.getElementById("login-popup").style.display = "block";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function closeLoginPopup() {
  document.getElementById("login-popup").style.display = "none";
}

function toggleForm(formType) {
  if (formType === 'login') {
      document.getElementById("login-form").style.display = "block";
      document.getElementById("register-form").style.display = "none";
  } else if (formType === 'register') {
      document.getElementById("login-form").style.display = "none";
      document.getElementById("register-form").style.display = "block";
  }
}

function toggleSearch() {
  const searchBar = document.getElementById("search-bar");
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "block";
  } else {
      searchBar.style.display = "none";
  }
}
let currentPage = 1;
const totalPages = 2; // Установите количество страниц

function updatePagination() {
    document.getElementById('current-page').textContent = `Страница ${currentPage} из ${totalPages}`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
        loadPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        loadPage(currentPage);
    }
}

function loadPage(page) {
    const products = document.querySelectorAll('.product-list');
    products.forEach((productList, index) => {
        productList.style.display = index === (page - 1) ? 'flex' : 'none';
    });
}

// Инициализация
updatePagination();
