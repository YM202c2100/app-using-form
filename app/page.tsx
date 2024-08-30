import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
import VanilaForms from "./components/VanilaForm/VanilaForms";

export default function Home() {
  return (
    <div >
      <VanilaForms/>
      <div className="h-1 bg-gray-200 my-5"></div>
      <ReactHookForm/>
    </div>
  );
}
