import { Icon } from "@iconify/react";
import ProgressBar from "./ProgressBar";

const Expense = ({ icon, name, tag, amount, max, className = '' }) => {
  return (
    <div className={`flex w-full p-3 flex-wrap gap-3 justify-between items-center dark:bg-black ${className}`}>
      <Icon icon={icon} className="flex-shrink-0 hidden sm:block size-12 bg-black rounded-full p-3 text-white" />
      <div className="rounded-xl flex-1">
        <div className="rounded-xl flex justify-between items-center">
          <div className="flex gap-2">
            <Icon icon={icon} className="flex-shrink-0 block sm:hidden size-12 bg-black rounded-full p-3 text-white" />
            <div>
              <p className="text-xl font-semibold">{name}</p>
              <span className="text-sm text-gray-500">{tag} · Monthly</span>
            </div>
          </div>
          <div className="flex items-end flex-col">
            <p className="flex justify-center items-center gap-1 text-xl font-semibold">
              {amount}
              <Icon icon="fa7-solid:manat-sign" className="text-xl" />
            </p>
            <span className="flex justify-center gap-1 items-center text-sm text-gray-500">
              / of {max}
              <Icon icon="fa7-solid:manat-sign" className="text-[.7rem]" />
            </span>
          </div>
        </div>
        <ProgressBar percentage={Math.round(amount * 100 / max)} />
      </div>
    </div>
  )
}

export default Expense
