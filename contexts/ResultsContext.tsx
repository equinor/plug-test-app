import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Ear } from "../types";
import cloneDeep from "lodash.clonedeep";

type ResultsContextType = {
  results: Results;
  setResult: (ear: Ear, type: EarResultKey, value: number) => void;
  reset: () => void;
};

type Results = Record<Ear, EarResult>;
type EarResultKey = keyof EarResult;
type EarResult = {
  withPlugs: number | null;
  withoutPlugs: number | null;
};

const initialValue: Results = {
  left: {
    withoutPlugs: null,
    withPlugs: null,
  },
  right: {
    withoutPlugs: null,
    withPlugs: null,
  },
};

const noProviderErrorFn = () => {
  throw new Error("Please call this function within a ResultsProvider");
};

const ResultsContext = createContext<ResultsContextType>({
  results: initialValue,
  setResult: noProviderErrorFn,
  reset: noProviderErrorFn,
});

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const [results, setResults] = useState<Results>(initialValue);
  const setResult: ResultsContextType["setResult"] = (ear, type, value) => {
    setResults((results) => {
      const newResults = cloneDeep(results);
      newResults[ear][type] = value;
      return newResults;
    });
  };
  const reset = () => setResults(initialValue);
  return (
    <ResultsContext.Provider value={{ results, setResult, reset }}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResults = () => useContext(ResultsContext);
