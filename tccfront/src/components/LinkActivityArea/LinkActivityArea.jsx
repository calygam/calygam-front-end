import { UseModalHook } from "../../hooks/UseModalHook/UseModalHook"

export default function LinkActivityArea({ArrayLinks,setArrayLinks,yourLinks,viewSubmissions}){
    const {openModal} = UseModalHook()
    const handleArrayDeleteLink=(indx)=>{
        let newArrayMontage=[];
        newArrayMontage = ArrayLinks.map((lin,index)=>index!==indx?lin:null).filter((lin)=>lin!=null)
        setArrayLinks(newArrayMontage)
    }
    return(
        <div className="flex flex-col gap-y-2  w-full">

        <button className="py-2 px-8 w-fit  font-semibold rounded-md border-b-4 h-[35px] my-2 text-xs border-gray-800/5 hover:border-0 transition-all bg-calygam-purple-semi-strong text-white font-poppins" onClick={()=>openModal("addLinkToSubmit")}>Links</button>
        {viewSubmissions&& yourLinks.submissions?.length>0? yourLinks.submissions.map((lin,index)=>(
            lin.activityLink!=null?
            <div key={index} className="border flex items-center justify-between gap-x-2 p-2 text-gray-500  opacity-95 font-semibold border-gray-800 rounded-lg  overflow-y-auto max-h-[150px] ">
                <div className="flex items-center gap-x-2">
                <p>Link: </p>
                <a href={lin.activityLink}><span className="line-clamp-1">{lin.activityLink}</span></a>
                </div>
                <button className="bg-red-500 rounded-full w-[18px] hover:opacity-25 hover:h-[6px] flex h-[4px]" onClick={()=>handleArrayDeleteLink(index)}></button>
            </div>
        :null)):null}
        {ArrayLinks?.length>0? ArrayLinks.map((lin,index)=>(
            <div key={index} className="border flex items-center justify-between gap-x-2 p-2 text-gray-500  opacity-95 font-semibold border-gray-800 rounded-lg  overflow-y-auto max-h-[150px] ">
                <div className="flex items-center gap-x-2">
                <p>Link: </p>
                <a href={lin}><span className="line-clamp-1">{lin}</span></a>
                </div>
                <button className="bg-red-500 rounded-full w-[18px] hover:opacity-25 hover:h-[6px] flex h-[4px]" onClick={()=>handleArrayDeleteLink(index)}></button>
            </div>
        )):null}
        </div>
    )
}