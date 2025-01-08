import axios from "axios";
import { SERVER_BASE_URL } from "../App";
import { useEffect, useState } from "react";
import { Audio, Watch } from "react-loader-spinner";

type Props = {};
interface ITrends {
  trends: string[];
  date: string;
  ip: string;
}
export default function Home({}: Props) {
  const [trends, setTrends] = useState<ITrends[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getData() {
    try {
      setIsLoading(true);
      const res = await axios.get(SERVER_BASE_URL + "/getData");
      setTrends(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  async function extractnewTrends() {
    try {
      setIsLoading(true);

      await axios.get(SERVER_BASE_URL + "/extract");
      getData();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="font-inter">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="text-white text-lg flex flex-col items-center gap-2">
            <Watch
              visible={true}
              height="80"
              width="80"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
            />
            Loading...
          </div>
        </div>
      )}
      <div className="p-2 flex gap-4">
        {/* <button
          type="button"
          className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={getData}
        >
          List all trends
        </button> */}
        <button
          type="button"
          className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={extractnewTrends}
        >
          Extract new trends
        </button>
      </div>
      <div className=" p-4 flex flex-wrap gap-6  w-fit">
        {trends.map((trend) => {
          return (
            <div
              style={{
                background:
                  "radial-gradient(94.79997781055154% 94.79999776367805% at 6.367042537459778% 5.199996515206351%, var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))  0%, var(--token-6e1dd630-cd02-44c9-b21a-a542833cf79b, rgb(10, 9, 13))  100%)",
              }}
              className="py-4 shadow-dark-40 border-2 border-neutral-80  text-white rounded-lg p-4"
            >
              <div className="font-semibold text-md text-white ">
                <span className="text-neutral-20">Date and time : </span>
                <span>{trend.date}</span>
              </div>
              <div className="my-2 text-[13px] ">
                <span className="text-neutral-20">IP : </span>
                <span className="text-neutral-40 ">{trend.ip}</span>
              </div>
              <div className="space-y-1 py-3">
                {trend.trends.map((trend, index) => (
                  <div
                    key={index}
                    className="w-fit bg-neutral-90 p-2 rounded-md text-white"
                  >
                    {trend}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
