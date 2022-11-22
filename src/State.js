import React, { Component } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";

class State extends Component {
  constructor(props) {
    super();
    this.state = {
      stateData: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://data.covid19india.org/state_district_wise.json")
      .then((response) => {
        this.setState({ stateData: response.data });
      });
  }

  render() {
    let eventk = 0;

    let keys = Object.keys(this.state.stateData);
    let totalcases = 0;
    let totaldeaths = 0;
    let totalconfirmed = 0;

    return (
      <div className="row">
        <div classNmae="col-md-12">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {keys.map((itm, ky) => {
              let districts = this.state.stateData[itm].districtData;
              eventk = eventk + 1;
              let districtkeys = Object.keys(districts);
              let total_active = 0;
              let total_confirmed = 0;
              let total_deaths = 0;
              let total_recover = 0;

              for (let x in districts) {
                total_active += districts[x].active;
                total_confirmed += districts[x].confirmed;
                total_deaths += districts[x].deceased;
                total_recover += districts[x].total_recovered;
              }
              totalcases += total_active;
              totaldeaths += total_deaths;
              totalconfirmed += total_confirmed;

              return (
                <Accordion.Item eventKey={eventk}>
                  <Accordion.Header>{itm}</Accordion.Header>
                  <Accordion.Body>
                    <table className="table table-bordered table-striped ">
                      <thead>
                        <tr>
                          <td>District</td>
                          <td>Confirmed</td>
                          <td>Active</td>
                          <td>Recovered</td>
                          <td>Deaths</td>
                        </tr>
                      </thead>
                      <tbody>
                        {districtkeys.map((itm, key) => {
                          return (
                            <>
                              <tr>
                                <td>{itm}</td>
                                <td>{districts[itm].confirmed}</td>
                                <td>{districts[itm].active}</td>
                                <td>{districts[itm].recovered}</td>
                                <td>{districts[itm].deceased}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
        <h2>{totalcases}</h2>
        <h2>{totaldeaths}</h2>
        <h1>{totalconfirmed}</h1>
      </div>
    );
  }
}

export default State;
