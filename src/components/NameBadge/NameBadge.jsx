const NameBadge = ({ firstName, lastName }) => {
  return (
    <header>
      <h1>
        {firstName} {lastName}
      </h1>
    </header>
  );
};

export default NameBadge;
