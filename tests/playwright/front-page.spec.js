const { test, describe, expect } = require('@playwright/test')

describe('Blogs', () => {
  test('front page can be opened after login and displays blogs app', async ({
    page
  }) => {
    await page.goto('')
    // await page.goto('http://localhost:5173/')
    await page.getByRole('button', { name: 'login' }).click()
    await page.locator('input[type="text"]').click()
    await page.locator('input[type="text"]').fill('')
    await page.locator('input[type="text"]').press('CapsLock')
    await page.locator('input[type="text"]').fill('lemon')
    await page.locator('input[type="password"]').click()
    await page.locator('input[type="password"]').fill('sokol')
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('blogs app')).toBeVisible()
  })
})
