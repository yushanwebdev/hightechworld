import React, { Component } from "react";
import styled from "styled-components";

export default class Banner extends Component {
  render() {
    return (
      <BannerSlider>
        <div className="banner-item">
          <picture>
            <source srcSet="img/banner.jpg" media="(min-width: 768px)" />
            <img srcSet="img/banner-mobile.jpg" alt="High Tech World" />
          </picture>
        </div>
      </BannerSlider>
    );
  }
}

const BannerSlider = styled.div`
  min-height: 200px;
`;
