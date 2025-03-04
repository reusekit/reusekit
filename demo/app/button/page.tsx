"use client"
import { LoginWithEmailPassword } from "reusekit";

export default function ButtonDemo() {
  return <LoginWithEmailPassword
    onSubmit={(email, password) => { console.log(email, password) }}
    loginTitle="Let's Get Started"
    emailLabel="Email"
    passwordLabel="Password"
  />;
}