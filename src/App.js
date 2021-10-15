import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { cards } from "./services/cardsApi";
import { GlobalStyle } from "./assets/styles/global";
import {
  MatchLink,
  MatchLogo,
  CardContainer,
  CardRow,
  CardCol,
  CardContent,
  CardLink,
  CardTitle,
  CardText,
  CardPaginate,
} from "./assets/styles/cards";

const PER_PAGE = 9;

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cards);
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const CardsPage = data
    .slice(offset, offset + PER_PAGE)
    .map(({ id, name, text }) => (
      <CardCol lg={4} sm={6} key={id}>
        <CardLink href="http://mi-code.vercel.app/" target="_blank">
          <CardContent>
            <CardTitle>{name}</CardTitle>
            <CardText>{text}</CardText>
          </CardContent>
        </CardLink>
      </CardCol>
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <>
      <GlobalStyle />
      <CardContainer>
        <MatchLink href="https://match.mt/">
          <MatchLogo />
        </MatchLink>
        <CardRow>{CardsPage}</CardRow>
        <CardPaginate>
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination-link"}
            nextLinkClassName={"pagination-link"}
            disabledClassName={"pagination-link-disabled"}
            activeClassName={"pagination-link-active"}
          />
        </CardPaginate>
      </CardContainer>
    </>
  );
};

export default App;