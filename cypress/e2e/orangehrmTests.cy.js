import LoginPage from '../pages/orangehrm/loginPage';
import MyInfoPage from '../pages/orangehrm/myInfoPage';

const loginPage = new LoginPage();
const myInfoPage = new MyInfoPage();

describe('OrangeHRM - Edit Personal Info', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLogin();
    loginPage.assertLoginSuccessful();
  });

  it('should update personal details and assert success', () => {
    myInfoPage.navigateToMyInfo();
    myInfoPage.updateFirstName('Anahit');
    myInfoPage.updateLastName('Tester');
    myInfoPage.clickSave();
    myInfoPage.assertSuccessMessage();
    myInfoPage.assertUpdatedName('Anahit', 'Tester');
  });
});
