import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Col,
    Row, Card, Badge
} from "react-bootstrap";


const Artist = ({name, image, followers, genres}) => {
    return (
        <Card style={{ /* "border": "none", */ margin: "0 15%" }}>
            <Card.Header as="h2">{name}</Card.Header>
            <Row className="justify-content-center">
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {image && (
                        <img
                            src={image.url}
                            style={{
                                borderRadius: "50%",
                                justifySelf: "center",
                            }}
                        />
                    )}
                </Col>

                <Col>
                    <Card.Body className="text-left">
                        <Card.Text>
                            {"The artist has " +
                                followers.toLocaleString() +
                                " followers"}
                        </Card.Text>
                        <div className="mb-4" style={{}}>
                            <div className="d-inline-block block">
                                {genres.map((el, key) => (
                                    <Badge
                                        variant="secondary"
                                        style={{ margin: "2px" }}
                                        key={key}
                                    >
                                        {el}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <Button variant="success">Open Spotify</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default Artist;
