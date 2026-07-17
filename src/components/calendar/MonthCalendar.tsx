type MonthCalendarProps = {
    month: string;
  };
  
  export default function MonthCalendar({ month }: MonthCalendarProps) {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return (
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="text-lg font-semibold text-green-700 mb-4">
          {month}
        </h3>
  
        <div className="grid grid-cols-7 gap-2 text-center">
          {weekdays.map((day) => (
            <div key={day} className="font-semibold text-gray-600">
              {day}
            </div>
          ))}
  
          {Array.from({ length: 35 }, (_, index) => (
            <button
              key={index}
              className="h-10 rounded border hover:bg-green-100 transition"
            >
              {index < 30 ? index + 1 : ""}
            </button>
          ))}
        </div>
      </div>
    );
  }