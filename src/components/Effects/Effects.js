import React, { Component } from 'react';
import styled from "styled-components";

const EffectsList = styled.div`
  max-width: 400px;
  display: block;
  margin: 0 auto;
`;

class Effects extends Component {
  render() {
    return (
      <>
        <EffectsList>
          <ul>
            {this.props.items.map(item=> (
              <li>{item.effect}</li>
            ))}
          </ul>
        </EffectsList>
      </>
    )
  }
}
export default Effects;