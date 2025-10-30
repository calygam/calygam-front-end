import { UseModalHook } from "../../hooks/UseModalHook/UseModalHook"

export default function LinkActivityArea({ArrayLinks}){
    const {openModal} = UseModalHook()
    return(
        <div className="flex flex-col gap-y-2  w-full">

        <button className="py-2 px-8 w-fit  font-semibold rounded-md border-b-4 h-[35px] my-2 text-xs border-gray-800/5 hover:border-0 transition-all bg-calygam-purple-semi-strong text-white font-poppins" onClick={()=>openModal("addLinkToSubmit")}>Links</button>
        
        {ArrayLinks?.length>0? ArrayLinks.map((lin,index)=>(
            <div key={index} className="border flex gap-x-2 p-2 text-gray-500  opacity-95 font-semibold border-gray-800 rounded-lg  overflow-y-auto max-h-[150px] ">
                <p>Link: </p>
                <a href={lin}><span className="line-clamp-1">{lin}</span></a>
            </div>
        )):null}
        </div>
    )
}