import React from "react";
// import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
// import "./index.scss";
import Image0 from "./images/0w.png"
import Image1 from "./images/1.jpg"
import Image2 from "./images/2.jpg"
import Image3 from "./images/3.jpg"
import wood from "./images/background.jpg"
import "./App.css"
import "./app.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
        <hr></hr>

        <div class="alert alert-dismissible alert-danger" >
          {/* <button type="button" class="close" data-dismiss="alert">&times;</button> */}
          <strong>ANTIFRAGILE</strong> Please handle with care!
        </div>

      </div>
    </div>
  );
});

const PageEnd = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
        <hr></hr>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {

  if (props.number === 1)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-image" style={{ backgroundImage: "url(" + Image0 + ")", backgroundSize: 'cover' }} > </div>
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
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundColor: "#000000", backgroundImage: "url(" + Image1 + ")" }} > </div>
        </div>
      </div>
    )

  if (props.number === 4)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div class="container">
            <br></br><br></br>
            <div className="row">
              <div class="col-1"></div>
              <div class="col">
                <blockquote class="blockquote">
                  <p class="mb-3">
                    This is me from my studio in a small town in the south of Italy. Not long ago!
                  <br></br>
                    <br></br>
                  &nbsp;&nbsp;I wanted to be a writer and tell stories, but I was not great with words.<br></br>
                    <br></br>
                  &nbsp;&nbsp;One day a friend introduced me to <strong>computational thinking: </strong>
                  a clean way to untangle and expand thoughts.<br></br>
                  There followed many sleepless nights coding stories, and the next thing I knew was I wanted
                  to spend my life writing computational tales.
                  </p>
                </blockquote>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    );


  if (props.number === 5)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundColor: "#000000", backgroundImage: "url(" + Image2 + ")" }} ></div>
        </div>
      </div>
    )


  if (props.number === 6)
    return (
      <div className="page" ref={ref}>
          <div className="page-content">
            <div class="container">
            <br></br><br></br>
            <div className="row">
              <div class="col-1"></div>
              <div class="col">
                <blockquote class="blockquote">
                  <p class="mb-3">
                  During my years at uni, I had the opportunity to meet many exceptional people and had so much fun with <strong>'yet-to-succeed'</strong> projects.
                  The flying laurel wreath drone that followed me on my master's graduation day is my favorite one.  
                   </p>
                  &nbsp;University alone was not able to fill my aspirations and knowledge hungriness. 
                  I am so grateful to <strong>online courses</strong>, summer schools, and books that taught me things like spanning from business strategy to modern agriculture techniques.
                  &nbsp;I also learned about digital governance, contract law, and <strong>Blockchain</strong>, and I fell in love with them. 
                </blockquote>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    );

  if (props.number === 7)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundColor: "#000000", backgroundImage: "url(" + Image3 + ")" }} > </div>
        </div>
      </div>
    )


    if (props.number === 8)
    return (
      <div className="page" ref={ref}>
          <div className="page-content">
            <div class="container">
            <br></br><br></br>
            <div className="row">
              <div class="col-1"></div>
              <div class="col">
                <blockquote class="blockquote">
                  <p class="mb-3">
                  I moved to the UK, where I invented and patented Overledger, the core technology behind a Top-80 market cap blockchain. 
Not entirely convinced on how blockchains companies were operating during the 2017 ICOs, I took part from a polluted blockchain ecosystem. 
                   </p>

                I decided to join Dyson a company that valued my creativity need and out-of-the-box thinking. 
Today, I work for Amazon, helping to build the infrastructure for testing video apps on devices while 
I spend my spare time working on Blockchain and the future of smart-contracts with law.  

                </blockquote>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

export default class DemoBlock extends React.Component {
  constructor(props) {
    super(props);

    const pages = [<PageCover key={0} pos="top">
      <div>
        About Scrapebook 
      </div>
      <p class="blink_me">Click to open</p>
    </PageCover>];

    let pageNum = 0;
    for (let i = 0; i < 8; i++) {
      pageNum++;
      if (pageNum > 8) pageNum = 1;
      pages.push(<Page key={i + 1} image={(pageNum) + ".jpg"} number={i + 1}></Page>);
    }

    pages.push(<PageEnd key={101} pos="bottom">So Long, and Thanks for All the Fish 🐬</PageEnd>);

    this.state = {
      page: 0,
      totalPage: 0,
      orientation: 'landscape',
      state: 'read',
      pages: pages
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  }

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  }

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  }

  onChangeOrientation = (e) => {
    this.setState({
      orientation: e.data,
    });
  }

  onChangeState = (e) => {
    this.setState({
      state: e.data,
    });
  }

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount(),
    });
  }

  render() {
    return (
      <div>
        <div className="container-md" style={{ paddingTop: "1%", backgroundImage: "url(" + wood + ")", position: "relative" }}>
          <HTMLFlipBook
            width={550}
            height={625}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}

            onFlip={this.onPage}
            onChangeOrientation={this.onChangeOrientation}
            onChangeState={this.onChangeState}

            className=" html-book demo-book"
            style={{ backgroundImage: "url(images/background.jpg)" }}

            ref={(el) => this.flipBook = el}
          >
            {this.state.pages}
          </HTMLFlipBook>
          <br></br>

        </div>

        {/* <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-info btn-sm btn-prev"
                onClick={this.prevButtonClick}
              >
                Previous page
              </button>
                [<span>{this.state.page + 1}</span> of <span>{this.state.totalPage}</span>]
              <button
                type="button"
                className="btn btn-info btn-sm btn-next"
                onClick={this.nextButtonClick}
              >
                Next page
              </button>
            </div>
            <div className="col-md-6">
              State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}




