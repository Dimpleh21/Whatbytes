export default function Syllabus() {
  return (
    <div className="border-2 border-gray-200 p-2 rounded-lg w-full max-w-xs lg:ml-1 lg:max-w-[32rem] lg:p-8 ml-5 mt-8">
      <div className=" text-2xl font-medium ">Syllabus Analysis</div>
      <div className="flex flex-col gap-10">
        <div className="mt-10">
          <div className="text-gray-500 text-xl font-semibold">
            HTML Tools, Forms, History
          </div>
          <div className="flex mt-5">
            <div className="bg-blue-100 h-3 w-[30rem] rounded-full">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="text-blue-500 font-bold ml-3 text-lg mt-[-0.5rem]">
              80%
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-xl font-semibold">
            Tags & References in HTML
          </div>
          <div className="flex mt-5">
            <div className="bg-orange-100 h-3 w-[30rem] rounded-full">
              <div
                className="bg-orange-500 h-3 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <div className="text-orange-500 font-bold ml-3 text-lg mt-[-0.5rem]">
              60%
            </div>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xl font-semibold">
            Tables & References in HTML
          </div>
          <div className="flex mt-5">
            <div className="bg-red-100 h-3 w-[30rem] rounded-full">
              <div
                className="bg-red-500 h-3 rounded-full"
                style={{ width: "24%" }}
              ></div>
            </div>
            <div className="text-red-500 font-bold ml-3 text-lg mt-[-0.5rem]">
              24%
            </div>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xl font-semibold">
            Tables & CSS Basics
          </div>
          <div className="flex mt-5">
            <div className="bg-green-100 h-3 w-[30rem] rounded-full">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "96%" }}
              ></div>
            </div>
            <div className="text-green-500 font-bold ml-3 text-lg mt-[-0.5rem]">
              96%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
