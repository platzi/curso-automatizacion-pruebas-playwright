import { test, expect } from '@playwright/test';

test('añadir producto al carrito', async ({ page }) => {
// ir a la url http://automationpractice.com/index.php
await page.goto('http://automationpractice.com/index.php');
// hover del primer producto que encontremos
await page.hover('#homefeatured li >> nth=0');
// click en el primer producto ver mas detalles
await page.locator('#homefeatured a:has-text("More") >> nth=0').click();
await expect(page).toHaveURL('http://automationpractice.com/index.php?id_product=1&controller=product');
// click en el boton + (dos veces)
await page.locator('.button-plus').click();
await page.locator('.button-plus').click();
// seleccionar en el menu dropdown un nuevo tamaño
await page.locator('#group_1').selectOption('2');
// click en botono añadir al carrito
await page.locator('button[name="Submit"]').click();
// verificar (exepect) "Product successfully added to your shopping cart" esta visible
await expect(page.locator('#layer_cart')).toBeVisible();
await expect(page.locator('#layer_cart')).toContainText('Product successfully added to your shopping cart');

// click en boton continue shopping 
await page.locator('.button-container span >> nth=0').click();
// el modal debe no ser visible
await expect(page.locator('#layer_cart')).not.toBeVisible();
})