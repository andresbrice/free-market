import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "free-market-929b7.firebaseapp.com",
  projectId: "free-market-929b7",
  storageBucket: "free-market-929b7.appspot.com",
  messagingSenderId: "974241740315",
  appId: "1:974241740315:web:3b812af64bb6937c9faabe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(); //referencia a la db

// CARGA DE DATOS EN FIREBASE
export const loadDB = async () => {
  const promise = await fetch("./json/products.json");
  const products = await promise.json();

  products.forEach(async (product) => {
    await addDoc(collection(db, "products"), {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      img: product.img,
      idCategory: product.idCategory,
    });
  });

  const promise2 = await fetch("./json/categories.json");
  const categories = await promise2.json();

  const categoriesCollection = collection(db, "categories");
  let counter = 1;

  for (const category of categories) {
    await setDoc(doc(categoriesCollection, counter.toString()), {
      categoryName: category.categoryName,
    });
    counter++;
  }
};

// CRUD DE PRODUCTOS

export const getProducts = async () => {
  const products = await getDocs(collection(db, "products"));

  const productList = products.docs.map((prod) => ({
    ...prod.data(),
    id: prod.id,
  }));

  const list = productList.sort((a, b) =>
    a.idCategory.toString().localeCompare(b.idCategory.toString())
  );
  return list;
};

export const getProduct = async (id) => {
  const product = await getDoc(doc(db, "products", id));
  const prod = { ...product.data(), id: product.id };
  return prod;
};
export const getCategories = async () => {
  const categories = await getDocs(collection(db, "categories"));
  const category = categories.docs.map((cat) => {
    return { ...cat.data(), id: cat.id };
  });
  return category;
};

export const getCategory = async (cate) => {
  const category = await getDoc(doc(db, "categories", cate));
  const cat = { ...category.data(), id: category.id };
  return cat;
};

export const updateProduct = async (id, info) => {
  await updateDoc(doc(db, "products", id), info);
};

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
};

// CREATE Y READ DE ORDEN DE COMPRA

export const createPurchaseOrder = async (
  client,
  products,
  totalPrice,
  date
) => {
  const purchaseOrder = addDoc(collection(db, "purchaseOrders"), {
    clientData: client,
    products: products,
    totalPrice: totalPrice,
    date: date,
  });
  return purchaseOrder;
};

export const getPurchaseOrder = async (id) => {
  const pOrder = await getDoc(doc(db, "purchaseOrders", id));
  const purchaseOrder = { ...pOrder.data(), id: pOrder.id };
  return purchaseOrder;
};
