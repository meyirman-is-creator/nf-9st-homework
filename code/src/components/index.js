import Article from "./Article.js";


export default function ArticleList(item) {
    const articles = [
        {
            author: "Ben Pickman",
            title: "Caitlin Clark sets NCAA women’s basketball scoring record with 3,528th career point - The Athletic",
            describe:"Clark unseated former Washington star Kelsey Plum's scoring record.",
            urlToImg: "https://cdn.theathletic.com/app/uploads/2024/02/15203604/gettyimages-2006240531-594x594-1.jpg"
        },
        {
            author: "Meg Linehan",
            title: "USWNT’s Lindsey Horan apologizes for ‘poorly expressed’ comments - The Athletic",
            describe:`U.S. women’s national team captain Lindsey Horan opened her time in front of reporters by addressing the reaction to her comments on American fans’ knowledge of soccer, made in an interview with The Athletic published earlier this month.“First and foremost, …`,
            urlToImg: "https://cdn.theathletic.com/app/uploads/2024/02/15185322/GettyImages-1831536423-1.jpg"
        },
        {
            author: "Ryan Morik",
            title: "Tiger Woods hits brutal shank in return to PGA Tour: 'Been a while' - Fox News",
            describe:"Tiger Woods played his first round of professional golf since July, and most of it was solid. But Woods shanked a shot on the 18th hole.",
            urlToImg: "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/tiger-woods-shank.jpg"
        },

    ]
    return articles.map((item, index)=><Article {...item} key = {index}/>)
};