"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Widget } from "../types";
import { initialDashboard } from "@/data";

interface DashboardState {
  categories: Category[];
}

const initialState: DashboardState = {
  categories: initialDashboard,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (
      state,
      action: PayloadAction<{ categoryId: string; widgetData: Widget }>
    ) => {
      const { categoryId, widgetData } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widgetData);
      }
    },
    removeWidget: (
      state,
      action: PayloadAction<{ categoryId: string; widgetId: string }>
    ) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
