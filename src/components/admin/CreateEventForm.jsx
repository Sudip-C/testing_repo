import React, { useState } from "react";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "onetime",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    repeatType: "daily",
    repeatDays: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRepeatDaysChange = (e) => {
    const { options } = e.target;
    const selectedDays = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({ ...formData, repeatDays: selectedDays });
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6  rounded-md shadow-md ">
      <h2 className="mx-auto">Event Form</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-600"
          >
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full rounded-md"
            required
          >
            <option value="onetime">One-time Event</option>
            <option value="recurring">Recurring Event</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full rounded-md"
            required
          />
        </div>

        {formData.type === "onetime" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-600"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="startTime"
                className="block text-sm font-medium text-gray-600"
              >
                Start Time
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-600"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="endTime"
                className="block text-sm font-medium text-gray-600"
              >
                End Time
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>
          </>
        )}

        {formData.type === "recurring" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="repeatType"
                className="block text-sm font-medium text-gray-600"
              >
                Repeat Type
              </label>
              <select
                id="repeatType"
                name="repeatType"
                value={formData.repeatType}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            {formData.repeatType === "weekly" && (
              <div className="mb-4">
                <label
                  htmlFor="repeatDays"
                  className="block text-sm font-medium text-gray-600"
                >
                  Repeat Days
                </label>
                <select
                  id="repeatDays"
                  name="repeatDays"
                  multiple
                  value={formData.repeatDays}
                  onChange={handleRepeatDaysChange}
                  className="mt-1 p-2 border w-full rounded-md"
                  required
                >
                  <option value="sunday">Sunday</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>
              </div>
            )}
          </>
        )}

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 size-full text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
