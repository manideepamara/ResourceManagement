import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Search from "./Search";
import TabGroup from "./TabGroup";
import CardList from "./CardList";
import Pagination from "./Pagination";
import { debounce } from "./utils";
import Loader from "./Loader";
import Failure from "./Failed";

const Wrapper = styled.div`
  margin-top: 32px;
`;

const ResourceWrapper = styled.div`
  padding-top: 46px;
`;

const PaginationWrapper = styled.div`
    margin:20px 0;
`;
function Resource({tabList,setTabList}) {
  const [cards, setCards] = useState([]);
  const cardsRes = useRef();
  const [value, setValue] = useState("");
  const [fetchStatus, setFetchStatus] = useState("loading");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json",
      { signal }
    )
      .then((res) => res.json())
      .then((res) => {
        cardsRes.current = res;
        setCards(res);
        setFetchStatus("success");
      })
      .catch(({ name }) => {
        if (name !== "AbortError") setFetchStatus("failed");
      });
    return () => {
      controller.abort();
    };
  }, []);
  useEffect(() => {
    if (!cardsRes.current) return;
    if(fetchStatus!=="success") return;
    setCards(
      cardsRes.current.filter(({ tag, title }) => {
        const tab = tabList.items[tabList.selected];
        return (
          (value === "" || title.includes(value)) &&
          (tab === tabList.items[0] || tab.toLowerCase().includes(tag))
        );
      })
    );
    setPage(1);
  }, [fetchStatus,value, tabList]);

  return (
    <ResourceWrapper>
      <TabGroup tabsList={tabList} onTabChange={setTabList} />
      <Wrapper>
        <Search setValue={debounce(setValue, 1000)} />
        {fetchStatus === "loading" ? (
          <Loader />
        ) : fetchStatus === "success" ? (
          <>
            <CardList cards={cards.slice((page - 1) * 6, (page - 1) * 6 + 6)} />
            <PaginationWrapper>
            <Pagination
              currPage={page}
              onClick={setPage}
              blockSize={6}
              blocksToShow={3}
              totalItems={cards.length}
            />
            </PaginationWrapper>
            
          </>
        ) : (
          <Failure />
        )}
      </Wrapper>
    </ResourceWrapper>
  );
}

export default Resource;
