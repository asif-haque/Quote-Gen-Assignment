import { LiaRandomSolid } from "react-icons/lia";
import Card from "../components/Card";
import { fetchQuote } from "../api/api";
import React, { useState } from "react";

interface GeneratePropsType {
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const Generate: React.FC<GeneratePropsType> = ({
  mounted,
  setMounted,
  data,
  setData,
}) => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const handleClick = async () => {
    try {
      setMounted(false);
      setLoading(true);
      const fetchedQuote = await fetchQuote();
      setData(fetchedQuote[0]);
      setError("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[150px]">
      <div className="flex flex-col items-center space-y-5">
        <button
          className="flex gap-2 items-center bg-neutral-200 border rounded-full px-5 py-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          onClick={handleClick}
        >
          <span>Generate</span>
          <LiaRandomSolid className="text-xl" />
        </button>

        {mounted ? (
          <div className="animate-bounce">Hi, tap to generate a quote!</div>
        ) : loading ? (
          <div className="animate-bounce">Loading</div>
        ) : error ? (
          <div className="animate-pulse">{error}</div>
        ) : data ? (
          <Card data={data} />
        ) : (
          "No Quote available."
        )}
      </div>
    </div>
  );
};

export default Generate;
