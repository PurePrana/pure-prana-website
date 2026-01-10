import { SupplementFacts as SupplementFactsType } from '@/lib/types'

interface SupplementFactsProps {
  facts: SupplementFactsType
  productName: string
}

export default function SupplementFacts({ facts, productName }: SupplementFactsProps) {
  return (
    <div className="bg-white border-2 border-black rounded-lg overflow-hidden max-w-md">
      {/* Header */}
      <div className="bg-black text-white p-3 text-center">
        <h3 className="text-xl font-bold">Supplement Facts</h3>
      </div>

      {/* Serving Info */}
      <div className="border-b-8 border-black p-3">
        <div className="flex justify-between text-sm">
          <span className="font-bold">Serving Size:</span>
          <span>{facts.servingSize}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-bold">Servings Per Container:</span>
          <span>{facts.servingsPerContainer}</span>
        </div>
      </div>

      {/* Column Headers */}
      <div className="border-b border-black p-2 flex justify-between text-xs font-bold bg-gray-100">
        <span>Amount Per Serving</span>
        <span>% Daily Value*</span>
      </div>

      {/* Ingredients */}
      <div className="divide-y divide-gray-300">
        {facts.ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="p-2 flex justify-between items-start text-sm hover:bg-gray-50"
          >
            <div className="flex-1 pr-4">
              <span className="font-medium">{ingredient.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold min-w-[60px] text-right">
                {ingredient.amount}
              </span>
              <span className="text-gray-500 min-w-[30px] text-right">**</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t-4 border-black p-3 text-xs text-gray-600 space-y-2">
        <p>* Percent Daily Values are based on a 2,000 calorie diet.</p>
        <p>** Daily Value not established.</p>
      </div>

      {/* Other Ingredients */}
      <div className="border-t border-gray-300 p-3 text-xs">
        <p className="font-bold mb-1">Other Ingredients:</p>
        <p className="text-gray-600">
          Vegetable Cellulose Capsule, Rice Flour, Magnesium Stearate
        </p>
      </div>

      {/* Warnings */}
      <div className="border-t border-gray-300 p-3 text-xs bg-yellow-50">
        <p className="font-bold mb-1">Caution:</p>
        <p className="text-gray-600">
          Consult your healthcare provider before use if you are pregnant, nursing,
          taking medication, or have a medical condition. Keep out of reach of children.
          Store in a cool, dry place.
        </p>
      </div>
    </div>
  )
}
