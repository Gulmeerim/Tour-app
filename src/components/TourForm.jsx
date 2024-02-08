import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTour } from "../store/tour-slice";

export const TourForm = () => {
  const dispatch = useDispatch();

  const [tourData, setTourData] = useState({
    title: "",
    image: "",
    description: "",
    cost: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTourData({
      ...tourData,
      [name]: value,
      id: Date.now(),
    });
  };

  const handleTourSubmit = (event) => {
    event.preventDefault();
    if (
      !tourData.title ||
      !tourData.image ||
      !tourData.description ||
      !tourData.cost
    ) {
      alert("заполните все поля");
      return null;
    }

    dispatch(addTour(tourData));

    setTourData({
      title: "",
      image: "",
      description: "",
      cost: "",
    });
  };

  return (
    <StyledForm onSubmit={handleTourSubmit}>
      <p>Создать тур</p>
      <input
        type="text"
        name="title"
        placeholder="название тура"
        value={tourData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="ссылка на картинку"
        value={tourData.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="описание тура"
        value={tourData.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="cost"
        placeholder="стоимость"
        value={tourData.cost}
        onChange={handleInputChange}
      />

      <button type="submit">Создать</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 500px;
  margin: 20px auto;

  & > input {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    width: 100%;
  }
  & > button {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #333;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #333;
    }
  }
`;
