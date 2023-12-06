import NameBadge from "../NameBadge/NameBadge";

const NamesList = ({ names }) => {
  return (
    <div>
      <h2>Names List</h2>
      {names.map((name, index) => (
        <NameBadge
          key={index}
          firstName={name.firstName}
          lastName={name.lastName}
        />
      ))}
    </div>
  );
};

export default NamesList;
