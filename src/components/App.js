import React, { Component } from 'react';
import axios from "axios";

import Competition from "./Competition/Competition";
import TeamList from "./Team/TeamList/TeamList";
import TeamHeaders from "./Team/TeamHeaders/TeamHeaders"
import Search from "./Search/Search";
import Loader from "./Loader/Loader";

import { API_URL, HEADERS } from "../api/constants";
import "./app.scss";

class App extends Component {
  state = {
    result: null,
    loading: false,
    search: "",
    error: false,
    errorMessage: ""
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSearchRequest = () => {
    this.setState({
      loading: true,
      result: null,
      errorMessage: ""
     });

    axios.get(`${API_URL}/${this.state.search}/standings`, HEADERS)
      .then(response => {
        if(response.data.standings) {
          this.setState({
            result: response.data,
            loading: false,
            error: false,
            errorMessage: ""
          });
        } else {
          this.setState({
            error: true,
            errorMessage: "Desculpa ai. Tente mais tarde 😓"
          })
        }
      })
      .catch(() => {
        this.setState({
          error: true,
          errorMessage: "Busca inválida"
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
      > <Competition name={result.competition.name} country={result.competition.area.name} />
        <TeamHeaders />
        <TeamList teams={result.standings[0].table} />
      </div>
    ) : '';

    const errorMessage = error ?(
      <div>
        <p>{this.state.errorMessage}</p>
      </div>
    ) : '';

    return (
      <div className="content">
      <div className="top">
          <h1>Football Competition</h1>
          <div className="row">
            <Search
              onChangeSearch={this.handleSearch}
              searchRequest={this.handleSearchRequest}
              buttonEnable={search.length}
            />
            </div>
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
