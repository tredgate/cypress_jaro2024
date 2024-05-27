import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header have text 'Login'", () => {
    new LoginPage().pageHeaderHaveText("Login");
  });

  it("Username have placeholder 'Username'", () => {
    new LoginPage().usernameHavePlaceholder("Username");
  });

  it("Password have placeholder 'Password'", () => {
    new LoginPage().passwordHavePlaceholder("Password");
  });

  it("Remember me checkbox contain text 'Remember Me'", () => {
    new LoginPage().rememberMeContainText("Remember Me");
  });

  it("Login button have text 'Login'", () => {
    new LoginPage().loginButtonHaveText("Login");
  });

  it("Forget password link have text 'Password forgotten?'", () => {
    new LoginPage().passwordForgettenHaveText("Password forgotten?");
  });

  it("Logo is visible", () => {
    new LoginPage().logoIsVisible();
  });
});
