import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  parent: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    margin: theme.spacing(5, 2),
  },
  input: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(1, 0),
  },
}));

export default useStyles;
