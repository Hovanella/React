import React, { Component } from "react";

export class LinksForJobs extends Component {
  switchJobs() {
    let links = [];
    let id = this.props.id;

    switch (id) {
      case "1": {
        links.push(
          {
            name: "Metanit.com",
            url: "https://metanit.com/",
          },
          {
            name: "Github.com",
            url: "https://github.com/",
          }
        );
        break;
      }
      case "2": {
        links.push(
          {
            name: "Artstation.com",
            url: "https://www.artstation.com/",
          },
          {
            name: "Deviantart.com",
            url: "https://www.deviantart.com/",
          }
        );
        break;
      }
      case "3": {
        links.push(
          {
            name: "Sports.ru",
            url: "https://www.sports.ru/",
          },
          {
            name: "Championat.com",
            url: "https://www.championat.com/",
          }
        );
        break;
      }
      case "4": {
        links.push(
          {
            name: "Penfox.ru",
            url: "https://penfox.ru/",
          },
          {
            name: "Pishi.pro",
            url: "https://pishi.pro/",
          }
        );
        break;
      }
      case "5": {
        links.push(
          {
            name: "Medvuza.ru",
            url: "https://medvuza.ru/besplatnye-materialy",
          },
          {
            name: "Medznat.xru",
            url: "https://www.medznat.ru/",
          }
        );
        break;
      }
    }
    console.log(links);

    return (
      <div>
        <ul>
          {links.map((item) => (
            <li>
              <a className="menu-link" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return <div>{this.switchJobs()}</div>;
  }
}
