import test from "@playwright/test";
import { DemoFormActions } from "../page-objects/DemoFormActions";

test.beforeEach(async ({ page }) => {
  const demoForm = new DemoFormActions(page);
  await demoForm.goto();
});

test('Fill out demo request form', async ({ page }) => {
  const demoForm = new DemoFormActions(page);

  await demoForm.fillEmail('test@example.com');
  await demoForm.fillFirstName('Ashby');
  await demoForm.fillLastName('Test');
  await demoForm.selectCompanySize('101-1000');
  await demoForm.selectInterestedIn('All-in-One Recruiting (ATS)');
  await demoForm.selectCurrentATS('Greenhouse');
  await demoForm.fillHearAboutUs('Known to be the best ATS');
  await demoForm.clickScheduleDemo();

  // Example assertion after clicking "Schedule Demo"
  // await expect(page).toHaveURL(/dashboard/);
});