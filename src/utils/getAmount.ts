import ItemsInCart from "../interfaces/itemsInCart";

export default function getAmountOfCart(cart: ItemsInCart[]): number {
  return cart.reduce((acc, item) => acc + item.quantity * Number(item.cost), 0);
}