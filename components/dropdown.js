import Link from "next/link";
export default function Dropdown() {
  return (
    <div className="dropdown relative">    
      <button class="group h-14 w-full inline-flex items-center justify-between text-left transition-colors bg-coriander-700">
              <div><strong class="ml-6 mr-8 group-hover:text-white number font-black text-white">04</strong>
              <span class=" leading-none font-bold">Now Hiring</span></div>
          <span className="icon-chevron-down mr-6"></span>
      </button>
      <div className="absolute z-10">
        sss
      </div>
    </div>
  );
}
