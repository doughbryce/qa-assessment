
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe(`elements should be displayed`, () => {
    
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('clicking draw should display the element', async () => {
        const btn = await driver.findElement(By.id('draw'))
        btn.click()
        await driver.sleep(1000)
        const choices = await driver.findElement(By.id('choices'));
        const displayed = await choices.isDisplayed();
        expect(displayed).toBeTruthy()
    })

    test(`clicking see all bots displays all bots`, async () => {
        const btn = await driver.findElement(By.id('see-all'))
        btn.click()
        await driver.sleep(1000)
        const all = await driver.findElement(By.id('all-bots'))
        const displayed = await all.isDisplayed()
        expect(displayed).toBeTruthy()
    })

})