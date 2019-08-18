import React, { Component } from "react";

type ImageState = {
  currentIndex: number;
  totalCount: number;
  showActual: boolean;
  content: any;
  loading: boolean;
};

export class ImageDisplay extends Component<any, ImageState> {
  static defaultProps = {
    currentIndex: 1,
    totalCount: 10,
    showActual: false,
    content: null,
    loading: false
  };
  //   constructor(this.props) {
  //     super(props);
  //     this.state = {
  //       currentIndex: 1,
  //       totalCount: 10,
  //       showActual: false,
  //       content: null,
  //       loading: false
  //     };
  //     this.fetchNext = this.fetchNext.bind(this);
  //     this.fetchPrevious = this.fetchPrevious.bind(this);
  //     this.showActual = this.showActual.bind(this);
  //   }

  doFetch(index: number) {
    this.setState({
      currentIndex: index,
      showActual: false
    });
    fetch("api/Content/" + index)
      .then(response => response.json())
      .then(data => {
        this.setState({ content: data, loading: false });
      });
  }

  fetchNext() {
    this.doFetch(this.state.currentIndex + 1);
  }

  fetchPrevious() {
    this.doFetch(this.state.currentIndex - 1);
  }

  showActual() {
    this.setState({
      showActual: true
    });
  }

  render() {
    return (
      <div>
        <p>Foo1</p>
        <p>
          Current count: <strong>{this.state.currentIndex}</strong>
        </p>
        <button
          disabled={this.state.currentIndex <= 1}
          onClick={this.fetchPrevious}
        >
          Previous
        </button>
        <button
          disabled={this.state.currentIndex >= this.state.totalCount}
          onClick={this.fetchNext}
        >
          Next
        </button>
        {this.state.content !== null && this.state.showActual && (
          <div>
            <img
              src="{this.state.content.actualUrl}"
              onClick={this.fetchNext}
            />
            <p>Content: {this.state.content.index} ACTUAL</p>
          </div>
        )}

        {this.state.content !== null && !this.state.showActual && (
          <div>
            <img
              src="{this.state.content.expectedUrl}"
              onClick={this.showActual}
            />
            <p>Content: {this.state.content.index} EXPECTED</p>
          </div>
        )}
      </div>
    );
  }
}
