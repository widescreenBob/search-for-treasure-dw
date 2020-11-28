import React, { Component } from 'react';
import styled from "styled-components";

// Styled component named Olditem List
const OldItemList = styled.div`
  max-width: 400px;
  display: block;
  margin: 2rem auto 0;

  li {
    list-style: none;
  }
`;

class OldItems extends Component {
  render() {
    return (
      <>
        <OldItemList aria-live="polite">
          <h3> Previous Finds</h3>
          <ul>
            {this.props.items.slice(-5).map((item, index) => (
              <li className={item.type} key={index}>{item.name}</li>
            ))}
          </ul>
        </OldItemList>
      </>
    )
  }
}
export default OldItems;