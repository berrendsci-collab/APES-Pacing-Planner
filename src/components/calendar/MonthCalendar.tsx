"use client";

import { useState } from "react";

type MonthCalendarProps = {
  month: string;
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const firstDayOffset = 6;
const totalDays = 31;

export default function MonthCalendar({ month }: MonthCalendarProps) {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const cells = [
    ...Array(firstDayOffset).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  function toggleDay(day: number) {
    setActiveDay(day);

    setSelectedDays((current) =>
      current.includes(day)
        ? current.filter((d) => d !== day)
        : [...current, day]
    );
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-green-700">
        {month}
      </h3>

      <div className="mb-2 grid grid-cols-7 gap-2 text-center font-semibold text-gray-600">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((day, index) =>
          day ? (
            <button
              key={index}
              onClick={() => toggleDay(day)}
              className={`h-10 rounded-md border transition ${
                selectedDays.includes(day)
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-100"
              }`}
            >
              {day}
            </button>
          ) : (
            <div key={index} />
          )
        )}
      </div>

      <div className="mt-6 rounded-lg border bg-slate-50 p-4">
        <h4 className="font-semibold text-green-700">
          Selected Date
        </h4>

        {activeDay ? (
          <p className="mt-2">
            August {activeDay}, 2026
          </p>
        ) : (
          <p className="mt-2 text-gray-500">
            Click a date to begin.
          </p>
        )}
      </div>

      <div className="mt-6 border-t pt-4">
        <h4 className="font-semibold text-green-700">
          Selected Days
        </h4>

        {selectedDays.length === 0 ? (
          <p className="text-sm text-gray-500">
            No days selected.
          </p>
        ) : (
          <ul className="mt-2 space-y-1">
            {selectedDays.map((day) => (
              <li key={day}>August {day}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}