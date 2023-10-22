import React from "react";
import "../../App.css";
import { category } from "../../components/sidebarComponent/sidebar";
import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();
  const categoryFromUrl = category.find((id) => id === Number(params.id));

  return (
    <div>
      <h1>Здесь будут списки по </h1>
      <h1>категории: {categoryFromUrl}</h1>
    </div>
  );
};
