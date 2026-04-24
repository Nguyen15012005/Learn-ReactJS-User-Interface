import React, { useCallback } from "react";
import { SquareChartGantt } from "lucide-react";
import { OverviewCard } from "./OverviewCard";
import { fetchStatic } from "../../../services/staticService";
import useFetch from "../../../hooks/useFetch";
import { Loading } from "../../../components/Loading";

export const Overview = () => {
  const stableFetchStatic = useCallback(fetchStatic, []);
  const { data, isLoading } = useFetch(stableFetchStatic);

  return (
    <>
      <div className="flex flex-row items-center space-x-4">
        <SquareChartGantt className="text-pink-500 text-xl" />
        <h1 className="text-xl font-bold">Overview</h1>
      </div>

      {/* Đang Fetch */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}

      {/* Hoàn thành Fetch */}
      {!isLoading && (
        <div className="grid grid-cols-3 gap-4 ">
          {data.map((item) => (
            <OverviewCard
              key={item.id}
              title={item.title}
              total={item.total}
              percent={item.percent}
            />
          ))}
        </div>
      )}
    </>
  );
};
