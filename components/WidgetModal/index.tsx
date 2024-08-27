import React from "react";
import { Tabs } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { removeWidget } from "../../slices/dashboardSlice";

interface WidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WidgetModal: React.FC<WidgetModalProps> = ({ isOpen, onClose }) => {
  const categories = useSelector(
    (state: RootState) => state.dashboard.categories
  );
  const dispatch = useDispatch();

  const handleCheckboxChange = (categoryId: string, widgetId: string) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">Add Widget</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        <Tabs defaultValue={categories[0]?.name}>
          <Tabs.List className="flex space-x-4 border-b mb-4">
            {categories.map((category) => (
              <Tabs.Tab value={category.name} key={category.id} className="font-semibold">
                {category.name}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {categories.map((category) => (
            <Tabs.Panel value={category.name} key={category.id}>
              {category.widgets.map((widget) => (
                <div key={widget.id} className="flex items-center py-2">
                  <label>
                    <input
                      type="checkbox"
                      checked={true} // Assume all are checked initially
                      onChange={() =>
                        handleCheckboxChange(category.id, widget.id)
                      }
                    />
                    {widget.name}
                  </label>
                </div>
              ))}
            </Tabs.Panel>
          ))}
        </Tabs>

        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetModal;
