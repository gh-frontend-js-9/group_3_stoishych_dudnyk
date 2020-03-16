export interface ICardContainer {
    type: string,
    cards: ICard[],
}

export interface ICard {
    title: string,
    text: string,
    key: string,
    type: string,
    author: string
}
