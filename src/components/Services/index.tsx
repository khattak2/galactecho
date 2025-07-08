import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="cursor-none py-16 md:py-20 lg:py-28 ">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="We bring your digital vision to life with our expert solutions tailored to your needs"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ServicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
