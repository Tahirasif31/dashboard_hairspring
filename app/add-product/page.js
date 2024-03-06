import ImageUploader from "./_component/ImageUploader";

function AddProduct() {
  return (
    <div>
      <div className="flex justify-between">
        <h2>ADD NEW PRODUCT</h2>
        <div>breadcrum</div>
      </div>
      <div className="grid grid-cols-[20fr_80fr] gap-2">
        <div>
          <h3 className="text-[24px] font-[400]">Details</h3>
          <p className="text-[16px] font-[400]">
            Title, short description, image.
          </p>
        </div>
        <div className="border-2 border-solid border-[#D2CDCD54] px-6 py-8 rounded-[20px] shadow-md">
          <div className="relative">
            <label className="px-2 absolute top-[-12px] left-8 bg-white text-[16px] font-[500] font-Lato">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Title"
              className="w-[100%] border-solid border-2 border-[#E0E0E0] rounded-[10px] py-4 px-12"
            />
          </div>
          <div className="relative mt-8">
            <label className="px-2 absolute top-[-12px] left-8 bg-white text-[16px] font-[500] font-Lato">
              Regular Price
            </label>
            <input
              type="text"
              placeholder="$  0.00"
              className="w-[100%] border-solid border-2 border-[#E0E0E0] rounded-[10px] py-4 px-12"
            />
          </div>
          <div className="pt-8">
            <p className="text-[16px] font-[500] px-6 pb-4">Description</p>
            <div className="rounded-tl-[20px] rounded-tr-[20px] rounded-br-[10px] rounded-bl-[10px] border-solid border-2 border-[#E0E0E0]">
              <div>
                <div className="flex gap-2">
                  <span className="flex gap-1 items-center px-6 py-4">
                    Normal
                    <span>
                      <img src="/sortup.svg" />
                      <img src="/sortdown.svg" />
                    </span>
                  </span>
                  <span className="flex gap-2">
                    <img src="/bold.svg" />
                    <img src="/italic.svg" />
                    <img src="/underline.svg" className="mt-2" />
                    <img src="/bulletlist.svg" />
                    <img src="/numberlist.svg" />
                    <img src="/paragraph.svg" />
                    <img src="/outdent.svg" />
                    <img src="/indent.svg" />
                    <img src="/alignleft.svg" />
                    <img src="/aligncenter.svg" />
                    <img src="/alignright.svg" />
                    <img src="/justifytext.svg" />
                    <img src="/link.svg" />
                  </span>
                </div>
                <input
                  type="text"
                  className="bg-[#F5F5F5] w-[100%] h-[172px]"
                />
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-[16px] font-[500] px-6 pb-4">Add Cover Image</p>
            <ImageUploader />

            {/* <div className="w-[100%] h-[461px] bg-[#F5F5F5] border-dashed border-2 border-[#00000038] rounded-[10px] ">
              <label>Drop files here</label>
              <input className="hidden" type="file" accept="image/*" /> 
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
