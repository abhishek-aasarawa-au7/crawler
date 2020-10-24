import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

// style
import useStyles from "./home.style";

const Home = ({ history }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      imdb: 1,
      title: "",
      director: "",
      star: "",
      genre: "",
    },

    validationSchema: Yup.object({
      imdb: Yup.number()
        .min(1, "Minimum 1 digit required")
        .max(10, "Maximum 2 digit required"),
      title: Yup.string()
        .trim()
        .min(2, "Mininum 2 characters")
        .max(40, "Maximum 40 characters"),
      director: Yup.string()
        .trim()
        .min(2, "Mininum 2 characters")
        .max(40, "Maximum 40 characters"),
      star: Yup.string()
        .trim()
        .min(2, "Mininum 2 characters")
        .max(40, "Maximum 40 characters"),
      genre: Yup.string()
        .trim()
        .min(2, "Mininum 2 characters")
        .max(20, "Maximum 20 characters"),
    }),
  });

  // input data handle
  const onChangeHandle = (e) => {
    formik.setFieldTouched(e.target.id);
    return formik.handleChange(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { imdb, title, director, star, genre } = formik.values;
    history.push(
      `search?imdb=${imdb}&title=${title}&director=${director}&star=${star}&genre=${genre}`
    );
  };

  return (
    <div className={classes.parent}>
      <h1>Search From Movie List</h1>
      <form onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.input}>
            <TextField
              id="imdb"
              label="Up to IMDb Rating"
              type="text"
              name="imdb"
              value={formik.values.imdb}
              onChange={onChangeHandle}
              error={formik.errors.imdb && formik.touched.imdb}
              helperText={formik.errors.imdb}
            />
          </Grid>
          <Grid item xs={12} className={classes.input}>
            <TextField
              id="title"
              name="title"
              label="Title"
              type="text"
              value={formik.values.title}
              onChange={onChangeHandle}
              error={formik.errors.title && formik.touched.title}
              helperText={formik.errors.title}
            />
          </Grid>
          <Grid item xs={12} className={classes.input}>
            <TextField
              id="director"
              name="director"
              label="Director"
              type="text"
              value={formik.values.director}
              onChange={onChangeHandle}
              error={formik.errors.director && formik.touched.director}
              helperText={formik.errors.director}
            />
          </Grid>
          <Grid item xs={12} className={classes.input}>
            <TextField
              id="star"
              name="star"
              label="Star Name"
              type="text"
              value={formik.values.star}
              onChange={onChangeHandle}
              error={formik.errors.star && formik.touched.star}
              helperText={formik.errors.star}
            />
          </Grid>
          <Grid item xs={12} className={classes.input}>
            <TextField
              id="genre"
              name="genre"
              label="genre"
              type="text"
              value={formik.values.genre}
              onChange={onChangeHandle}
              error={formik.errors.genre && formik.touched.genre}
              helperText={formik.errors.genre}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Home;
