const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`border-2 border-yellow-400  font-bold  rounded-lg p-4 px-6  ${
        selected ? "bg-yellow-400 text-black" : ""
      } hover:bg-yellow-400 hover:text-black `}
    >
      {children}
    </span>
  );
};

export default SelectButton;
