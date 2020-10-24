import got from "got";

import catchError from "./utils/catchError";
import response from "./utils/response";

import scraper from "./utils/scraper";

const controller = {};

controller.test = catchError(async (req, res, next) => {
  let {
    title = null,
    imdb = null,
    director = null,
    star = null,
    genre = null,
  } = req.query;

  let result = [];
  let start = 1,
    mul = 0;

  while (result.length <= 200 && mul < 5) {
    let response = await got(
      `https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&count=200&start=${
        start + 200 * mul
      }&ref_=adv_nxt`
    );
    let data = scraper(response.body, { title, imdb, director, star, genre });
    result = [...result, ...data];
    mul += 1;
  }
  response(res, result, "movie data fetched", false, 200);
});

export default controller;
