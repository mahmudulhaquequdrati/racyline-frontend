import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <Link to={"/vet-lists"}>Dashboard</Link>
    </div>
  );
}
