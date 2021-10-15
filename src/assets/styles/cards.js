import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as MatchSvg } from "../images/logo-match.svg";

export const MatchLogo = styled(MatchSvg)`
  max-width: 150px;
  margin: 0 auto;
`;

export const MatchLink = styled.a``;

export const CardContainer = styled(Container)`
  padding-top: 25px;
`;

export const CardRow = styled(Row)`
  padding: 40px 0;
`;

export const CardCol = styled(Col)`
  margin: 0;
  padding: 0;
`;

export const CardContent = styled.div`
  margin: 15px;
  padding: 20px;
  background-color: rgb(92, 242, 0);
  transition: all 0.2s linear;
`;

export const CardLink = styled.a`
  &:hover ${CardContent} {
    background-color: black;
    h2,
    p {
      color: white;
    }
  }
`;

export const CardTitle = styled.h2`
  color: black;
`;

export const CardText = styled.p`
  color: black;
`;

export const CardPaginate = styled.div`
  max-width: 400px;
  margin: 0 auto;

  .pagination {
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
  }

  .pagination a {
    padding: 5px;
    border-radius: 5px;
    background: rgb(92, 242, 0);
    border: 1px solid rgb(92, 242, 0);
    color: black;
    transition: all 0.2s linear;

    &:hover {
      background-color: black;
      color: white;
      border-color: black;
    }
  }

  @media (max-width: 499px) {
    .pagination a {
      padding: 3px;
    }
  }

  .pagination-link {
    font-weight: bold;
  }

  .pagination-link-active a {
    color: white;
    background: black;
    border-color: black;

    &:hover {
      color: white;
    }
  }

  .pagination-link-disabled a {
    opacity: 0.4;

    &:hover {
      background: rgb(92, 242, 0);
      border: 1px solid rgb(92, 242, 0);
      color: black;
    }
  }
`;
