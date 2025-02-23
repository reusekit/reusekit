"use client"
import { Button } from "reusekit";

export default function ButtonDemo() {
  return <Button onClick={() => alert("Clicked!")}>Click Me</Button>;
}