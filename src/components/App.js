import React, { Component } from 'react';
import axios from "axios";

import TeamList from "./Team/TeamList/TeamList";
import TeamHeaders from "./Team/TeamHeaders/TeamHeaders"
import Search from "./Search/Search";
import Loader from "./Loader/Loader";

import { API_URL, HEADERS } from "../api/api";
import "./app.scss";

class App extends Component {
  state = {
    result: null,
    loading: false,
    search: "",
    error: false
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSearchRequest = () => {
    this.setState({ loading: true, result: null });

    axios.get(`${API_URL}/${this.state.search}/standings`, HEADERS)
      .then(response => {
        this.setState({
          result: response.data,
          loading: false,
          error: false
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { search, result, loading, error } = this.state;

    const loader = loading ? (
      <Loader loading={loading}/>
    ) : '';

    const resultTable = result !== null ?(
      <div
        className="table-container"
        role="table"
        aria-label="Destinations"
      >
        <TeamHeaders />
        <TeamList teams={result.standings[0].table} />
      </div>
    ) : '';

    const errorMessage = error ?(
      <div>
        <p>Busca inválida</p>
      </div>
    ) : '';

    return (
      <div className="content">
        <h1>Football Cristão Table</h1>
        <div className="row">
          <Search
            onChangeSearch={this.handleSearch}
            searchRequest={this.handleSearchRequest}
            buttonEnable={search.length}
          />
        </div>
        <div className="row">
          {loader}
          {resultTable}
          {errorMessage}
        </div>
      </div>
    )
  }
}

export default App;
