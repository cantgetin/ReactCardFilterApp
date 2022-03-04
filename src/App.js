import React, { Component } from 'react';
import CardList from './CardList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_category: "",
      filter_level: "",
      filter_language: "",
      filter_search: "",
      show_all: false
    }
  }

  updateCategoryFilter = (str) => {
    this.setState({ filter_category: str });
    this.setState({show_all: false})
  }

  updateLevelFilter = (str) => {
    this.setState({ filter_level: str });
    this.setState({show_all: false})
  }

  updateLanguageFilter = (str) => {
    this.setState({ filter_language: str });
    this.setState({show_all: false})
  }

  updateSearchFilter = (str) => {
    this.setState({ filter_search: str });
    this.setState({show_all: false})
  }

  showAll = () => {
    console.log("show all clicked ")
    this.setState({show_all: true})
  }


  render() {
    return (

      <div className="page">
        <div className="header">
          <div className="header_elements">
            <div className="header_tophalf">
              <span>Поиск по ключевым словам:</span>
              <input className="search" placeholder="Поиск" onChange={e => this.updateSearchFilter(e.target.value)}></input>
            </div>
            <div className='whiteLine'>
            </div>
            <div className="header_bottomhalf">
              <span>Фильтровать статьи по:</span>

              <select onChange={e => this.updateLevelFilter(e.target.value)}>
                <option value="">Любой уровень</option>
                <option value="Junior">Junior</option>
                <option value="Middle">Middle</option>
                <option value="Senior">Senior</option>
              </select>

              <select onChange={e => this.updateCategoryFilter(e.target.value)}>
                <option value="">Все категории</option>
                <option value="Статьи">Статьи</option>
                <option value="Интервью">Интервью</option>
                <option value="Задачи">Задачи</option>
                <option value="Книги">Книги</option>
              </select>

              <select onChange={e => this.updateLanguageFilter(e.target.value)}>
                <option value="">Все языки</option>
                <option value="js">js</option>
                <option value="php">php</option>
              </select>

            </div>
          </div>
        </div>
        <div>
          <CardList
            filter_category={this.state.filter_category}
            filter_level={this.state.filter_level}
            filter_language={this.state.filter_language}
            filter_search={this.state.filter_search}
            show_all={this.state.show_all} />
        </div>
        <div className='showMore'>
          <button onClick={this.showAll}>Показать больше</button>
        </div>
      </div>
    );
  }
}

export default App;




/* <div className="cardbox">
        <div className="cardbox123">
            {this.cards.filter(card => card.category == this.state.filter_category || this.state.filter_category == "")
                      .filter(card => card.level == this.state.filter_level || this.state.filter_level == "")
                      .filter(card => card.language == this.state.filter_language || this.state.filter_language == "")
                      .filter(card => card.description.indexOf(this.state.filter_search) != -1 || this.state.filter_search == "")
                      .map((card, i) => {     
            console.log("Entered "+this.state.filter_category);    
            return (card.render())})}
        </div>
      </div> */

      // this.card1 = new Card(1, "Junior", "Статьи", "js", true, "fuck react lol this shit sucks")
    // this.card2 = new Card(2, "Middle", "Задачи", "php", true, "fuck react lol this shit sucks")
    // this.card3 = new Card(3, "Senior", "Книги", "js", true, "fuck react lol this shit sucks")
    // this.card4 = new Card(4, "Senior", "Интервью", "php", false, "retard")
    // this.card5 = new Card(5, "Junior", "Интервью", "js", true, "rtasaas")

    // this.cards = [this.card1, this.card2, this.card3, this.card4, this.card5];