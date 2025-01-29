"use client";
import { createContext, useState, useEffect } from "react";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";

export const financeContext = createContext({
  income: [],
  expenses: [],
  addIncomeItem: async () => {},
  removeIncomeItem: async () => {},
});

export default function FinanceContextProvider({ children }) {
  const [income, setIncome] = useState([]);

  const [expenses, setExpenses] = useState([]);

  const addIncomeItem = async (newIncome) => {
    const collectionRef = collection(db, "income");
    //values here match the document values in the db
    try {
      const docSnap = await addDoc(collectionRef, newIncome);

      //Update state
      setIncome((prevState) => {
        return [
          ...prevState,
          {
            id: docSnap.id,
            ...newIncome,
          },
        ];
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const removeIncomeItem = async (incomeId) => {
    const docRef = doc(db, "income", incomeId);
    deleteDoc(docRef).then(
      (result) => {
        setIncome((prevState) => {
          return prevState.filter((i) => i.id !== incomeId);
        });
      },
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    const getIncomeData = async () => {
      const collectionRef = collection(db, "income");
      const docSnap = await getDocs(collectionRef);

      const data = docSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        };
      });
      setIncome(data);
    };
    const getExpensesData = async ()=>{
        const collectionRef=collection(db,'expenses');
        const docSnap = await getDocs(collectionRef);
        const data = docSnap.docs.map((doc)=>{
            return{
                id: doc.id,
                ...doc.data(),
            };
        });
        setExpenses(data);
    }
    getExpensesData();
    getIncomeData();
  }, []);

  const values = { income, expenses, addIncomeItem, removeIncomeItem };
  return (
    <financeContext.Provider value={values}>{children}</financeContext.Provider>
  );
}
