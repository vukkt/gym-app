export default function Icon({ name, className = '' }) {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 3h4v4h-4v4h-4v4h4v8h-4V15H7v-4h4V7a4 4 0 0 1 4-4Z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm6-1.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
      </svg>
    ),
  };
  return (
    <span className={`inline-block h-5 w-5 ${className}`}>{icons[name]}</span>
  );
}
