import React, { useState } from "react";
import "./Category.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
interface Category {
  id: string;
  category: string;
  name: string;
}
type CategoryList = Category[];

const CategoryComponent = () => {
  const data = [
    { id: "sign-up-form", name: "Sign-Up Form", category: "HTML" },
    { id: "item-cart", name: "Item Cart", category: "HTML" },
    { id: "spaghetti-recipe", name: "Spaghetti Recipe", category: "HTML" },
    { id: "blog-post", name: "Blog Post", category: "HTML" },
    { id: "rainbow-circles", name: "Rainbow Circles", category: "CSS" },
    { id: "navbar", name: "Navbar", category: "CSS" },
    { id: "pig-emoji", name: "Pig Emoji", category: "CSS" },
    { id: "purchase-form", name: "Purchase Form", category: "CSS" },
    {
      id: "algoexpert-products",
      name: "AlgoExpert Products",
      category: "CSS",
    },
    {
      id: "testing-framework",
      name: "Testing Framework",
      category: "JavaScript",
    },
    { id: "array-methods", name: "Array Methods", category: "JavaScript" },
    { id: "event-target", name: "Event Target", category: "JavaScript" },
    { id: "debounce", name: "Debounce", category: "JavaScript" },
    { id: "this-binding", name: "This Binding", category: "JavaScript" },
    { id: "promisify", name: "Promisify", category: "JavaScript" },
    { id: "throttle", name: "Throttle", category: "JavaScript" },
    { id: "curry", name: "Curry", category: "JavaScript" },
    {
      id: "infinite-scroll",
      name: "Infinite Scroll",
      category: "DOM Manipulation",
    },
    { id: "stopwatch", name: "Stopwatch", category: "DOM Manipulation" },
    { id: "tic-tac-toe", name: "Tic Tac Toe", category: "DOM Manipulation" },
    { id: "todo-list", name: "Todo List", category: "DOM Manipulation" },
    { id: "typeahead", name: "Typeahead", category: "DOM Manipulation" },
    { id: "tier-list", name: "Tier List", category: "DOM Manipulation" },
    { id: "toasts", name: "Toasts", category: "DOM Manipulation" },
    { id: "sudoku", name: "Sudoku", category: "DOM Manipulation" },
    {
      id: "questions-list",
      name: "Questions List",
      category: "DOM Manipulation",
    },
  ];

  const [clickedLinks, setClickedLinks] = useState<CategoryList>([]);

  const groupArrayOfObjects = (list: CategoryList, key: string) => {
    return list.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const result = groupArrayOfObjects(data, "category");

  const getClickedLinks = (item: Category) => {
    
    if (!clickedLinks.find(({ id }) => id === item.id)) {
      setClickedLinks([...clickedLinks, item]);
    }

  };

  const cutArray = (i: number) => {
    let array = [...clickedLinks];
    setClickedLinks(array.splice(0, i));
  };

  const CategoryDiv = ({ title }: { title: string }) => {
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {result[title].map((item: Category) => (
            <li onClick={() => getClickedLinks(item)}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const names = Object.keys(result);

  return (
    <>
      <div className="category__wrapper">
        {/* <CategoryDiv title="HTML" />
        <CategoryDiv title="CSS" />
        <CategoryDiv title="JavaScript" />
        <CategoryDiv title="DOM Manipulation" /> */}

        {names.map((name) => (
          <React.Fragment key={name}>
            <CategoryDiv title={name} />
          </React.Fragment>
        ))}
      </div>
      <Breadcrumb>
        {clickedLinks.map((link, i) => (
          <BreadcrumbItem onClick={() => cutArray(i +1)}>
            <BreadcrumbLink href="https://www.google.com" target="_blank">{link.name}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
};

export default CategoryComponent;
