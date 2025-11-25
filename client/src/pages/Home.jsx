import { Icon } from "@iconify/react";
import Expense from "../components/ui/Expense";
import { useState } from "react";
function App() {

  const [expenses, _setExpenses] = useState([
    {
      id: 1,
      icon: 'mdi:train',
      name: 'Metro',
      tag: 'Transportation',
      amount: 30,
      max: 70
    },
    {
      id: 2,
      icon: 'mdi:train',
      name: 'Metro',
      tag: 'Transportation',
      amount: 30,
      max: 70
    },
    {
      id: 3,
      icon: 'mdi:train',
      name: 'Metro',
      tag: 'Transportation',
      amount: 30,
      max: 70
    },
    {
      id: 4,
      icon: 'mdi:train',
      name: 'Metro',
      tag: 'Transportation',
      amount: 30,
      max: 70
    },
    {
      id: 5,
      icon: 'mdi:train',
      name: 'Metro',
      tag: 'Transportation',
      amount: 30,
      max: 70
    },
  ])

  return (
    <div className="px-5">
      <p className="p-3">Income: $1000</p>
      <div className="bg-gray-100 rounded-xl w-full">
        <div className="px-3 py-2 flex justify-between items-center border-b-1 border-b-gray-200">
          <h1 className="font-bold text-2xl">Fixed Expenses</h1>
          <div>
            <button className="bg-blue-500 rounded-full p-1">
              <Icon icon="tabler:plus" className="text-xl text-white" />
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {expenses.map(expense => (
            <Expense key={expense.id} {...expense} />
          ))}
        </div>

        {/* <Expense icon={'mdi:train'} name={'Metro'} tag={'Transportation'} amount={25} max={70} /> */}
        {/* <Expense icon={'mdi:train'} name={'Metro'} tag={'Transportation'} amount={30} max={70} /> */}
        {/* <Expense icon={'mdi:train'} name={'Metro'} tag={'Transportation'} amount={30} max={70} /> */}
      </div>
    </div>
  )
}

export default App
