export default function SchedulePage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">
        Schedule
      </h1>

      <p className="text-gray-600 mb-8">
        Tell us about your school calendar and class schedule.
      </p>

      <div className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            School Start Date
          </label>
          <input
            type="date"
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            School End Date
          </label>
          <input
            type="date"
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Schedule Type
          </label>

          <select className="border rounded p-2 w-full">
            <option>Daily</option>
            <option>A/B Block</option>
            <option>Traditional Block</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Class Period Length (minutes)
          </label>

          <input
            type="number"
            className="border rounded p-2 w-full"
            placeholder="55"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Days Per Week
          </label>

          <input
            type="number"
            className="border rounded p-2 w-full"
            placeholder="5"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            District Holidays and Breaks
          </label>

          <textarea
            rows={6}
            className="border rounded p-2 w-full"
            placeholder="Paste or list district holidays, breaks, and other days students are not in class."
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Special Schedule Notes
          </label>

          <textarea
            rows={5}
            className="border rounded p-2 w-full"
            placeholder="Include any scheduling information that may affect pacing."
          />
        </div>

      </div>

      <div className="flex justify-between mt-10">
        <button className="border rounded px-6 py-2 hover:bg-gray-100">
          Back
        </button>

        <button className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700">
          Next
        </button>
      </div>
    </main>
  );
}