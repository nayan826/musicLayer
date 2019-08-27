import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import { Discog } from "./disco.js";
import boy from "./images/boy[1030].png";

export class FullPage extends React.Component{
	render(){
		return(
<Container>
<Row className = "UpperBody">
<Col md={12} style={{textAlign:"center"}}>
<Image src={boy} rounded fluid style={{ width: 200, height: 200 }}/>
</Col>
</Row>
<Discog />

</Container>

			);
	}
}