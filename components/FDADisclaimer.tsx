export default function FDADisclaimer({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-xs text-neutral-600 mt-8">
        <p>
          <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. 
          This product is not intended to diagnose, treat, cure, or prevent any disease. 
          Always consult with a healthcare professional before starting any supplement regimen.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mt-12">
      <h4 className="text-sm font-medium text-neutral-900 mb-3">Important Information</h4>
      <div className="space-y-2 text-sm text-neutral-600">
        <p>
          <strong>FDA Disclaimer:</strong> The statements made regarding these products have not been evaluated by the Food and Drug Administration. 
          The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.
        </p>
        <p>
          All information presented here is not meant as a substitute for or alternative to information from healthcare practitioners. 
          Please consult your healthcare professional about potential interactions or other possible complications before using any product.
        </p>
        <p>
          The Federal Food, Drug, and Cosmetic Act requires this notice.
        </p>
      </div>
    </div>
  )
}