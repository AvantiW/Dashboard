"use client";
import React, { useState } from "react";
import Widget from "../Widget";
import { useDispatch } from "react-redux";
import { addWidget } from "../../slices/dashboardSlice";
import { Category as CategoryType, Widget as WidgetType } from "@/types";
import AddWidgetForm from "../AddWidgetForm";
import { IconPlus } from "@tabler/icons-react";

interface CategoryProps {
  category: CategoryType;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const dispatch = useDispatch();
  const [isAddingWidget, setIsAddingWidget] = useState<boolean>(false);

  const handleAddWidget = (widgetData: WidgetType) => {
    dispatch(addWidget({ categoryId: category.id, widgetData }));
    setIsAddingWidget(false);
  };

  return (
    <div className="category bg-white p-4 rounded shadow-md text-black">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="widgets flex flex-row gap-2 overflow-x-auto">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        {isAddingWidget ? (
          <AddWidgetForm onAddWidget={handleAddWidget} />
        ) : (
          <div
            className="p-4 border-8 border-slate-100 rounded-lg flex items-center justify-center w-2/6 cursor-pointer"
            onClick={() => setIsAddingWidget(true)}
          >
            <IconPlus className="w-8 h-8 text-blue-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
