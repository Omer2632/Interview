import { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";
import InterviewAccord from "./InterviewAccord";

const Question = ({ question, answer }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container>
      <Row className="mt-5 ">
        <Card className="cards">
          <Card.Body className="d-flex justify-content-between">
            <h5 className="h3">{question}</h5>
            {toggle ? (
              <button className="animate" onClick={() => setToggle(false)}>
                {arrowdown}
              </button>
            ) : (
              <button onClick={() => setToggle(true)}>{arrowup}</button>
            )}
          </Card.Body>
          {toggle ? "" : <InterviewAccord answer={answer} />}
        </Card>
      </Row>
    </Container>
  );
};

export default Question;
