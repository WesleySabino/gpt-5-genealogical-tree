import { test, expect } from '@playwright/test';

test('create tree, add person, export', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add child' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await expect(page.getByText('Root Person')).toBeVisible();
});
