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
    <div>
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
      <div className="m-2 flex gap-4">
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
      <div className=" p-4 flex flex-wrap gap-4 w-fit">
        {trends.map((trend) => {
          return (
            <div className="py-4 border-2 border-gray-800 bg-black text-white rounded-md p-4">
              <div className="font-semibold text-lg text-white">
                {trend.date}
              </div>
              <div className="text-gray-400 text-sm mb-2">{trend.ip}</div>
              <div className="space-y-1">
                {trend.trends.map((trend, index) => (
                  <div
                    key={index}
                    className="w-fit bg-neutral-800 p-2 rounded-md text-white"
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
