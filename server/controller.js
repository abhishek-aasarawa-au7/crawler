import got from "got";

import catchError from "./utils/catchError";

import scraper from "./utils/scraper";

const controller = {};

controller.test = catchError(async (req, res, next) => {
  let { title = null, imdb = null } = req.query;
  let result = [];
  let start = 1,
    mul = 0;
  // request(
  //   "https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&count=10&start=0&ref_=adv_nxt",
  //   async (err, response, body) => {
  //     if (err) console.log("error==>", err);
  //     let result = await scraper(body, { title, imdb });
  //     res.send(result);
  //   }
  // );
  while (result.length < 100 && mul < 1) {
    let response = await got(
      `https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&count=10&start=${
        start + 200 * mul
      }&ref_=adv_nxt`
    );
    let data = scraper(response.body, { title, imdb });
    result = [...result, ...data];
    mul += 1;
  }
  res.send(result);
});

export default controller;
