import Book from "../components/Book";
import Hero from "../components/Hero";
import Member from "../components/Member";

const Teams = () => {
  const members = [
    {
      id: 1,
      img: "../src/assets/images/team/1.png",
      name: "Luke Miller",
      pos: "Salesman",
    },
    {
      id: 2,
      img: "../src/assets/images/team/2.png",
      name: "Michael Diaz",
      pos: "Business Owner",
    },
    {
      id: 3,
      img: "../src/assets/images/team/3.png",
      name: "Briana Ross",
      pos: "Photographer",
    },
    {
      id: 4,
      img: "../src/assets/images/team/4.png",
      name: "Lauren Rivera",
      pos: "Car Dentalist",
    },
    {
      id: 5,
      img: "../src/assets/images/team/5.png",
      name: "Martin Rizz",
      pos: "Mechanic",
    },
    {
      id: 6,
      img: "../src/assets/images/team/6.png",
      name: "Caitlyn Hunt",
      pos: "Manager",
    },
  ];

  return (
    <article>
      <Hero name={"Our Team"} />
      <div className="mx-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => {
          return <Member key={member.id} member={member} />;
        })}
      </div>
      <Book />
    </article>
  );
};

export default Teams;
