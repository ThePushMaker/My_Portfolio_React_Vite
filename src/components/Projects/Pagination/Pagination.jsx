import './Pagination.css';

const Pagination = () => {

  return(
    <div className="flex justify-center pt-6">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-black border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-black border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  );
}

export default Pagination;