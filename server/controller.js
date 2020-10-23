import catchError from "./utils/catchError";

import scraper from "./utils/scraper";

const controller = {};

controller.test = catchError(async (req, res, next) => {
  let response = await scraper();
  console.log("response==>", response);
  res.send("done");
});

export default controller;
