import React, { useState } from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "moment/locale/fr";
import Cookies from "js-cookie";

export const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleReservation = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/appointments", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": Cookies.get('token')
        },

        body: JSON.stringify({ 
          "appointment":{
            "date": selectedDate
          }
         }),
      });
      if (response.ok) {
        console.log("Rendez-vous pris avec succès !");
      } else {
        console.log("Une erreur est survenue lors de la prise de rendez-vous.");
      }
    } catch (error) {
      console.log(error);
    }
  };

      const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    return (
      <div>
        <h1>Système de réservation</h1>
        <h2>Choisir la date et l'heure :</h2>
        <DateTime
          locale="fr"
          dateFormat="DD/MM/YYYY"
          timeFormat="HH:mm"
          onChange={handleDateChange}
          input={false}
          defaultValue=""
          inputProps={{ placeholder: "Sélectionnez une date et une heure" }}
          isValidDate={(current) => {
            const yesterday = moment().subtract(1, "day", "month");
            return current.isAfter(yesterday);
          }}
          closeOnSelect={true}
          viewMode="time"
          timeConstraints={{
            hours: { min: 10, max: 20, step: 1 },
            minutes: { step: 30 },
            seconds: { step: 0 },
          }}
        />
        <button onClick={handleReservation}>Prendre rendez-vous</button>
      </div>
    );
  };

