import Link from "next/link";
export default function Dropdown({ href, color, text }) {
  return (
    <div className="dropdown relative">
    
          <button class="group h-14 w-full inline-flex items-center text-left transition-colors bg-coriander-700">
              <strong class="ml-6 mr-8 group-hover:text-white number font-black text-white">04</strong>
              <span class=" leading-none font-bold">Now Hiring</span>
          <span className="icon-chevron-down"></span>
      </button>

      <div className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
       
       
      </div>
    </div>
  );
}
