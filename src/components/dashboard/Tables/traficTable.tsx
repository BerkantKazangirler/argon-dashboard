export const TraficTable = () => {
  return (
    <div className="w-1/2 h-[244px] py-2 bg-white rounded-2xl drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg px-5 py-2 text-detailColor font-semibold">
            Social traffic
          </span>
          <button className="uppercase text-[10px] px-3 bg-blue-500 rounded-lg mr-4 h-fit py-1">
            see all
          </button>
        </div>
        <div>
          <table className="w-full justify-between indent-5">
            <tr className="bg-tableTd w-full h-8 uppercase border-t border-b text-xs text-placeholderColor">
              <td>referral</td>
              <td>visitors</td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>Facebook</td>
              <td>1,480</td>
              <td className="flex flex-row gap-2 leading-6">
                <span>60%</span>
                <progress
                  value={60}
                  className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-orange-400"
                ></progress>
              </td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>Facebook</td>
              <td>5,480</td>
              <td className="flex flex-row gap-2 leading-6">
                <span>70%</span>
                <progress
                  value={70}
                  className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-orange-400"
                ></progress>
              </td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>Google</td>
              <td>4,807</td>
              <td className="flex flex-row gap-2 leading-6">
                <span>80%</span>
                <progress
                  value={80}
                  className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-cyan-400 [&::-webkit-progress-value]:bg-cyan-400 [&::-moz-progress-bar]:bg-cyan-400"
                ></progress>
              </td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>Instagram</td>
              <td>3,678</td>
              <td className="flex flex-row gap-2 leading-6">
                <span>75%</span>
                <progress
                  value={75}
                  className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-cyan-400 [&::-webkit-progress-value]:bg-cyan-400 [&::-moz-progress-bar]:bg-cyan-400"
                ></progress>
              </td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8">
              <td>Twitter</td>
              <td>2,645</td>
              <td className="flex flex-row gap-2 leading-6">
                <span>30%</span>
                <progress
                  value={30}
                  className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-orange-400 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-orange-400"
                ></progress>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
