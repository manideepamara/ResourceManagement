import React from "react";
import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import Block from "./Block";

const StyledPagination = styled.div`
  display: flex;
  gap: 8px;
  max-width: 372px;
  justify-content: center;
`;

function renderBlocks(currPage, onClick, blocksToShow, blocks) {
  const leftRight = (blocksToShow - 1) / 2;
  let start = currPage - leftRight,
    end = currPage + leftRight;
  if (start <= 0) {
    start = 1;
  }
  if (end > blocks) {
    start = blocks - blocksToShow + 1;
  }

  const res = [];
  for (let j = start, i = 0; i < blocksToShow; j++, i++) {
    res.push(
      <Block
        selected={j === currPage}
        onClick={() => {
          onClick(j);
        }}
      >
        {j}
      </Block>
    );
  }
  return res;
}

function renderBlocksLinear(size, currPage,onClick) {
  const res = [];
  for (let i = 0; i < size; i++) {
    res.push(
      <Block
        selected={i + 1 === currPage}
        onClick={() => {
          onClick(i+1);
        }}
      >
        {i+1}
      </Block>
    );
  }
  return res;
}
/**
 *
 * blocksToShow always even
 */
function Pagination({
  currPage,
  totalPages,
  onClick,
  blockSize,
  blocksToShow,
}) {
  const blocks =
    parseInt(totalPages / blockSize) + (totalPages % blockSize === 0 ? 0 : 1);
  return (
    <StyledPagination>
      {blocks > blocksToShow ? (
        <>
          {currPage !== 1 && (
            <Block
              onClick={() => {
                onClick(currPage - 1);
              }}
            >
              <ArrowIcon left />
            </Block>
          )}
          {renderBlocks(currPage, onClick, blocksToShow, blocks)}

          {currPage !== blocks && (
            <Block
              onClick={() => {
                onClick(currPage + 1);
              }}
            >
              <ArrowIcon />
            </Block>
          )}
        </>
      ) : (
        renderBlocksLinear(blocks, currPage, onClick)
      )}
    </StyledPagination>
  );
}

export default Pagination;
