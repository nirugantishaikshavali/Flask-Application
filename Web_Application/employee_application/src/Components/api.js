let url="http://127.0.0.1:9008/"


// #Here we can use fetch/axios to access url
export const get_Employee_Data=async ()=>{
    let res=await fetch(url+"get_employees_data")
    let data=await res.json()
    if(data&&data.length>0){
        return data
    }
}