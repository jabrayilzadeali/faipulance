const ProgressBar = ({ percentage, progressBg = 'bg-gray-300', fromColor = 'from-green-400', toColor = 'to-green-600', height = 'h-3' }) => {
  // const width
  return (
    <div className="flex justify-between items-center gap-3">
      <div className={`relative w-full ${progressBg} ${height} rounded-2xl`}>
        <div style={{ width: `${percentage}%` }} className={`absolute bg-gradient-to-r transition-all ${fromColor} ${toColor} h-full rounded-2xl`}></div>
      </div>
      <span className="text-green-800">{percentage}%</span>
    </div>
  )
}

export default ProgressBar
