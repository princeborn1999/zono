function ApplicationComponent() {
    return(
        <div className="bg-slate-200 min-h-screen min-w-full p-5">
            {/* R3F的畫面 */}
            <div className="flex justify-center py-5 h-full">
                <div className=" bg-gray-900 rounded-lg w-4/5 h-96"></div>
            </div>
            <div className="flex justify-center ">
                <div className="bg-white rounded-lg shadow w-2/4 h-48">
                    <div className="flex">
                        <div className="p-4">
                            Rain light, Moderate, Heavy
                        </div>
                        <div className=" p-4">
                            Temperature -> cold, warm, hot
                        </div>
                        <div className=" p-4">
                            Smell(Wooden) -> light, Moderate, Heavy
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default ApplicationComponent