import { test, expect } from '@playwright/test';

test('verify syllabus week 1 link', async ({ page }) => {
  await page.goto('http://localhost:3005/syllabus');
  
  // Open the first accordion item (Week 1)
  await page.click('button:has-text("Week 1")');
  
  // Check for the link
  const link = page.locator('a:has-text("Week 1 Materials")');
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', 'https://github.com/victordeman/distributed-systems/blob/distributed-systems-course-site-3201933785043314310/links/week1');
});

test('verify staff page layout', async ({ page }) => {
  await page.goto('http://localhost:3005/staff');
  
  // Check headings
  await expect(page.locator('h1')).toHaveText('Teaching Staff');
  
  // Check for staff members
  await expect(page.locator('text=PROF. Ekpe Okorafor')).toBeVisible();
  await expect(page.locator('text=Dr.-Ing Chukwuka Victor Obionwu')).toBeVisible();
  
  // Capture screenshot
  await page.screenshot({ path: 'staff-page.png', fullPage: true });
});
