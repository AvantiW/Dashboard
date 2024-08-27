import { Category } from '@/types';
import React, { useState } from 'react';

interface AddWidgetModalProps {
  categories: Category[];
  onSave: (updatedCategories: Category[]) => void;
}

const AddWidgetModal: React.FC<AddWidgetModalProps> = ({ categories, onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState(
    categories.reduce((acc, category) => {
      acc[category.name] = category.widgets.map(widget => widget.id);
      return acc;
    }, {} as Record<string, string[]>)
  );

  const handleCheckboxChange = (categoryName: string, widgetId: string) => {
    setSelectedWidgets(prev => ({
      ...prev,
      [categoryName]: prev[categoryName].includes(widgetId)
        ? prev[categoryName].filter(id => id !== widgetId)
        : [...prev[categoryName], widgetId],
    }));
  };

  const handleSave = () => {
    const updatedCategories = categories.map(category => ({
      ...category,
      widgets: category.widgets.filter(widget =>
        selectedWidgets[category.name].includes(widget.id)
      ),
    }));
    onSave(updatedCategories);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded ml-4"
        onClick={() => setIsOpen(true)}
      >
        Add Widget
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Personalize your dashboard</h2>

            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name}>
                  <h3 className="font-semibold">{category.name}</h3>
                  <div className="space-y-2">
                    {category.widgets.map((widget) => (
                      <label key={widget.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedWidgets[category.name].includes(widget.id)}
                          onChange={() => handleCheckboxChange(category.name, widget.id)}
                          className="mr-2"
                        />
                        {widget.name}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleSave}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddWidgetModal;
