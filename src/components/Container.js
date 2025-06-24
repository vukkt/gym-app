/**
 * Width-constrained wrapper that gives us the same
 * horizontal rhythm on every page.
 */
export default function Container({
  as: Tag = 'div',
  className = '',
  children,
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
