import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe("Exercise pmtool project and task", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
  });

  it("Create project and task, validate created information", () => {
    const randomProjectNumber = faker.number.int({ min: 10, max: 99999 });
    const projectName = `FIFKA_self-exercise_${randomProjectNumber}`;
    const startDate = "2024-05-29";
    const uploadFileName = "project_task_attachment.txt";
    const priority = "High";
    const status = "Open";
    const taskStatus = "Open";
    const taskType = "Change";
    const taskName = `FIFKA_TASK_${randomProjectNumber}`;

    new HomePage()
      .clickProjects()
      .clickAddProject()
      .selectPriority(priority)
      .selectStatus(status)
      .typeName(projectName)
      .typeStartDate(startDate)
      .uploadAttachment(uploadFileName)
      .clickSave()
      .clickAddTask()
      .selectStatus(taskStatus)
      .selectTaskType(taskType)
      .typeName(taskName)
      .clickSave()
      .clickProjectInfo()
      .projectNameHaveText(projectName)
      .statusHaveText(status)
      .dateAddedHaveText("29/05/2024")
      .startDateHaveText("29/05/2024")
      .createdByHaveText("Cypress Zima 2024")
      .clickProfile()
      .clickLogout();
  });
});
