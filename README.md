# [Credilio Crawler](https://credilio-crawler.herokuapp.com/)
---
A website where you can search from top 1000 movies of IMDb.

### Technologies Used:
##### 1. React-JS
##### 2. Material-UI
##### 3. Express-JS
##### 4. Heroku
##
##
### Routes:
#### 1. Main Routes:
        1. Home Route - "/"
        2. Search Route - "/search"
##
#### 2. API Routes:
        1. Search API - "/api/"
        
### Description:
#### Crawler:
     In this project, I made a crawler. Crawler is a program that take the useful informations from the html body of a website. Here I make crawler that extract all the movies list and their relevant details from given link.
     For crawler I used two packages
    
1. [Got](https://www.npmjs.com/package/got)
2. [Cheerio](https://www.npmjs.com/package/cheerio)
#

    Firstly, from got I extracted all the html of page and then by help of cheerio extracted all the details that I needed.

#### Saving Data:
    The data is saved as a JSON object inside server. It is not saved locally. It is possible to save it that way and it can reduce number of request that we made on server. But due to time limit I did not implement that.
    
#### Search Query:
    User just have to enter the few details about the type movies that he/she want. On frontend side, There are several fields like title, genre, imdb rating, director name and star name. User need to fill any desired field. He can also skip it. 
    The given details than passed as query parameters to the server. Where according to search the data is filtered. This filtered data then go as response to frontend. 
    
#### Showing Search Result
    The search result response is then displayed as a table. For making frontend pages I use material UI. It provides easy solutions for UI.
    


     
