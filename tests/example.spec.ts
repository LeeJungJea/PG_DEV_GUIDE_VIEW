import { test, expect } from '@playwright/test';

test('메인 페이지 로딩 및 핵심 문구 확인', async ({ page }) => {
  await page.goto('/');

  // 메인 타이틀 확인
  const title = page.locator('h1');
  await expect(title).toContainText('CJ PG로 결제 연동을');

  // 'API 시작하기' 버튼이 있는지 확인
  const apiButton = page.getByRole('button', { name: 'API 시작하기' });
  await expect(apiButton).toBeVisible();

  // 'API 테스트' 버튼이 있는지 확인
  const testButton = page.getByRole('button', { name: 'API 테스트' });
  await expect(testButton).toBeVisible();
});
