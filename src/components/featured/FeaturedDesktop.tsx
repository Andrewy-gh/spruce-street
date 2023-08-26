import { Link } from 'react-router-dom';
import { featured } from '../../data/images';

export default function FeaturedDesktop() {
  return (
    <section className="hidden lg:block w-container mx-auto text-primary-dark my-space-l">
      <h3 className="text-step-3 font-medium font-accent mb-space-2xs">
        Featured Collections
      </h3>
      <div className="grid grid-cols-4 auto-rows-min gap-4">
        {featured.map((item) => (
          <div key={item.id} className="mx-auto">
            <Link to={item.path}>
              <img
                src={item.src}
                alt={item.title}
                className="aspect-[4/5] mb-space-2xs"
              />
              <p className="text-step-1 font-body text-center">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
