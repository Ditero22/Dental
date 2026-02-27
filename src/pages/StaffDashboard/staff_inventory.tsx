import { useState } from "react";
import { inventoryData } from "./data/staff_inventory";
import { Search, Filter, ArrowUpDown, Plus, Pencil, Eye } from "lucide-react";

export function StaffInventory() {
  const [search, setSearch] = useState("");

  const filtered = inventoryData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getCategoryStyle = (category: string) => {
    if (category === "Consumables")
      return "bg-purple-100 text-purple-600";
    if (category === "Equipment")
      return "bg-blue-100 text-blue-600";
    return "bg-pink-100 text-pink-600";
  };

  const getStatusStyle = (status: string) => {
    if (status === "In Stock")
      return "bg-green-100 text-green-600";
    if (status === "Low Stock")
      return "bg-yellow-100 text-yellow-600";
    return "bg-red-100 text-red-600";
  };

  const getStockColor = (stock: number, max: number) => {
    const percentage = (stock / max) * 100;
    if (percentage > 60) return "bg-green-500";
    if (percentage > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex flex-col gap-6 mt-4">

      <h1 className="text-xl font-semibold">Inventory Items</h1>

      <div className="flex justify-between items-center">

        <div className="relative w-96">
          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Name, Email or Patient ID..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm bg-white">
            <Filter size={14} />
            Filter
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm bg-white">
            <ArrowUpDown size={14} />
            Sort
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-teal-600 text-white rounded-lg text-sm">
            <Plus size={14} />
            Add New
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="text-left p-3">Item Details</th>
              <th className="text-left">Category</th>
              <th className="text-left">Stock Level</th>
              <th className="text-left">Unit Price</th>
              <th className="text-left">Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">

                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                  {item.name}
                </td>

                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${getCategoryStyle(item.category)}`}>
                    {item.category}
                  </span>
                </td>

                <td className="w-60">
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${getStockColor(item.stock, item.maxStock)}`}
                        style={{ width: `${(item.stock / item.maxStock) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">
                      {item.stock}/{item.maxStock}
                    </span>
                  </div>
                </td>

                <td>₱ {item.price}</td>

                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>

                <td className="flex gap-3">
                  <button className="text-blue-500">
                    <Pencil size={16} />
                  </button>
                  <button className="text-green-500">
                    <Eye size={16} />
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>

        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
          <span>Showing {filtered.length} of {inventoryData.length} Items</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 border rounded">{"<"}</button>
            <button className="px-2 py-1 border rounded bg-teal-600 text-white">1</button>
            <button className="px-2 py-1 border rounded">2</button>
            <button className="px-2 py-1 border rounded">3</button>
            <button className="px-2 py-1 border rounded">{">"}</button>
          </div>
        </div>

      </div>
    </div>
  );
}