/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    Account.create(data, (err, response) => {
      console.log(response);
      console.log(err);
      if (response.success) {
        App.update();
        const modal = App.getModal('createAccount');
        modal.close();
      }
    })
  }
}