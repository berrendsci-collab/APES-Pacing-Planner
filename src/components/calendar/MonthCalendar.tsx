"use client";

import { useState } from "react";

type MonthCalendarProps = {
  month: string;
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// August 2026 starts on Saturday (index 6)
const firstDayOffset = 6;
const totalDays = 31;

export default function MonthCalendar({ month }: MonthCalendarProps) {
    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const cells = [
      ...Array(firstDayOffset).fill(null),
      ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];
  
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
        onClick={() => {
          setSelectedDays((current) =>
            current.includes(day)
              ? current.filter((d) => d !== day)
              : [...current, day]
          );
        }}
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
</div>
    );
}