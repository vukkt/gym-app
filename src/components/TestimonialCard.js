export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <figure className="w-72 shrink-0 px-6 py-8 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col items-center">
      <img
        src={avatar}
        alt={name}
        className="h-16 w-16 rounded-full object-cover mb-4"
        loading="lazy"
      />
      <blockquote className="italic text-gray-700 mb-4 text-center">
        “{quote}”
      </blockquote>
      <figcaption className="font-semibold text-brand-700">{name}</figcaption>
      <p className="text-sm text-gray-500">{role}</p>
    </figure>
  );
}
