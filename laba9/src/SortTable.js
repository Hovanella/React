import { Component } from "react";
import {goods} from "./Components/Goods";

export class SortTable extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true};
    this.state = { array: goods };
  }

  styles = {
    td: {
      padding: "10px 20px",
      border: "1px solid",
    },
    table: {
      margin: "100px",
      borderCollapse: "collapse",
    },
  };
  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      goodsCopy = [...goods].sort(function (a, b) {
        if (a[byWhat] > b[byWhat]) {
          return direction;
        }
        if (a[byWhat] < b[byWhat]) {
          return direction * -1;
        }
        return 0;
      });
    this.sorted[byWhat] = !this.sorted[byWhat];
    this.setState({ array: goodsCopy });
  }
  table() {
    let stringNumber = 0;
    return this.state.array.map((item) => {
      let inStockStyle = {};
      if (+item.inStock < 3) inStockStyle = { background: "yellow" };
      if (+item.inStock === 0) inStockStyle = { background: "red" };
      return (
        <tr key={item.id}>
          <td style={this.styles.td}>{++stringNumber}</td>
          <td style={this.styles.td}>{item.name}</td>
          <td style={this.styles.td}>${item.price}</td>
          <td style={Object.assign({}, this.styles.td, inStockStyle)}>
            {item.inStock}
          </td>
          <td style={this.styles.td}><img src={item.img} style={{width: "50px"}} alt=""/></td>
          <td style={this.styles.td}>{item.desc}</td>
          <td style={this.styles.td}>{item.new ? "Yes" : "No"}</td>
          <td style={this.styles.td}>{item.discount}%</td>
        </tr>
      );
    });
  }
  head = [
    <tr>
      <td style={this.styles.td}>№</td>
      <td style={this.styles.td}>
        <button onClick={() => this.sort("name")}>Name</button>
      </td>
      <td style={this.styles.td}>
        <button onClick={() => this.sort("price")}>Price</button>
      </td>
      <td style={this.styles.td}>
        <button onClick={() => this.sort("inStock")}>In Stock</button>
      </td>
      <td style={this.styles.td}>Image</td>
      <td style={this.styles.td}>Description</td>
      <td style={this.styles.td}>Is New</td>
      <td style={this.styles.td}>
        <button onClick={() => this.sort("discount")}>Discount</button>
      </td>
    </tr>,
  ];
  render() {
    return (
      <table style={this.styles.table}>
        <tbody>
        {this.head}
        {this.table()}
        </tbody>
      </table>
    );
  }
}
