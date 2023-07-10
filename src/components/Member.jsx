const Member = ({ member }) => {
  return (
    <span className="shadow-xl md:mx-24 bg-slate-100 lg:mx-6 rounded-lg mt-10">
      <img className="md:mx-auto" src={member.img} />
      <span>
        <h3 className="text-center font-extrabold text-2xl mt-6">
          {member.name}
        </h3>
        <h3 className="text-center text-lg text-gray-400">{member.pos}</h3>
      </span>
    </span>
  );
};

export default Member;
