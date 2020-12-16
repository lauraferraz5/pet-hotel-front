import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";

function AboutPet() {
  const [pets, setPets] = useState({});

  const history = useHistory();

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await api.get("/pet");
        console.log(response);
        setPets({ ...response.data });
        console.log(pets);
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchPets();
  }, [history]);

  return (
    <div className="sobre-pet">
      <h2>Meus Pets</h2>
      <div>
        {pets.pets
          ? pets.pets.map((pet) => (
              <div className="each-pet">
                <img src={pet.picture} />
                <p>
                  <strong>Name: </strong>
                  {pet.name}
                </p>
                <p>
                  <strong>Animal: </strong>
                  {pet.animal}
                </p>
                <p>
                  <strong>Tamanho: </strong>
                  {pet.size}
                </p>
                <p>
                  <strong>Gênero: </strong>
                  {pet.breed}
                </p>
                <p>{`${pet.helthy.allergy}` ? `${pet.helthy.allergy}` : ""}</p>
                <p>{`${pet.helthy.disease}` ? `${pet.helthy.disease}` : ""}</p>
                <p>{`${pet.recomendations}` ? `${pet.recomendations}` : ""}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default AboutPet;
