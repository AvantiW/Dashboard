"use client";
import React, { useState } from "react";
import Category from "../Category";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import WidgetModal from "../WidgetModal";
import { useDisclosure } from "@mantine/hooks";

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(false);
  const categories = useSelector(
    (state: RootState) => state.dashboard.categories
  );

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter(
      (widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        widget.content.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="p-4  bg-slate-100">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="font-bold">CNAPP Dashboard</h2>
        <div className="flex flex-row gap-5 items-center">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded"
          />
          <button className="border p-2 rounded-sm" onClick={open}>
            Add Widget
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {filteredCategories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      <WidgetModal isOpen={opened} onClose={close} />
    </div>
  );
};

export default Dashboard;
