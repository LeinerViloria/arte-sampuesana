import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Junio",
    Hamacas: 10,
    Sombreros: 15,
    OtroProducto: 5,
  },
  {
    name: "Julio",
    Hamacas: 20,
    Sombreros: 25,
    OtroProducto: 10,
  },
  {
    name: "Agosto",
    Hamacas: 15,
    Sombreros: 30,
    OtroProducto: 8,
  },
  {
    name: "Septiembre",
    Hamacas: 80,
    Sombreros: 60,
    OtroProducto: 26,
  },
  {
    name: "Octubre",
    Hamacas: 20,
    Sombreros: 91,
    OtroProducto: 30,
  }
];

export default function WorkspaceStatistic() {
  return (
    <AreaChart
      width={400}
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Hamacas"      // Cambia los nombres de los productos
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="Sombreros"    // Cambia los nombres de los productos
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="OtroProducto"  // Cambia los nombres de los productos
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
