import { FormEvent, useRef } from "react";
import { categories } from "../App";
import { Expense } from "../Expense";

interface Props {
  onHandleSubmit: (expense: Expense) => void;
}

const Form = ({ onHandleSubmit }: Props) => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const expense: Expense = {
      id: Date.now(),
      description: descriptionRef.current!.value,
      amount: parseInt(amountRef.current!.value),
      category: categoryRef.current!.value,
    };

    // if (amountRef.current !== null)
    //   expense.amount = parseInt(amountRef.current?.value);
    onHandleSubmit(expense);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          ref={descriptionRef}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          ref={amountRef}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select ref={categoryRef} id="category" className="form-select">
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
