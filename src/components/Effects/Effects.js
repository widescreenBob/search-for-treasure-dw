import React, { Component } from 'react';
import styled from "styled-components";

const EffectsList = styled.div`
  max-width: 400px;
  display: block;
  margin: 2rem auto;
`;

class Effects extends Component {
  render() {
    return (
      <>
        <EffectsList>
          <ul>
            {this.props.items.map((item, index) => (
              <li key={index}>{item.effect}</li>
            ))}
          </ul>
        </EffectsList>
      </>
    )
  }
}
export default Effects;