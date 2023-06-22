const SelectButton = ({ children, selected, onClick }) => {
  // const useStyles = makeStyles({
  //   selectbutton: {
  //     border: "1px solid gold",
  //     borderRadius: 5,
  //     padding: 10,
  //     paddingLeft: 20,
  //     paddingRight: 20,
  //     fontFamily: "Montserrat",
  //     cursor: "pointer",
  //     backgroundColor: selected ? "gold" : "",
  //     color: selected ? "black" : "",
  //     fontWeight: selected ? 700 : 500,
  //     "&:hover": {
  //       backgroundColor: "gold",
  //       color: "black",
  //     },
  //     width: "22%",
  //     //   margin: 5,
  //   },
  // });

  // const classes = useStyles();

  return (
    <span
      onClick={onClick}
      className={`border-2 border-yellow-400 rounded-lg p-4 px-6  ${
        selected ? "bg-yellow-400 text-black" : ""
      } hover:bg-yellow-400 hover:text-black `}
    >
      {children}
    </span>
  );
};

export default SelectButton;
