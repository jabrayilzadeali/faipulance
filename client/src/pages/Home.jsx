import { Icon } from "@iconify/react";
function App() {

  return (
    <>
      <p className="">Income: $1000</p>

      <div className="bg-gray-50 p-5 m-5 rounded-xl w-fit">
        <h1 className="font-bold text-2xl mb-5">Fixed Expenses</h1>
        <div className="flex justify-between items-center">

          <Icon icon="mdi:train" className="size-15 bg-black rounded-full p-3 text-white" />
          <div className="w-sm p-3 rounded-xl">
            <div className="py-2 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-2xl font-semibold">metro</p>
                <span className="text-sm text-gray-500">Transportation · Monthly</span>
              </div>
              <div className="flex items-end flex-col">
                <p className="text-2xl font-semibold">15 Azn</p>
                <span className="text-sm text-gray-500">of 50 Azn</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="relative w-full bg-gray-300 h-3 rounded-2xl">
                <div className="absolute w-[34%] bg-gradient-to-r transition-all from-green-400 to-green-600 h-full rounded-2xl"></div>
              </div>
              <span className="text-green-800">24%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
