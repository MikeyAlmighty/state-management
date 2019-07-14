import React, { Component } from "react";

// New Context is created
const MovieContext = React.createContext();

// Provider Component
class MovieProvider extends Component {
  state = {
    title: "DeadPool 2",
    release: 2018,
    cool: true
  };
  render() {
    return (
      <MovieContext.Provider
        value={{
          // We can build up an object that should be provided
          movieTitle: this.state.title,
          releaseYear: this.state.release,
          setMovieTitle: title => this.setState({ title })
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

// Breaking parent-child (prop-drilling) for this exercise
const Cinema = () => <Movies />;

class Movies extends Component {
  render() {
    return (
      <div>
        <MovieContext.Consumer>
          {context => {
            // Here Context is value prop in MovieContext.Provider, which is sending in
            return (
              <div>
                Name: {context.movieTitle}
                Year of release: {context.releaseYear}
                <button onClick={() => context.setMovieTitle("BatMan")}>
                  Change Title
                </button>
              </div>
            );
          }}
        </MovieContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MovieProvider>
        <div>
          <Cinema />
        </div>
      </MovieProvider>
    );
  }
}

export default App;
