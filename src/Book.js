import React from "react";
import HTMLFlipBook from "react-pageflip";
import Image1 from "./images/1.jpg"
import Image2 from "./images/2.jpg"
import Image3 from "./images/3.jpg"

import Image0 from "./images/0w.png"


import "./app.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
        <hr></hr>
        <div class="alert alert-dismissible alert-info" >
          {/* <button type="button" class="close" data-dismiss="alert">&times;</button> */}
          <p class="lead"><strong>Oh snap!</strong> Do not open, very confidential!</p>
        </div>

      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {

  if (props.number === 1)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-image" style={{ backgroundImage: "url(" + props.image + ")", backgroundSize: 'cover' }} > </div>
        </div>
      </div>
    )

  if (props.number === 2)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="container" >
            <div className="row">
              <div class="col-sm">
                <blockquote class="blockquote text-right" style={{ margin: "13%" }}>
                  <p class="mb-0">⚡ τὰ δὲ πάντα οἰακίζει Κεραυνός <br></br>  All things are ruled by Lightning</p>
                  <footer class="blockquote-footer"><p class="lead">Heraclitus in <cite title="Source Title">Fragment 64</cite></p></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  if (props.number === 3)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundImage: "url(" + props.image + ")" }} > </div>
        </div>
      </div>
    )

  if (props.number === 5)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundImage: "url(" + props.image + ")" }} > </div>
        </div>
      </div>
    )


  if (props.number === 7)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundImage: "url(" + props.image + ")" }} > </div>
        </div>
      </div>
    )

  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image" style={{ backgroundImage: "url(" + props.image + ")" }} > </div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
      screeHt: 1
    };
    this.handleResize = this.handleResize.bind(this);
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data
    });
  };

  handleResize(WindowSize, event) {
    this.setState({ WindowSize: window.innerWidth })
    console.log('porco')
  }

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount()
    });
    this.setState({
      screeHt: window.innerHeight
    });
  }

  render() {
    return (
        <HTMLFlipBook
          autoSize = {true}
          width={550}
          height={733}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="book"
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>Gaetano's Scrapebook</PageCover>
          <Page number={1} image={Image0}>Lorem ipsum...</Page>
          <Page number={2}>Lorem ipsum...</Page>
          <Page number={3} image={Image1}>Lorem ipsum...</Page>
          <Page number={4}>Lorem ipsum...</Page>
          <Page number={5} image={Image2}>Lorem ipsum...</Page>
          <Page number={6}>Lorem ipsum...</Page>
          <Page number={7} image={Image3}>Lorem ipsum...</Page>
          <Page number={8} >Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

    );
  }
}

export default function App() {
  return <Book />;
}