import React from "react";
import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import Block from "./Block";

const StyledPagination = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items:center;
`;

function renderBlocksLinear(start, size, currPage, onClick) {
  const res = [];
  for (let j = start, i = 0; i < size; j++, i++) {
    res.push(
      <Block
        key={j}
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

  return renderBlocksLinear(start, blocksToShow, currPage, onClick);
}

/**
 *
 * blocksToShow always odd
 */
function Pagination({
  currPage,
  totalItems,
  onClick,
  blockSize,
  blocksToShow,
}) {
  const blocks =
    parseInt(totalItems / blockSize) + (totalItems % blockSize === 0 ? 0 : 1);
  if(blocks===1)
    return <></>;
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
        renderBlocksLinear(1,blocks, currPage, onClick)
      )}
    </StyledPagination>
  );
}

export default Pagination;
