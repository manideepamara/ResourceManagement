import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";

import TabGroup from "./TabGroup";
import CardList from "./CardList";

const Wrapper = styled.div`
  margin-top:32px;
`;

const ResourceWrapper = styled.div`
    padding-top:46px;
    
`;
function Resource() {
  const [cards, setCards] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setCards(res);

        setFetchStatus("success");
      })
      .catch(() => {
        setFetchStatus("failed");
      });
  }, []);
  return (
    <ResourceWrapper>
      <TabGroup
        tabsList={[
          { text: "Resources", selected: true },
          { text: "Requests" },
          { text: "Users" },
        ]}
      />
      <Wrapper>
       

        <Search />
        
        {fetchStatus === "loading" ? (
          <>Loading...!</>
        ) : fetchStatus === "success" ? (
          <CardList cards={cards.slice((page - 1) * 6, 6)} />
        ) : (
          <>Failed...!</>
        )}
      </Wrapper>
    </ResourceWrapper>
  );
}

export default Resource;
