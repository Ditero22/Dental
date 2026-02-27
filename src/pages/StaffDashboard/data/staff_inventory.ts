export interface InventoryItem {
  id: number;
  name: string;
  category: "Consumables" | "Equipment" | "Medications";
  stock: number;
  maxStock: number;
  price: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
}

export const inventoryData: InventoryItem[] = [
  {
    id: 1,
    name: "Dental Gloves (Medium)",
    category: "Consumables",
    stock: 45,
    maxStock: 300,
    price: 1000,
    status: "Low Stock",
    image: "/sample.png",
  },
  {
    id: 2,
    name: "Digital X-Ray Sensor",
    category: "Equipment",
    stock: 8,
    maxStock: 20,
    price: 2000,
    status: "In Stock",
    image: "/sample.png",
  },
  {
    id: 3,
    name: "Composite Filling Material",
    category: "Consumables",
    stock: 8,
    maxStock: 50,
    price: 1000,
    status: "Low Stock",
    image: "/sample.png",
  },
  {
    id: 4,
    name: "Anesthetic Solution",
    category: "Medications",
    stock: 24,
    maxStock: 60,
    price: 1000,
    status: "Low Stock",
    image: "/sample.png",
  },
  {
    id: 5,
    name: "Protective Face Shields",
    category: "Consumables",
    stock: 140,
    maxStock: 200,
    price: 1000,
    status: "In Stock",
    image: "/sample.png",
  },
  {
    id: 6,
    name: "Sterilization Pouches",
    category: "Consumables",
    stock: 80,
    maxStock: 150,
    price: 1000,
    status: "In Stock",
    image: "/sample.png",
  },
];