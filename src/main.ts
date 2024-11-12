import { IArticle } from './interfaces/IArticle';
import './style.css'

const searchTerm = document.querySelector("#search__term") as HTMLInputElement;
const selectLanguage= document.querySelector("#select__language") as HTMLInputElement;
const sortSelection = document.querySelector("#sort__selection") as HTMLInputElement;

const btnSearch = document.querySelector("#search") as HTMLElement;

const cardContainer = document.querySelector("#card__container") as HTMLElement;

const BASE_URL = "https://newsapi.org/v2/everything?";
const KEY = "&apiKey=23baddcec7a04c21844659cf751e1861"; /* in .env for future projects */

let articlesArr:IArticle[];

async function fetchAllArticles(url:string) {
  try {
    const response = await fetch(url)
    console.log(response)
    const result = await response.json()
    articlesArr = result.articles
    showAllArticles(articlesArr)
  } catch (error) {
    console.error(error)
  }
}


const showAllArticles = (articlesArr: IArticle[]) => {
  console.log(articlesArr)
  articlesArr.forEach((article:IArticle) => {
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
        <h2>${article.title}</h2>
    <p>${article.description}</p>
    <div>
      <img src="${article.urlToImage}" alt="">
    </div>
    <button><a href="${article.url}">Zum Artikel</a></button>
    `
    cardContainer.append(card)
  });
}




btnSearch?.addEventListener("click", () => {
  const searchTermValue: string = searchTerm.value;
  const selectLanguageValue: string = selectLanguage.value;
  const sortSelectionValue: string  = sortSelection.value;


  fetchAllArticles(BASE_URL + `q=${searchTermValue}&` + `language=${selectLanguageValue}&` + `sortBy=${sortSelectionValue}` + KEY)
})





