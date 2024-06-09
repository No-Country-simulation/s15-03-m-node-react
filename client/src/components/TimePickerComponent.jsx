
function TimePickerComponent({handleChange}) {
  return (
    <div className="pt-3">
      <div className="max-w-96 mx-auto grid grid-cols-2 gap-4">
        <div>
          
          <div className="relative">
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
             
            </div>
            <input
              type="time"
              id="start-time"
              className="bg-gray-50 border border-[#483AE7] text-gray-900 text-2xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="09:00"
              max="19:00"
              name="hora_ini"
              defaultValue="09:00"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          
          <div className="relative">
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
              
             
            </div>
            <input
              type="time"
              id="end-time"
              className="bg-gray-50 border border-[#483AE7] text-gray-900 text-2xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="10:00"
              max="22:00"
              name="hora_fin"
              defaultValue="10:00"
              required
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimePickerComponent;
