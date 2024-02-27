
import uniqid from 'uniqid';
import githubPic from '../assets/4.jpeg';
import flexboxMem from '../assets/1.jpeg';
import udemyMem from '../assets/3.jpeg';
import gotMem from '../assets/123.jpg';

export const posts = [
    {
        text: 'Наколькі добрая ідэя шукаць працу праз мемы? 🤔',
        img: null,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
    {
        text: 'Адзін лайк і я пачну так рабіць! Пагналі!',
        img: null,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
    {
        text: "Я і 5 маіх pet-праектаў на Github",
        img: githubPic,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
    {
        text: "Гэта я чакаю вашага запрашэння на стажыроўку",
        img: flexboxMem,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
    {
        text: 'Самы час ці то лайкнуць, ці то дэлітнуць 🧐',
        img: null,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
    {
        text: "Я і мой сябр з сертыфікатамі з Udemy",
        img: udemyMem,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
    {
        text: "",
        img: gotMem,
        important: false,
        like: false,
        retweet: false,
        id: uniqid(),
    },
];
