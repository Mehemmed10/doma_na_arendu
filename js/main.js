if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/* раскрывает меню*/
const navSidebarToggleBtn = document.querySelector(".nav-item_dropdown");
const navIcon = document.querySelector(".dropdown-menu");

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
navSidebarToggleBtn.onclick = function () {
  navIcon.classList.toggle("show");
};

/* Фильтр на мобильный устроствах */
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
};

/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll(".widget");

// Находим все виджеты на странице
widgets.forEach(function (widget) {
  // Слушаем клик внутри виджета
  widget.addEventListener("click", function (e) {
    // Если клик по заголовку - тогда скрываем/показывае тело виджета
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

/* Location - кнопка Любая */
const checkBoxAny = document.querySelector("#location-05");
const topLocationCheckboxes = document.querySelectorAll(
  "[data-location-param]"
);

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener("change", function () {
  if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
  }
});

// Отключаем кнопку "Любая", при выборе других параметров
topLocationCheckboxes.forEach(function (item) {
  item.addEventListener("change", function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});

/* Показать еще 3 доп опции с чекбоксами в фильтре */
const showMoreOptions = document.querySelector(".widget__btn-show-hidden");
const hiddenCheckBoxes = document.querySelectorAll(".checkbox--hidden");

showMoreOptions.onclick = function (e) {
  e.preventDefault();

  // Если блоки были скрыты - значит показываем
  if (showMoreOptions.dataset.options == "hidden") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "block";
    });
    showMoreOptions.innerText = "Скрыть дополнительные опции";
    showMoreOptions.dataset.options = "visible";
  }
  // Если блоки были видны - значит скрываем
  else if (showMoreOptions.dataset.options == "visible") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "none";
    });
    showMoreOptions.innerText = "Показать ещё";
    showMoreOptions.dataset.options = "hidden";
  }
};

// кнопка вверх
function backToTop() {
  let button = $(".back-to-top");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on("click", (e) => {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
  });
}
backToTop();
// скроллинг к блоку
$(".scroll-to-block").click(function (e) {
  e.preventDefault();
  let target = $(this).data("block");
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    300
  );
});
