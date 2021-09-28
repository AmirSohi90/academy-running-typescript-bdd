import { ShoppingBasket } from "../main/app";

describe("Shopping Basket", () => {
  describe("when a user adds an item to the basket", () => {
    it("should add the item to the basket with the name and quantity", () => {
      const shoppingBasket = new ShoppingBasket();
      shoppingBasket.addItem("The Hobbit", 2);
      expect(shoppingBasket.items).toEqual([
        { name: "The Hobbit", quantity: 2 },
      ]);
    });
    //TODO WHAT HAPPENS IF SOMEONE TRIES TO ADD THE SAME ITEM AGAIN
  });
});
