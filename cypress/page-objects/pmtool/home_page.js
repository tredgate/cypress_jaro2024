import { HeaderSection } from "./common/header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");
    this.welcomePageHeader = "#welcome-page-header";
    // ! Nemůžeme použít kvůli BasePage, pokud zavoláme visit(), potom ještě na HomePage nejsme a v rámci konstruktoru se nám již vyhodnotí assert, který spadne (protože jsme v aplikaci na jiné stránce)
    // cy.get(this.welcomePageHeader).should("be.visible");
    // * Možné řešení
    // if (!isPageDirectlyOpen) {
    //   cy.get(this.welcomePageHeader).should("be.visible");
    // }
  }
}
