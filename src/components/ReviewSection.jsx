import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      review:
        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. ",
      name: "Harry Potter",
      img: "/assets/images/testimonials/pfp1.jpg",
      location: "Mumbai",
    },
    {
      id: 2,
      review:
        "Awesome Experience!! The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
      name: "Ron Rizly",
      img: "/assets/images/testimonials/pfp2.jpg",
      location: "Kolkata",
    },
  ];

  return (
    <article className="mt-12 bg-slate-100 mb-12">
      <span className="flex flex-col">
        <h3 className="my-3 text-center text-2xl font-semibold">
          Reviewed By People
        </h3>
        <h3 className="my-3 text-center font-bold text-4xl mx-16">
          Client's Testimonials
        </h3>
        <h6 className="my-3 lg:px-40 xl:px-96 text-gray-400 text-center px-10">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.{" "}
        </h6>
      </span>
      <section
        className={`flex flex-col lg:flex-row mt-10 items-center justify-center pb-16 `}
      >
        {reviews.map((item) => {
          return (
            <ReviewCard
              key={item.id}
              name={item.name}
              img={item.img}
              location={item.location}
              review={item.review}
            />
          );
        })}
      </section>
    </article>
  );
};

export default ReviewSection;
