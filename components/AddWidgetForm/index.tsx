"use client";
import { Widget } from "@/types";
import React, { useState } from "react";

interface AddWidgetFormProps {
  onAddWidget: (widgetData: Widget) => void;
}

const AddWidgetForm: React.FC<AddWidgetFormProps> = ({ onAddWidget }) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddWidget({ id: Date.now().toString(), name, content });
    setName("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form mt-4">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <textarea
        placeholder="Widget Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
