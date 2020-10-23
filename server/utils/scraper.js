import cheerio from "cheerio";

// utils
import checkData from "./checkData";

const scraper = (html, checkWith) => {
  let data = [];
  const $ = cheerio.load(html);
  $(".lister-item-content").each((i, el) => {
    let details = {};
    // title
    let title = $(el).find(".lister-item-header").text();
    title = title.split("\n")[3].trim();
    details.title = title;

    // genre
    let genre = $(el).find(".genre").text();
    details.genre = genre.split("\n")[1].trim().split(",");

    // imdb rating
    let imdb = $(el).find(".ratings-imdb-rating").attr("data-value");
    details.imdb = imdb;

    // metascore
    let metascore = $(el).find(".metascore").text();
    details.metascore = metascore.trim();

    // director and stars
    let names = $(el).find(".sort-num_votes-visible").prev().text().trim();
    names = names.split("\n");
    let director = names[1];
    details.director = director;

    let stars = names.slice(4).map((name) => name.trim().replace(",", ""));
    details.stars = stars;

    if (!!checkData(details, checkWith)) data.push(details);
  });
  return data;
};

export default scraper;
