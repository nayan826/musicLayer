import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";



export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: 0, songPlaying: "", source: "" };
  }

  handleClick = (e, f, index) => {
    this.setState({ isSelected : index,source: e, songPlaying: f });
  };


  render() {
    const element = <FontAwesomeIcon icon={faPlay} />;
    const selectedSong = this.props.selectedSongs;
    const selectedTitle = this.props.selectedTitle;
    const songPlaying = this.state.songPlaying;

    return (
      <div>
      <div style={{marginTop : 20}}>
        <span className="playingStyle">Now Playing</span>
        </div>
        <br />
        <div style={{marginTop : 5}}>
        <span>{selectedTitle != "" ? selectedTitle : '\u00A0'}</span>
        </div>
        <div style={{marginTop : 5}}>
        <span className="songStyle">{songPlaying != "" ? songPlaying : '\u00A0'}</span>
        </div>
        <ReactAudioPlayer
          // src={"./songs/" + this.state.songPlaying + ".mp3"
          src={this.state.source}
          autoPlay
          controls
        />
        <br />
        <br />
    <div style={{marginTop : 8}}>
        <h3>{selectedTitle}</h3>
        </div>
        

        <ListGroup as="ul">
          {selectedSong.map((songs, id) => (
            <ListGroup.Item className= "List" as="li" key={id = songs.id}> 
              <span
                onClick={() => {
                  this.handleClick(songs.source, songs.title, id);
                }}
                style={{ float: "left" }}
              >
                {element}
              </span>
              <span className =  {this.state.isSelected === id ? "TitleB" : "TitleN"} >
                {songs.title}
              </span>
              <span style={{ float: "right" }}>{songs.length}</span>
            </ ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
