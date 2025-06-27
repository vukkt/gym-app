import Icon from '@/components/Icon';

export default function Footer() {
  return (
    <footer className="bg-brand-500 text-white text-sm py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Gym&nbsp;XYZ. All rights reserved.</p>

        <div className="flex gap-6">
          <a
            href="https://facebook.com/yourgym"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Icon name="facebook" size={20} />
          </a>
          <a
            href="https://instagram.com/yourgym"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Icon name="instagram" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
