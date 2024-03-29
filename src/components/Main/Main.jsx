import React from "react";
import "./main.css";

import Books from "./Books";
import OurAdvantages from "./OurAdvantages";
import Reviews from "./Reviews";

export default function Main() {

  const books = [
    {
      title: "Новинки",
      books: ["book-0.png", "book-1.png", "book-2.png"],
    },
    {
      title: "Популярное",
      books: ["book-3.png", "book-4.png", "book-5.png"],
    },
  ];

  const ourAdvantages = [
    {
      number: "1",
      text: "Большой выбор книг: Мы предлагаем широкий ассортимент книг на различные тематики, жанры и авторов. У нас вы найдете как бестселлеры, так и скрытые жемчужины, чтобы удовлетворить любой литературный вкус.",
    },
    {
      number: "2",
      text: "Удобство и доступность: Вы можете покупать книги круглосуточно, в любое удобное для вас время. Благодаря нашему интернет-магазину, вы получаете возможность ознакомиться с обширным каталогом книг, сделать выбор и совершить покупку всего за несколько кликов.",
    },
    {
      number: "3",
      text: "Быстрая доставка: Мы ценим ваше время и стараемся обеспечить быструю доставку заказанных книг. Ваши покупки будут надежно упакованы и доставлены прямо до вашей двери, позволяя вам наслаждаться чтением без задержек.",
    },
    {
      number: "4",
      text: "Персонализация: Мы стремимся создать уникальный опыт для каждого клиента. Наша система рекомендаций поможет вам открыть новые книги, соответствующие вашим предпочтениям. Мы также предлагаем возможность оставлять отзывы и делиться своими впечатлениями, чтобы помочь другим читателям в выборе.",
    },
    {
      number: "5",
      text: "Качество обслуживания: Наша команда с гордостью обеспечивает высокий уровень обслуживания. Если у вас возникли вопросы или потребности, наши специалисты всегда готовы помочь вам получить положительный опыт покупок.",
    },
  ];

  const ourReviews = ["reviwes-1.png", "reviwes-2.png", "reviwes-3.png"];

  return (
    <main className="main">
      <Books books={books} />
      <OurAdvantages ourAdvantages={ourAdvantages} />
      <Reviews ourReviews={ourReviews} />
    </main>
  );
}

  // const [books, setBooks] = useState([
  //   {
  //     title: "Новинки",
  //     books: ["book-0.png", "book-1.png", "book-2.png"],
  //   },
  //   {
  //     title: "Популярное",
  //     books: ["book-3.png", "book-4.png", "book-5.png"],
  //   },
  // ]);

  // const [ourAdvantages, setOurAdvantages] = useState([
  //   {
  //     number: "1",
  //     text: "Большой выбор книг: Мы предлагаем широкий ассортимент книг на различные тематики, жанры и авторов. У нас вы найдете как бестселлеры, так и скрытые жемчужины, чтобы удовлетворить любой литературный вкус.",
  //   },
  //   {
  //     number: "2",
  //     text: "Удобство и доступность: Вы можете покупать книги круглосуточно, в любое удобное для вас время. Благодаря нашему интернет-магазину, вы получаете возможность ознакомиться с обширным каталогом книг, сделать выбор и совершить покупку всего за несколько кликов.",
  //   },
  //   {
  //     number: "3",
  //     text: "Быстрая доставка: Мы ценим ваше время и стараемся обеспечить быструю доставку заказанных книг. Ваши покупки будут надежно упакованы и доставлены прямо до вашей двери, позволяя вам наслаждаться чтением без задержек.",
  //   },
  //   {
  //     number: "4",
  //     text: "Персонализация: Мы стремимся создать уникальный опыт для каждого клиента. Наша система рекомендаций поможет вам открыть новые книги, соответствующие вашим предпочтениям. Мы также предлагаем возможность оставлять отзывы и делиться своими впечатлениями, чтобы помочь другим читателям в выборе.",
  //   },
  //   {
  //     number: "5",
  //     text: "Качество обслуживания: Наша команда с гордостью обеспечивает высокий уровень обслуживания. Если у вас возникли вопросы или потребности, наши специалисты всегда готовы помочь вам получить положительный опыт покупок.",
  //   },
  // ]);

  // const [ourReviews, setOurReviews] = useState(["reviwes-1.png", "reviwes-2.png", "reviwes-3.png"]);
