import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTour } from "../store/tour-slice";

export const TourList = () => {
  const { tours } = useSelector((state) => state.tour);
  const dispatch = useDispatch();

  const handleDeleteTour = (selectedTourId) => {
    dispatch(deleteTour(selectedTourId));
  };

  return (
    <StyledTourList>
      <hr />
      {tours.length === 0 ? (
        <h3>Пока нет никаких туров, вы можете добавить свой тур</h3>
      ) : (
        tours?.map((tour) => {
          return (
            <TourCard key={tour.id}>
              <img src={tour.image} alt={tour.title} />
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <span>{tour.cost} сом</span>

              <button onClick={() => handleDeleteTour(tour.id)}>Удалить</button>
            </TourCard>
          );
        })
      )}
    </StyledTourList>
  );
};

const StyledTourList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;

  & h3 {
    text-align: center;
  }
`;

const TourCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 500px;
  max-width: 70%;
  margin: auto;

  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  & > h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  & > p {
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > button {
    width: 100%;
    padding: 10px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: #ffffff;
      color: #333;
      border: 1px solid #333;
    }
  }
`;
