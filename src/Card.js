import React from 'react';
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.jpg';
import img4 from './imgs/4.jpg';
import img5 from './imgs/5.jpg';

export default class Card extends React.Component {
    constructor(id, level, category, language, has_video, description) {
        super()

        this.category = category;
        this.id = id;
        this.level = level;
        this.language = language;
        this.has_video = has_video;
        this.description = description;
        this.img = this.randomImage();

    }

    render() {
        return (

            <div className="cardDiv" onClick={e => this.clicked(this.id)}>
                <div className="cardImg">
                    <img src={this.img} />
                </div>
                <div className="cardText">
                    <b className='cardTitle'>{this.checkIfVideo(this)}</b>
                    <div className='cardLevel'><b>{this.level}</b></div>
                    <div className='cardDesc'>{this.description}</div>
                </div>
            </div>
        )

    }

    checkIfVideo(card) {
        if (card.has_video === true) {
            return (card.category + " (Видео)");
        }
        else return card.category;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomImage() {
        var lol = this.getRandomInt(1, 5)
        if (lol === 1) return img1;
        if (lol === 2) return img2;
        if (lol === 3) return img3;
        if (lol === 4) return img4;
        if (lol === 5) return img5;
    }

    clicked(id)
    {
        console.log("clicked at card id "+id)
    }
}   
