import Container from './Container';

/**
 * Vertical slice with optional background colour.
 * Keeps spacing consistent between sections.
 */
export default function Section({ id, bg = '', className = '', children }) {
  return (
    <section id={id} className={`${bg} py-12 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
