import Button from "@material-ui/core/Button";

const CustomButton = (props) => {
  const { button } = props;

  const buttonStyle =
    button.name === "CHECK"
      ? {
          backgroundColor: button.done
            ? button.checkedColor
            : button.uncheckedColor,
          marginLeft: 8,
        }
      : { backgroundColor: button.color, marginLeft: 8 };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={button.func}
      style={buttonStyle}
    >
      {button.name}
    </Button>
  );
};

export default CustomButton;
