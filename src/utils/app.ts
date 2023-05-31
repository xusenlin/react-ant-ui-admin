
export function saveBlob(blob:Blob,fileName:string,isOpen = false):void{
  const url = window.URL.createObjectURL(blob);
  if(isOpen){
    window.open(url)
  }else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("display","none")
    a.href = url;
    a.download = fileName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }
}


export const toFormData = (data:any) =>{
  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }
  return formData
}
