/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {

  // static URL = '/account';
  static get URL () {
    return '/account'
  }
  static set URL (url) {
    console.warn(url);
  }
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback) {
    const url = Account.URL + '/' + id;
    createRequest({ method: 'GET', url, callback })
  }
}
