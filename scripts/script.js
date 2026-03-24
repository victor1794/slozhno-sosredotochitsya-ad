// массив кнопок переключения
const themeButtons = document.querySelectorAll('.header__theme-menu-button');

// обработчик клика
themeButtons.forEach((button) => {
  button.addEventListener('click', () => {

    // сброс активности
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });

    // определение темпы
    if ([...button.classList].includes('header__theme-menu-button_type_light')) {

      changeTheme('light');
    } else if (
      [...button.classList].includes('header__theme-menu-button_type_dark')
    ) {

      changeTheme('dark');
    } else {
      // по настройкам системы
      changeTheme('auto');
    }

    //активност ь кнопки
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

// смена темы
function changeTheme(theme) {
  // сброс классов боди
  document.body.className = 'page';

  // добавляем класс темы
  document.body.classList.add(`theme_${theme}`);

  // сохраняем темы в локалку
  localStorage.setItem('theme', theme);
}

// иницаилизация ьемы
function initTheme() {
  // из локалки получаем тему
  const theme = localStorage.getItem('theme');

  // если тема есть
  if (theme) {
    changeTheme(theme);

    // сброс активности
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });

    // берем кнопку соотвестующе темы
    const activeButton = document.querySelector(
      `.header__theme-menu-button_type_${theme}`
    );

    // активиру5м нужную кнопку
    activeButton.classList.add('header__theme-menu-button_active');
    activeButton.setAttribute('disabled', true);
  }
}

// запуск инита при загрузке
initTheme();
