type Category = "Bread" | "Fruit" | "Vegetable" | "Meat" | "Milk";

interface shoppingListItems {
  id: string;
  title: string;
  completed: boolean;
  category: Category;
}
export type ShoppingListState = shoppingListItems[];

interface AddAction {
  type: "add";
  category: Category;
}
interface EditAction {
  type: "edit";
  id: string;
  title: string;
}
interface DeleteAction {
  type: "delete";
  id: string;
}
interface CompleteAction {
  type: "complete";
  id: string;
}
export type ShoppingListAction =
  | AddAction
  | EditAction
  | DeleteAction
  | CompleteAction;
