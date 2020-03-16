import { ICardContainer, ICard } from './interfaces/cardInterfaces';

export interface IResponse {
    thematic: ICardContainer[],
    other: ICard[]
}

export let kindaServerResponse:IResponse = {
    thematic: [
        {
            type: 'Popular',
            cards: [
                {
                    title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'a654',
                    type: 'essential',
                    author: 'Capitan America'
                },
                {
                    title: 'one',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'asd5a',
                    type: 'design',
                    author: 'Thanos'
                },
                {
                    title: 'two',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'assd5a',
                    type: 'design',
                    author: 'Thanos'
                },
                {
                    title: 'three',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'aghfg54',
                    type: 'freelance',
                    author: 'Hulk'
                },
                {
                    title: 'four',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: '676asd8',
                    type: 'popular',
                    author: 'Spider man'
                },
            ]
        },

        {
            type: 'Freelance',
            cards: [
                {
                    title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'a654',
                    type: 'essential',
                    author: 'Man 3'
                },
                {
                    title: 'one',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'asd5a',
                    type: 'design',
                    author: 'Man 4'
                },
                {
                    title: 'two',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'assd5a',
                    type: 'design',
                    author: 'Man 5'
                },
                {
                    title: 'three',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: 'aghfg54',
                    type: 'freelance',
                    author: 'Man 6'
                },
                {
                    title: 'four',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
                    key: '676asd8',
                    type: 'popular',
                    author: 'Man 7'
                }
            ]
        }
    ],
    other: [
        {
            title: 'Some random news',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. ',
            key: 'aghfg54asd',
            type: 'freelance',
            author: 'Man 1'
        },
        {
            title: 'Some other random news',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.',
            key: '676asdas8',
            type: 'popular',
            author: 'Man 2'
        }
    ]
}
