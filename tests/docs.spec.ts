import { test, expect } from '@playwright/test';

test.describe('Docs pages render', () => {
  test('TC-02: /api/payment renders endpoint + params + response', async ({ page }) => {
    await page.goto('/api/payment');
    await expect(page.locator('code', { hasText: 'https://api.cjone-pg.com/v2/payments/request' })).toBeVisible();
    await expect(page.getByText('Response JSON')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'mid' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'orderId' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'amount' })).toBeVisible();
  });

  test('TC-03: /api/cancel renders endpoint + scenarios + sample', async ({ page }) => {
    await page.goto('/api/cancel');
    await expect(page.getByText('/v1/payments/cancel', { exact: true })).toBeVisible();
    await expect(page.getByText('취소 시나리오')).toBeVisible();
    await expect(page.getByText('full_stacked_bar_chart')).toBeVisible();
    await expect(page.getByText('pie_chart')).toBeVisible();
    await expect(page.getByText('curl -X POST')).toBeVisible();
  });

  test('TC-04: /api/status renders endpoint + status codes', async ({ page }) => {
    await page.goto('/api/status');
    await expect(page.getByText('/v1/payments/status/{tid}')).toBeVisible();
    await expect(page.getByText('응답 상태 코드 정의')).toBeVisible();
    await expect(page.getByText('200', { exact: true })).toBeVisible();
    await expect(page.getByText('404', { exact: true })).toBeVisible();
    await expect(page.getByText('500', { exact: true })).toBeVisible();
  });
});

test.describe('App pages render (hardcoded checks only)', () => {
  test('TC-05: /playground renders request/response panels', async ({ page }) => {
    await page.goto('/playground');
    await expect(page.getByRole('heading', { name: 'API Playground' })).toBeVisible();
    await expect(page.getByRole('button', { name: '요청 보내기' })).toBeVisible();
    await expect(page.getByText('Response', { exact: true })).toBeVisible();
    await expect(page.getByText('Response Body')).toBeVisible();
  });

  test('TC-06: /support renders inquiry list + form', async ({ page }) => {
    await page.goto('/support');
    await expect(page.getByRole('link', { name: 'Support' })).toBeVisible();
    await expect(page.getByText('문의 리스트')).toBeVisible();
    await expect(page.getByText('문의 등록')).toBeVisible();
    await expect(page.getByPlaceholder('문의 요약을 입력하세요')).toBeVisible();
  });
});
