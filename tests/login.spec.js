import { test, expect } from '@playwright/test';
test('Test SauceDemo login', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    await page.locator('.shopping_cart_badge').click();
    await page.getByRole("button", {name: 'Checkout'}).click();
    await page.locator('#first-name').type('Sijo',{delay: 100});
    await page.locator('#last-name').type('George',{delay: 100});
    await page.locator('#postal-code').type('679321',{delay: 100});
    await page.locator('#continue').click();
}
)
