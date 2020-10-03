import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Col,
    Container,
    InputGroup,
    FormControl,
    Row, Card, Badge, BadgeProps, Collapse
} from "react-bootstrap";

import Axios from "axios";

import Artist from './Artist';
import TrackList from './TrackList'



export class App extends Component {
    state = {
        artistQuery: "",
        data: '',
        tracks: [],
        loaded: false
    };

    constructor() {
        super();

        this.getData = this.getData.bind(this);
    }

    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value})
    };


    async getData() {
        try{
            let req = await Axios.get(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artistQuery}`)
            let artistId = '';

            if(req.status === 200) {
                artistId = req.data.artists.items[0].id;
            }

            let topSongs = await Axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artistId}/top-tracks`)
            
            if(req.status===200 && topSongs.status === 200) {
                this.setState({
                    data: req.data.artists.items[0],
                    tracks: topSongs.data.tracks,
                    loaded: true
                });
                
            }
            else{
                console.log('Error on artist')
            }


        }
        catch(e) {
            console.log(e)
            return 'Error';
        }
    }


    checkKey = event => {
        if(event.key === 'Enter') {
            this.getData();
        }
    }

    render() {
        const {followers, genres, popularity, images, name} = this.state.data;
        const tracks = this.state.tracks;

        return (
            <div>
                <Container fluid className="text-center">
                    <h2 className="m-4">Music master</h2>
                    
                    <InputGroup className="" style={{'maxWidth': '60%', 'margin': '2em auto'}}>
                        <FormControl 
                            aria-describedby="searchHelp"
                            value={this.state.artistQuery}
                            type="text"
                            placeholder='Bad Bunny...'
                            onChange={this.updateArtistQuery}
                            onKeyPress={this.checkKey} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.getData}>search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    
                    <Collapse in={this.state.loaded}>
                        <div>
                            {this.state.data != '' ? 
                                <Artist name={name} followers={followers.total} genres={genres} image={images[2]}/>
                                :
                                <Card body bg={'light'} className="m-2">Make a request!</Card>
                            }
                            <TrackList tracks={tracks}/>
                            
                        </div>
                    </Collapse>
                </Container>
            </div>
        );
    }
}

export default App;
