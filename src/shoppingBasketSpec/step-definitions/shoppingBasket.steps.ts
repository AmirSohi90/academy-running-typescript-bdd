import {defineFeature, loadFeature} from "jest-cucumber";
import {ShoppingBasket} from "../../main/app";

const feature = loadFeature('./src/shoppingBasketSpec/features/shoppingBasket.feature');

defineFeature(feature, test => {
    let actualOutput: string;
    let shoppingBasket: ShoppingBasket = new ShoppingBasket();


    test("Add items to shopping basket", ({given, and, when, then}) => {
        given(/^Client adds (\d+) units of item "(.*)"$/, (units:number, itemName: string) => {
            shoppingBasket.addItem(units, itemName);
        })
        and(/^Client adds (\d+) units of item "(.*)"$/, (units:number, itemName: string) => {
            shoppingBasket.addItem(units, itemName);
        })
        when("Client prints shopping basket", () => {
            actualOutput = shoppingBasket.showBasket();
        })
        then(/^they should see$/, expectedOutput => {
            expect(actualOutput).toBe(expectedOutput);
        })
    });

});