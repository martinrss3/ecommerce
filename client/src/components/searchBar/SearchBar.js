import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct, getAllProduct } from '../../actions/actionProduct';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  };

  handleChange(event) {
    this.setState({ keyword: event.target.value });
    this.props.getProduct(this.state.keyword);
    if (this.state.keyword === null) {
      this.props.getAllProduct()
    }
  };

  handleSubmit(event) {
    event.preventDefault()
    this.props.getProduct(this.state.keyword);
  };

  render() {
    const { keyword } = this.state;
    return (
      <div class="overlay">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="overlay-content">
            <input class="inp"
              size='50'
              type="text"
              id="keyword"
              placeholder='Buscar'
              autoComplete="off"
              value={keyword}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </form>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    product: state.catalog
  };
};

export default connect(mapStateToProps, { getProduct, getAllProduct })(SearchBar);