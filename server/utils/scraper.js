import axios from "axios";
import cheerio from "cheerio";

const scraper = async () => {
  let response = await axios.get(
    "https://www.imdb.com/search/title/?count=10&groups=top_1000&sort=user_rating"
  );

  const $ = cheerio.load(response);
  let title = $("title").text();
  return title;
};

export default scraper;
