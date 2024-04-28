import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import HomeCard from "./HomeCard";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  const cards = [
    {
      img: "/images/single-elimination.webp",
      title: "Single Elimination",
      text: "Single elimination is a tournament format where each participant or team plays in only one game or match per round. If a participant loses a game, they are eliminated from the tournament. The winners advance to the next round until only one remains and is declared the champion.",
      buttonProps: {},
    },
    {
      img: "/images/double-elimination.webp",
      title: "Double Elimination",
      text: "Double elimination is a tournament format that provides participants with two chances to stay in the competition. Each team or player must lose twice before being eliminated from the tournament. If a participant loses a match, they move to the loser's bracket, where they have another opportunity to continue competing. The winners of the loser's bracket may eventually face the winner of the winner's bracket in the final match to determine the overall champion. This format adds an extra layer of excitement and fairness by allowing competitors to recover from a single loss and showcase their resilience in the pursuit of victory.",
      buttonProps: {},
    },
    {
      img: "/images/round-robin.webp",
      title: "Round Robin",
      text: "Round robin is a tournament format where each participant competes against every other participant in the tournament. Matches are scheduled so that each competitor meets every other competitor once. It ensures fairness by giving each participant an equal opportunity to compete against all others. Points are often awarded for wins, draws, or other outcomes, and the participant with the highest total points at the end of the round robin is declared the winner.",
      buttonProps: {},
    },
  ];

  return (
    <>
      <Container className="home-wrapper">
        <Row>
          <Col md={12} className="heading-wrapper text-center">
            <h1>Schedule Smart, Play Hard</h1>
            <p>
              Never miss a match again! Let our <strong>Bracket Builder</strong>{" "}
              be your ultimate game-day companion.
            </p>
          </Col>
          <Col md={12}>
            <HomeCarousel />
          </Col>
          <Col md={12}>
            <Card className="ntro-card rounded-4 border-primary">
              <Card.Body>
                <p>
                  Welcome to Bracket Builder - where scheduling chaos meets
                  effortless organization! Are you tired of spending countless
                  hours manually arranging fixtures for your sports league,
                  tournament, or event? Say goodbye to the headache of juggling
                  schedules and hello to simplicity with Bracket Builder.
                </p>
                <p>
                  Our intuitive fixture generator takes the stress out of
                  scheduling by automating the entire process for you. Simply
                  input your teams, and any scheduling preferences, and let
                  Bracket Builder work its magic. With just a click, watch as
                  our cutting-edge algorithm creates perfectly balanced and
                  optimized fixtures tailored to your specifications.
                </p>
                <p>
                  Gone are the days of tedious manual calculations and endless
                  revisions. Bracket Builder ensures fairness and efficiency by
                  distributing games evenly across teams and venues, eliminating
                  conflicts, and maximizing the excitement of every match.
                  Whether you're organizing a friendly neighborhood tournament
                  or a professional sports league, our platform adapts to your
                  needs with ease.
                </p>
              </Card.Body>
            </Card>
          </Col>
          {cards.map(({ img, title, text, buttonProps }) => (
            <Col lg={4} md={6} className="my-5" key={title}>
              <HomeCard
                img={img}
                title={title}
                text={text}
                buttonProps={buttonProps}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
