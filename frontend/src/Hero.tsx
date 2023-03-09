export default function Hero({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="mb-10 flex items-center justify-center">
        <p className="mr-2 text-4xl font-semibold">GuidefAI DOC Assistant</p>
        <p className="text-[27px]">🦖</p>
      </div>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Product intelligence and understanding v0.1!
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        You can ask anything about your product. Assistant it's trained on your product instruction manual.
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Start by entering your query in the input field below and we will do the
        rest!
      </p>
    </div>
  );
}
