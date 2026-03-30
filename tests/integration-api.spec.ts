import { test, expect } from '@playwright/test';

test('프론트에서 백엔드 /api/hello 호출 가능', async ({ page }) => {
  await page.goto('/');

  const result = await page.evaluate(async () => {
    const response = await fetch('http://localhost:8080/api/hello');
    const json = await response.json();
    return { ok: response.ok, status: response.status, json };
  });

  expect(result.ok).toBe(true);
  expect(result.status).toBe(200);
  expect(result.json).toEqual({ message: 'Hello from Kotlin & MyBatis!' });
});
