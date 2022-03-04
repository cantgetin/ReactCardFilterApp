import React from 'react';

export default class DownloadController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      jopa1488()
      {
          console.log("mount start")
          var url = "https://api.jsonbin.io/b/5d4be91d00947c04a5a75da2/latest";

          fetch(url).then(res => res.json()).then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
              // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
              // чтобы не перехватывать исключения из ошибок в самих компонентах.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
            
            console.log("mounted")
            console.log(this.items)
      }

    render() {
      const {error, isLoaded, items} = this.state;
      if (error) {
        return <p> Error {error.message}</p>
      }
      else if (!isLoaded)
      {
        return <p> Loading... </p>
      }
      else 
      {
        return (
          <ul>
            {items.map(item => (
              <li key={item.text}>

              </li>
            ))}
          </ul>
        )
    }
  }
}