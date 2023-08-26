import { Link } from 'react-router-dom';
import { featured } from '../../data/images';

export default function FeaturedMobile() {
  return (
    <section className="lg:hidden w-container mx-auto text-primary-dark my-space-l">
      <h3 className="text-step-3 font-medium font-accent mb-space-2xs">
        Featured Collections
      </h3>

      <div className="lg:hidden  flex items-center justify-center">
        <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          {featured.map((item) => (
            <div
              key={item.id}
              className="w-[220px] inline-block cursor-pointer mr-4"
            >
              <Link to={item.path}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="aspect-[4/5] mb-space-2xs"
                />
                <p className="text-step-1 font-body">{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
