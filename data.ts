import { Category } from "./types";

export const initialDashboard: Category[] = [
    {
      id: "1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "1",
          name: "Cloud Accounts",
          content: "Random text for Cloud Accounts widget",
        },
        {
          id: "2",
          name: "Cloud Account Risk Assessment",
          content: "Random text for Cloud Account Risk Assessment widget",
        },
      ],
    },
    {
      id: "2",
      name: "CWPP Dashboard",
      widgets: [],
    },
    {
      id: "3",
      name: "Registry Scan",
      widgets: [],
    },
  ];