const checkData = (data, checkWith) => {
  for (let key in checkWith) {
    if (!!checkWith[key]) {
      // if title is key
      if (key === "title")
        if (data[key].toLowerCase() !== checkWith[key].toLowerCase())
          return false;

      // if imdb rating
      if (key === "imdb")
        if (parseFloat(data[key]) < parseFloat(checkWith[key])) return false;

      // if genre is key
      if (key === "genre") {
        let idx = data.genre.findIndex(
          (ele) => ele.toLowerCase() === checkWith[key].toLowerCase()
        );
        if (idx === -1) return false;
      }

      //   if director is key
      if (key === "director")
        if (data[key].toLowerCase() !== checkWith[key].toLowerCase())
          return false;

      // if star is key
      if (key === "star") {
        let idx = data.stars.findIndex(
          (star) => star.toLowerCase() === checkWith[key].toLowerCase()
        );
        if (idx !== -1) return false;
      }
    }
  }
  return true;
};

export default checkData;
