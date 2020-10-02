import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {
    Button,
    Col,
    Container,
    InputGroup,
    FormControl,
} from "react-bootstrap";

export class App extends Component {
    state = {
        artistQuery: "",
    };

    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value})
    };

    searchArtist = async () => {
        console.log("searching....")
        // fetch artist info
        try{
            let artistInfo = await fetch(`https://spotify-api-wrapper.appspot.com/artist${this.state.artistQuery}`)
            console.log(artistInfo)
        }
        catch(e){

        }

        // fetch songs https://spotify-api-wrapper.appspot.com/artist/0du5cEVh5yTK9QJze8zA0C/top-tracks


        // fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artistQuery}`)
        // .then( res => res.json())
        // .then( x => console.log(x))

        console.log(artistInfo);
        // fetch songs info
    }

    checkKey = event => {
        if(event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
        return (
            <div>
                <Container fluid className="text-center">
                    <h2>Music master</h2>
                    {/* <Row> */}
                    <InputGroup className="mb-3" >
                        <FormControl 
                            aria-describedby="searchHelp"
                            value={this.state.artistQuery}
                            type="text"
                            onChange={this.updateArtistQuery}
                            onKeyPress={this.checkKey} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.searchArtist}>search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    {/* </Row> */}
                </Container>
            </div>
        );
    }
}

export default App;
