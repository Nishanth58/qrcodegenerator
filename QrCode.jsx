import { useState } from "react";

export const QrCode = () => {
    const [img, setImg]=useState("");
    const [loading, setLoading]=useState(false)
    const [qrData, setQrdata]=useState("");
    const [qrSize, setQrsize]=useState("");

    async function generateQR() {
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }catch (error){
            console.log("Error generate QR code", error);
        }finally{
            setLoading(false);
        }
    }
     function downlaodQr(){
       fetch(img)
       .then((response)=>response.blob())
       .then((blob)=>{
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download ="qrcode.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error)=>{
        console.log("Error Downloading in QR Code", error);
        });
        
    } 
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading &&<p>Please Wait....</p>}
        {img && <img src={img} className="qr-code-image"></img>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR Code :
            </label>
            <input type="text-box" value={qrData} id="dataInput" placeholder="Enter data for QR Code" onChange={(e)=>setQrdata(e.target.value)}></input>
            <label htmlFor="sizeInput" className="input-label">
                Image Size (e.g..,150) :
            </label>
            <input type="text-box"  value={qrSize}id="sizeInput" placeholder="Enter image size" onChange={(e)=>setQrsize(e.target.value)}></input>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick={downlaodQr}>Download QR Code</button>
        </div>
        <p className="footer"> 
            Designed By <a href="#">Nishanth</a>
        </p>
    </div>
  )
}
