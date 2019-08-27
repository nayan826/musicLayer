import React from "react";
import {songslist} from "./songsList.js";
import { Player } from "./Player.js";
import { ListGroup, Container, Row, Col, Image, Button } from "react-bootstrap";
import boy from "./images/cd[1028].png";

export class Discog extends React.Component{
constructor(props) {
    super(props);
    this.state = { selectedSongs: [], selectedTitle: "", selectedYear: 0 };
  }
  handleClickedAlbum = (e, g, f) => {
    this.setState({ selectedSongs: e, selectedTitle: g, selectedYear: f });
  };

   render(){
  return(
    
<Row className = "LowerBody" >
          <Col sm={6} xs={6}>
            <div style={{textAlign:"center"}}>
              <Image src={boy} rounded style={{ width: 300, height: 200 }} />
            </div>
            <br />
            <div>
              <h3>DiscoGraphy</h3>

              <ListGroup as="ul">
                {songslist.map((songs, id) => (
                  <ListGroup.Item className= "List"  as="li" id={id}>
                    <span style={{ float: "left", width: "80px" }}>
                      {songs.title}
                    </span>
                    <span style={{ paddingLeft: "20px" }}>=</span>
                    <span style={{ paddingLeft: "20px" }}>
                      <span className = "playingStyle">{songs.year_released}</span>
                    </span>
                    <span style={{ float: "right", paddingLeft: "20px" }}>
                      <Button
                        onClick={() =>
                          this.handleClickedAlbum(
                            songs.songs,
                            songs.title,
                            songs.year_released
                          )
                        }
                      >
                        Listen
                      </Button>
                    </span>
                    <span style={{ float: "right", paddingLeft: "20px" }}>
                      <Button>Buy</Button>
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} xs={6}>
            <Player
              selectedSongs={this.state.selectedSongs}
              selectedTitle={this.state.selectedTitle}
              selectedYear={this.state.selectedYear}
            />
          </Col>
     </Row>

  )
}
}