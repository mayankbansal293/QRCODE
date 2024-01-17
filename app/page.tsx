"use client"
import { useState } from 'react';
import QRCode from 'qrcode.react';

const MyComponent = () => {
  const [data, setData] = useState({
    name: "",
    title: "",
    price: "",
    discountPrice: "",
    size: ""
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  const queryParams = new URLSearchParams(data).toString();
  const baseUrl = typeof window !== 'undefined' ? window.origin : '';
  const url = `${baseUrl}/product?${queryParams}`;


  const handleDownloadQR = () => {
    const canvas = document.getElementById("downloadableQRCode") as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "QRCode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
   return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-4">
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={data.name} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Title:</label>
          <input 
            type="text" 
            name="title" 
            value={data.title} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Price:</label>
          <input 
            type="text" 
            name="price" 
            value={data.price} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Discount Price:</label>
          <input 
            type="text" 
            name="discountPrice" 
            value={data.discountPrice} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Size:</label>
          <input 
            type="text" 
            name="size" 
            value={data.size} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
          />
        </div>
      </div>

      <div className="w-full md:w-1/4 cursor-pointer" onClick={handleDownloadQR}>
        <div className='flex justify-center'>
        <QRCode 
          value={url} 
          id="downloadableQRCode"
          renderAs="canvas"
        /></div>
        <p className="text-center mt-2 text-sm text-gray-500">Click to download</p>
      </div>
    </div>
  );
};

export default MyComponent;
