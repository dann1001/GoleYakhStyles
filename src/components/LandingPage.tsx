import Image from "next/image";
import MainModel from "../../public/MailModel.jpg";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white items-center">
      <div>
        <Image src={MainModel} alt="this is the main model of the page" />
      </div>
      <div className="m-10 font-sans text-4xl  font-bold">
        .مد جهانی ، قیمت های محلی !همین حالا تجربه کنید
      </div>
      <div>
        <button className="w-80 h-16 text-white bg-gradient-to-br from-orange-700 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          سفر به دنیای مد
        </button>
      </div>
      <div className="mt-5 underline">145+ کالا</div>
    </div>
  );
};

export default LandingPage;
