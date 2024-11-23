import { useNavigate } from "@/router";
import { useEffect } from "react";

export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/projects");
  })
  return <h1>Home</h1>;
}