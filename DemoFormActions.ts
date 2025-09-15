import { Page, expect } from '@playwright/test';
import { DemoFormLocators } from './DemoFormLocators';

export class DemoFormActions {
  readonly page: Page;
  readonly locators: DemoFormLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new DemoFormLocators(page);
  }

  async goto() {
    await this.page.goto('http://ashbyhq.com');
    await this.locators.getStartedButton.click();
  }

  async fillEmail(email: string) {
    await this.locators.emailInput.fill(email);
    await expect(this.locators.emailInput).toHaveValue(email);
  }

  async fillFirstName(firstName: string) {
    await this.locators.firstNameInput.fill(firstName);
    await expect(this.locators.firstNameInput).toHaveValue(firstName);
  }

  async fillLastName(lastName: string) {
    await this.locators.lastNameInput.fill(lastName);
    await expect(this.locators.lastNameInput).toHaveValue(lastName);
  }

  async selectCompanySize(value: string) {
    await this.locators.companySizeDropdown.selectOption({ value });
    await expect(this.locators.companySizeDropdown).toHaveValue(value);
  }

  async selectInterestedIn(value: string) {
    await this.locators.interestedInDropdown.selectOption({ value });
    await expect(this.locators.interestedInDropdown).toHaveValue(value);
  }

  async selectCurrentATS(value: string) {
    await this.locators.currentATSDropdown.selectOption({ value });
    await expect(this.locators.currentATSDropdown).toHaveValue(value);
  }

  async fillHearAboutUs(text: string) {
    await this.locators.hearAboutUsTextbox.fill(text);
    await expect(this.locators.hearAboutUsTextbox).toHaveValue(text);
  }

  async clickScheduleDemo() {
    await this.locators.scheduleDemoButton.click();
  }
}
