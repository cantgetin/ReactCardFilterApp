import React, { Component } from 'react';
import Card from './Card.js'

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            cards: [],
        }

        this.cards = [];
        this.counter = 0;
    }


    render() {
        const { contacts } = this.state;
        const { cards } = this.state;


        if (cards.length === 0) {
            contacts.forEach(element => {
                var newCard = new Card(element.id, element.level, element.category, element.language, element.isVideo, element.text)
                cards.push(newCard);
            });
            console.log("render cards. converted json objects to cards");
            console.log(cards);
        }
        else {
            console.log("render cards. already have cards. no need to convert");
        }

        console.log(this.props);


        return (
            <div className="cardboxbox">
                {this.counter = 0}
                <h1>СТАТЬИ</h1>
                <div className="cardbox123">
                    {cards.filter(card => card.category === this.props.filter_category || this.props.filter_category === "")
                        .filter(card => card.level === this.props.filter_level || this.props.filter_level === "")
                        .filter(card => card.language === this.props.filter_language || this.props.filter_language === "")
                        .filter(card => card.description.indexOf(this.props.filter_search) !== -1 || this.props.filter_search === "")
                        .filter(card => card.category === "Статьи")
                        .map((card, i) => {
                            if (this.counter < 3 || this.props.show_all)
                            {
                                this.counter++;
                                return (card.render())
                            }
                        })}
                </div>
                {this.counter = 0}
                <h1>ИНТЕРВЬЮ</h1>
                <div className="cardbox123">
                    {cards.filter(card => card.category === this.props.filter_category || this.props.filter_category === "")
                        .filter(card => card.level === this.props.filter_level || this.props.filter_level === "")
                        .filter(card => card.language === this.props.filter_language || this.props.filter_language === "")
                        .filter(card => card.description.indexOf(this.props.filter_search) !== -1 || this.props.filter_search === "")
                        .filter(card => card.category === "Интервью")
                        .map((card, i) => {
                            if (this.counter < 3 || this.props.show_all)
                            {
                                this.counter++;
                                return (card.render())
                            }
                        })}
                </div>
                {this.counter = 0}
                <h1>ЗАДАЧИ</h1>
                <div className="cardbox123">
                    {cards.filter(card => card.category === this.props.filter_category || this.props.filter_category === "")
                        .filter(card => card.level === this.props.filter_level || this.props.filter_level === "")
                        .filter(card => card.language === this.props.filter_language || this.props.filter_language === "")
                        .filter(card => card.description.indexOf(this.props.filter_search) !== -1 || this.props.filter_search === "")
                        .filter(card => card.category === "Задачи")
                        .map((card, i) => {
                            if (this.counter < 3 || this.props.show_all)
                            {
                                this.counter++;
                                return (card.render())
                            }
                        })}
                </div>
                {this.counter = 0}
                <h1>КНИГИ</h1>
                <div className="cardbox123">
                    {cards.filter(card => card.category === this.props.filter_category || this.props.filter_category === "")
                        .filter(card => card.level === this.props.filter_level || this.props.filter_level === "")
                        .filter(card => card.language === this.props.filter_language || this.props.filter_language === "")
                        .filter(card => card.description.indexOf(this.props.filter_search) !== -1 || this.props.filter_search === "")
                        .filter(card => card.category === "Книги")
                        .map((card, i) => {
                            if (this.counter < 3 || this.props.show_all)
                            {
                                this.counter++;
                                return (card.render())
                            }
                        })}
                </div>
            </div>
        )

    }

    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5d4be91d00947c04a5a75da2/latest')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log);
    }

}