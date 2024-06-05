/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const bodyEl = document.querySelector('body');
    const sidebarToggleEl = document.querySelector('.sidebar-toggle');

    sidebarToggleEl.addEventListener('click', () => {
      bodyEl.classList.toggle('sidebar-open');
      bodyEl.classList.toggle('sidebar-collapse');
    })
    
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const loginBtnEl = document.querySelector('.menu-item_login');
    loginBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      const loginModal = App.getModal('login');
      loginModal.open();
    })

    const registerBtnEl = document.querySelector('.menu-item_register');
    registerBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      const registerModal = App.getModal('register');
      registerModal.open();
    })

    const logoutBtnEl = document.querySelector('.menu-item_logout');
    logoutBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout((response) => {
        if (response && response.success) {
          console.log('result logout', response.success);
          User.unsetCurrent();
          App.setState('init');
        }
      });
    })

    /* const createNewAccount = document.querySelector('.create-account');
    createNewAccount.addEventListener('click', () => {
      const newAccountModal = App.getModal('createAccount');
      newAccountModal.open();
    }) */

  }
}