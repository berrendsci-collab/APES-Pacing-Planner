export default function PreferencesPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Preferences
      </h1>

      <div className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            AP Environmental Science Version
          </label>

          <select className="border rounded p-2 w-full">
            <option>2025 CED</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Schedule Type
          </label>

          <select className="border rounded p-2 w-full">
            <option>Traditional</option>
            <option>A/B Block</option>
            <option>4x4 Block</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Approximate Number of Students
          </label>

          <input
            type="number"
            className="border rounded p-2 w-full"
            placeholder="e.g. 120"
          />
        </div>

      </div>
    </main>
  );
}