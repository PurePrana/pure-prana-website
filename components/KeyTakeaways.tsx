interface KeyTakeawaysProps {
  takeaways: string[]
  className?: string
}

export default function KeyTakeaways({
  takeaways,
  className = '',
}: KeyTakeawaysProps) {
  return (
    <div
      className={`bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 p-6 my-8 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-primary-900 mb-3">
            Key Takeaways
          </h3>
          <ul className="space-y-2">
            {takeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-primary-700 leading-relaxed">
                  {takeaway}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
