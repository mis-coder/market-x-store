import {
  ITEM_ADDED_IN_CART,
  ITEM_EXISTS_IN_CART,
  ITEM_REMOVED_FROM_CART,
} from "@/constants/toast-messages";
import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast(ITEM_EXISTS_IN_CART);
        }
        set({ items: [...get().items, data] });
        toast.success(ITEM_ADDED_IN_CART);
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success(ITEM_REMOVED_FROM_CART);
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
