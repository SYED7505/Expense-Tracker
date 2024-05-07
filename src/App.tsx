import "./App.css";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TableList from "./components/TableList";
import Filter from "./components/Filter";
// import { Expense } from "./Expense";
import { useState } from "react";
import { Expense } from "./Expense";

export const categories = ["Groceries", "Entertainment", "Utilities"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const onDelete = (id: number) => {
    const newExpenseList = expenses.filter((expense) => expense.id != id);
    setExpenses(newExpenseList);
  };

  const selectedList = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const addItems = (expense: Expense) => {
    const val = [...expenses, expense];
    setExpenses(val);
  };
  return (
    <>
      <Form onHandleSubmit={addItems} />
      <Filter
        onSelectCategory={(category: string) => setSelectedCategory(category)}
      />
      <TableList onDelete={onDelete} expenses={selectedList} />
    </>
  );
}

export default App;
