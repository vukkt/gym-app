'use client';
import Button from './Button';

export default function PricingCard({
  name,
  blurb,
  price,
  isPopular = false,
  className = '',
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-8 shadow-sm ${
        isPopular ? 'border-brand-500 ring-2 ring-brand-500' : 'border-gray-200'
      } ${className}`}
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 flex-1 mb-4">{blurb}</p>

      <div className="my-6">
        <span className="text-4xl font-extrabold">${price}</span>
        <span className="text-sm text-gray-500"> /mo</span>
      </div>

      <Button
        href="#contact"
        className="block mx-auto w-fit mt-auto"
        onClick={() =>
          gaEvent({ action: 'join_now_clicked', category: 'CTA', label: name })
        }
      >
        Join&nbsp;Now
      </Button>
    </article>
  );
}
