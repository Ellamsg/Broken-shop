
import { create } from 'zustand';

 import { persist, createJSONStorage } from 'zustand/middleware';
 
 const useCartStore = create(
   persist(
     (set) => ({
       cart: [],
       cartTotal: 0,
       totalItems: 0,
 
       addToCart: ({ product, quantity, size }) =>
         set((state) => {
           const existingProductIndex = state.cart.findIndex(
             (item) => item._id === product._id && item.size === size
           );
 
           const newQuantity = parseInt(quantity, 10);
 
           if (newQuantity <= 0) {
             // If the new quantity is less than or equal to zero, remove the item from the cart
             const updatedCart = state.cart.filter(
               (item) => !(item._id === product._id && item.size === size)
             );
             return {
               cart: updatedCart,
               cartTotal: calculateCartTotal(updatedCart),
               totalItems: calculateTotalItems(updatedCart),
             };
           }
 
           if (existingProductIndex !== -1) {
             // If the product with the same size already exists, update the quantity to the new quantity
             const updatedCart = [...state.cart];
             updatedCart[existingProductIndex].quantity += newQuantity;
 
             return {
               cart: updatedCart,
               cartTotal: calculateCartTotal(updatedCart),
               totalItems: calculateTotalItems(updatedCart),
             };
           } else {
             // If the product with the same size doesn't exist, add it to the cart with the new quantity
             return {
               cart: [...state.cart, { ...product, quantity: newQuantity, size }],
               cartTotal: calculateCartTotal([...state.cart, { ...product, quantity: newQuantity, size }]),
               totalItems: calculateTotalItems([...state.cart, { ...product, quantity: newQuantity, size }]),
             };
           }
         }),
 
       removeFromCart: (productId) =>
         set((state) => {
           const updatedCart = state.cart.filter((item) => item._id !== productId);
 
           return {
             cart: updatedCart,
             cartTotal: calculateCartTotal(updatedCart),
             totalItems: calculateTotalItems(updatedCart),
           };
         }),
 
       clearCart: () => set({ cart: [], cartTotal: 0, totalItems: 0 }),
     }),
     {
       name: 'cart-storage',//nae must be unique
       storage: createJSONStorage(() => localStorage), // Use localStorage for storing cart items
     }
   )
 );
 
 function calculateCartTotal(cart) {
   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
 }
 
 function calculateTotalItems(cart) {
   return cart.reduce((total, item) => total + 1, 0);
 }
 
 export default useCartStore;
 