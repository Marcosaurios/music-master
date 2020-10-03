import React, { Component, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";



export class Track extends Component {
    
    state = {
        song: null,
        playing: false
    }

    doPlay = () => {

        const audio = new Audio(this.props.audio);

        this.setState({ song: audio});

        if(this.state.playing){
            // pause
            this.state.song.pause();
        }
        else{
            // play
            console.log(this)
            audio.play();
        }
        this.setState( state => ({ playing: !state.playing}))
    }

    render() {
        const { image, name } = this.props;
        return (
            <div>
                <Card className="m-2" style={{ width: "170px", height: '350px' }}>
                    <Card.Img variant="top" src={image.url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button variant="primary" onClick={ this.doPlay }>Play</Button>
                    </Card.Body>
                </Card>
            </div>
        )

    }
}


export default Track;
