export const VisitTable = () => {
  return (
    <div className="w-full rounded-2xl py-2 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] h-full bg-white">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg px-5 py-2 text-detailColor font-semibold">
            Page visits
          </span>
          <button className="uppercase text-[10px] px-3 bg-blue-500 rounded-lg mr-4 h-fit py-1">
            see all
          </button>
        </div>
        <div>
          <table className="w-full justify-between indent-5">
            <tr className="bg-tableTd h-8 uppercase border-t border-b text-xs text-placeholderColor">
              <td>page name</td>
              <td>visitors</td>
              <td>unique users</td>
              <td>bounce rate</td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>/argon/</td>
              <td>4,569</td>
              <td>340</td>
              <td>46,53%</td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>/argon/</td>
              <td>4,569</td>
              <td>340</td>
              <td>46,53%</td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>/argon/</td>
              <td>4,569</td>
              <td>340</td>
              <td>46,53%</td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8 border-b">
              <td>/argon/</td>
              <td>4,569</td>
              <td>340</td>
              <td>46,53%</td>
            </tr>
            <tr className="text-tableTr font-semibold text-xs h-8">
              <td>/argon/</td>
              <td>4,569</td>
              <td>340</td>
              <td>46,53%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
