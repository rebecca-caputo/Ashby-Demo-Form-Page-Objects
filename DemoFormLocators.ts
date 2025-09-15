import { Page } from '@playwright/test';

export class DemoFormLocators {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInput() {
    return this.page.getByRole('textbox', { name: "Email" });
  }

  get firstNameInput() {
    return this.page.getByRole('textbox', { name: "First name" });
  }

  get lastNameInput() {
    return this.page.getByRole('textbox', { name: "Last name" });
  }

  get companySizeDropdown() {
    return this.page.locator('#companySize');
  }

  get interestedInDropdown() {
    return this.page.locator('#interestedInBound');
  }

  get currentATSDropdown() {
    return this.page.locator('#currentATS');
  }

  get hearAboutUsTextbox() {
    return this.page.getByRole('textbox', { name: "How did you hear about us?" });
  }

  get scheduleDemoButton() {
    return this.page.getByRole('button', { name: "Schedule Demo" });
  }

  get getStartedButton() {
    return this.page.locator(
      '[class="c-hugmbG c-hugmbG-cQvTiH-size-3 c-hugmbG-fsAjoA-appearance-primary c-hugmbG-guRKBj-size-4"]'
    );
  }
}