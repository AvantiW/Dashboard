"use client";
import Dashboard from "@/components/Dashboard";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
