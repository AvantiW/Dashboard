"use client";
import { removeWidget } from "@/slices/dashboardSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Widget = ({ widget, categoryId }: any) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="px-4 py-8 flex flex-col border-8 border-slate-100 rounded-lg items-start w-2/6">
      <h3>{widget.name}</h3>
      <p>{widget.content}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Widget;
