import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import ExpenseForm from "./components/CreateExpenseForm";
import ExpenseList from "./components/ExpenseList";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-serif flex flex-col flex-wrap gap-10 justify-centet content-center h-screen bg-slate-600 text-cyan-100">
        <h1 className="text-5xl">Expense Manager</h1>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
