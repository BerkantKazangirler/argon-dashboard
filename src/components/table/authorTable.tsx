export const AuthorTable = () => {
  return (
    <div className="flex flex-col w-full px-4 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] rounded-2xl bg-white">
      <span className="text-detailColor pt-6 font-semibold text-lg">
        Authors Table
      </span>
      <table className="w-full">
        <tr className="text-placeholderColor h-10 uppercase text-[10px]">
          <td className="w-1/2">author</td>
          <td>function</td>
          <td>status</td>
          <td>employed</td>
        </tr>
        <tr className="border-t border-tableTd">
          <td className="flex flex-row my-2 w-full gap-3">
            <img
              src={"./public/ornek.jpeg"}
              className="w-10 h-10 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-detailColor">
                Esthera Jackson
              </span>
              <span className="text-sm text-tableTr">esthera@simmmple.com</span>
            </div>
          </td>

          <td>
            <div className="flex flex-col">
              <span className="font-semibold text-tableTr text-sm">
                Manager
              </span>
              <span className="text-sm text-tableTr">Organization</span>
            </div>
          </td>
          <td>
            <span className="bg-green-400 rounded-md py-1 font-semibold text-sm text-white px-2">
              Online
            </span>
          </td>
          <td className="text-tableTr font-semibold text-sm">14/06/21</td>
          <td className="text-tableTr font-semibold text-sm">Edit</td>
        </tr>
        <tr className="border-t border-tableTd">
          <td className="flex flex-row my-2 w-full gap-3">
            <img
              src={"./public/ornek.jpeg"}
              className="w-10 h-10 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-detailColor">
                Esthera Jackson
              </span>
              <span className="text-sm text-tableTr">esthera@simmmple.com</span>
            </div>
          </td>

          <td>
            <div className="flex flex-col">
              <span className="font-semibold text-tableTr text-sm">
                Manager
              </span>
              <span className="text-sm text-tableTr">Organization</span>
            </div>
          </td>
          <td>
            <span className="bg-green-400 rounded-md py-1 font-semibold text-sm text-white px-2">
              Online
            </span>
          </td>
          <td className="text-tableTr font-semibold text-sm">14/06/21</td>
          <td className="text-tableTr font-semibold text-sm">Edit</td>
        </tr>
        <tr className="border-t border-tableTd">
          <td className="flex flex-row my-2 w-full gap-3">
            <img
              src={"./public/ornek.jpeg"}
              className="w-10 h-10 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-detailColor">
                Esthera Jackson
              </span>
              <span className="text-sm text-tableTr">esthera@simmmple.com</span>
            </div>
          </td>

          <td>
            <div className="flex flex-col">
              <span className="font-semibold text-tableTr text-sm">
                Manager
              </span>
              <span className="text-sm text-tableTr">Organization</span>
            </div>
          </td>
          <td>
            <span className="bg-green-400 rounded-md py-1 font-semibold text-sm text-white px-2">
              Online
            </span>
          </td>
          <td className="text-tableTr font-semibold text-sm">14/06/21</td>
          <td className="text-tableTr font-semibold text-sm">Edit</td>
        </tr>
        <tr className="border-t border-tableTd">
          <td className="flex flex-row my-2 w-full gap-3">
            <img
              src={"./public/ornek.jpeg"}
              className="w-10 h-10 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-detailColor">
                Esthera Jackson
              </span>
              <span className="text-sm text-tableTr">esthera@simmmple.com</span>
            </div>
          </td>

          <td>
            <div className="flex flex-col">
              <span className="font-semibold text-tableTr text-sm">
                Manager
              </span>
              <span className="text-sm text-tableTr">Organization</span>
            </div>
          </td>
          <td>
            <span className="bg-green-400 rounded-md py-1 font-semibold text-sm text-white px-2">
              Online
            </span>
          </td>
          <td className="text-tableTr font-semibold text-sm">14/06/21</td>
          <td className="text-tableTr font-semibold text-sm">Edit</td>
        </tr>
      </table>
    </div>
  );
};
