import styles from './Bestsellers.module.css';
import { bestSellers } from '../../data/images';
import { Link } from 'react-router-dom';

export default function BestSellers() {
  return (
    <section className="w-container mx-auto my-space-xl">
      <h3 className="text-step-3 text-primary-dark font-accent mb-space-2xs">
        Best Sellers
      </h3>
      <div className={`${styles.layoutContainer} grid`}>
        {bestSellers.map(({ id, title, src, path }) => (
          <div key={id} className={`${styles.layoutItem} relative group`}>
            <img src={src} alt={title} />
            <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold shadow-button-accent hover:bg-accent-dark">
              <Link to={path}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
