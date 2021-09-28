interface Item {
  name: string;
  quantity: number;
}

export class ShoppingBasket {
  items: Item[] = [];

  addItem(itemName: string, units: number) {
    this.items.push({ name: itemName, quantity: units });
  }

  showBasket(): string {
    throw new Error("Not Implemented");
  }
}
