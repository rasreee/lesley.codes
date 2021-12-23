const Callout = ({ children }) => {
  return (
    <div className="bg-cultured dark:bg-gray-800 rounded w-full px-4 py-4 max-w-2xl mx-auto">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{'💡'}</span>
        <div className="text markdown align-middle">{children}</div>
      </div>
    </div>
  )
}

export default Callout
