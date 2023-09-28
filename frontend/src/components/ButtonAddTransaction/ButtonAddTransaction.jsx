import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setIsModalAddTransactionOpen } from "../../redux/global/globalSlice";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: "#212121",
    background: "radial-gradient( transparent, rgba(255, 254, 254, 0.8))",
    border: "2px solid #212121",
    position: "fixed",
    bottom: "7vh",
    right: "2vw",
  },
}));

export default function ButtonAddTransactions() {
  const dispatch = useDispatch;
  const classes = useStyles();
  const openModal = () => {
    dispatch(setIsModalAddTransactionOpen(true));
  };
  return (
    <>
      <Fab onClick={openModal} aria-label="add" className={classes.margin}>
        <AddIcon />
      </Fab>
    </>
  );
}
