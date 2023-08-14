import featured1 from '../../assets/featured-1.webp';
import featured2 from '../../assets/featured-2.webp';
import featured3 from '../../assets/featured-3.webp';

export default function FeaturedDesktop() {
  return (
    <section className="hidden lg:block w-container mx-auto my-space-l">
      <h3 className="text-step-3 font-medium font-accent mb-space-2xs">
        Featured Collections
      </h3>
      <div className="grid grid-cols-4 auto-rows-min gap-4">
        <div className="mx-auto">
          <img src={featured1} alt="placeholder" className="aspect-[4/5]" />
          <p className="text-step-0 font-body">Succulents</p>
        </div>
        <div className="mx-auto">
          <img src={featured2} alt="placeholder" className="aspect-[4/5]" />
          <p className="text-step-0 font-body">Planters</p>
        </div>
        <div className="mx-auto">
          <img src={featured3} alt="placeholder" className="aspect-[4/5]" />
          <p className="text-step-0 font-body">Placeholder</p>
        </div>
        <div className="mx-auto">
          <img src={featured3} alt="placeholder" className="aspect-[4/5]" />
          <p className="text-step-0 font-body">Placeholder</p>
        </div>
      </div>
    </section>
  );
}
