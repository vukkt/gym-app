export default function TeamCard({ name, role, bio, photo }) {
  return (
    <article className="w-64 shrink-0 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col items-center p-6 text-center">
      <img
        src={photo}
        alt={name}
        className="h-24 w-24 rounded-full object-cover mb-4"
        loading="lazy"
      />

      <h3 className="font-semibold text-brand-700">{name}</h3>
      <p className="text-sm text-gray-500 mb-3">{role}</p>

      <p className="text-sm text-gray-600">{bio}</p>
    </article>
  );
}
