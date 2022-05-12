import React, { Component } from "react";
// import styled from "styled-components";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => (
  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#8e5aaa" }}>
    {text}
  </div>
);
var SMAPKEY = "AIzaSyC10lIxPMbf8-J709s68t6Ngo6ThgveTx8";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -28.052459374395713,
      lng: 151.92427821799953,
    },
    zoom: 13,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <>
        <div style={{ height: "300px", width: "400px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "asd",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={-28.052459374395713}
              lng={151.92427821799953}
              text="Chants Kennels"
            />
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default SimpleMap;
