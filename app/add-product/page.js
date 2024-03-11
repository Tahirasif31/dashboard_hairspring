import ImageUploader from "./_component/ImageUploader";
import Input from "./_component/Input";
import SelectInput from "./_component/SelectInput";

function AddProduct() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="family-Poppins text-[16px] font-[600] text-[#495057]">
          ADD NEW PRODUCT
        </h2>
        <div>breadcrum</div>
      </div>
      <div className="grid grid-cols-[20fr_80fr] gap-3 mt-5">
        <div>
          <h3 className="text-[24px] font-[400] family-Poppins">Details</h3>
          <p className="text-[16px] font-[400] text-[#0000007D] mt-1">
            Title, short description, image.
          </p>
        </div>
        <div className="border-2 border-solid border-[#D2CDCD54] px-6 py-8 rounded-[20px] shadow-md">
          <Input label={"Product Name"} type={"text"} placeholder={"Title"} />
          <Input
            label={"Regular Price"}
            type={"text"}
            placeholder={"$  0.00"}
            className={"mt-8"}
          />
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
          <div className="pt-8">
            <p className="text-[16px] font-[500] px-6 pb-4">Add Galery</p>
            <div className="flex justify-between ">
              <div className="flex flex-col rounded-[5px] bg-white shadow-lg py-5 px-2 xl:px-3 items-center">
                <img src="/add.svg" width={11} height={11} className="mb-2" />
                <span className="text-[12px] leading-[14.4px] font-[500] family-Lato">
                  <p className="text-center leading-[14.4px]">Upload</p>
                  <p className="leading-[14.4px]">Image here</p>
                </span>
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
              <div className="align-middle rounded-[5px] bg-white shadow-lg px-[22px] 2xl:px-9 xl:px-7 border-[1px] border-solid border-[#0000002f]">
                <img src="/imgadd.svg" className="mt-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[20fr_80fr] gap-3 mt-5">
        <div>
          <h3 className="text-[24px] font-[400] family-Poppins">Properties</h3>
          <p className="text-[16px] font-[400] text-[#0000007D] mt-1">
            Additional Functions and Attributes.
          </p>
        </div>
        <div className="border-2 border-solid border-[#D2CDCD54] px-6 py-8 rounded-[20px] shadow-md">
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 ">
            <Input label={"Stock"} type={"text"} placeholder={"0"} />
            <Input label={"Product SKU"} type={"text"} placeholder={"0"} />
            <SelectInput label={"Set"}>
              <option disabled selected>
                Full Set / Naked
              </option>
              <option>Full Set</option>
              <option>Naked</option>
            </SelectInput>
            <SelectInput label={"Brand"}>
              <option disabled selected>
                Select Brand
              </option>
              <option>x</option>
              <option>y</option>
            </SelectInput>
            <Input label={"Color"} type={"text"} placeholder={"Color"} />
            <SelectInput label={"Type"}>
              <option selected>New</option>
              <option>Used</option>
            </SelectInput>
            <Input label={"Condition"} type={"text"} placeholder={"AA"} />
            <Input label={"Age"} type={"text"} placeholder={"2023"} />
            <SelectInput label={"Box"}>
              <option disabled selected>
                Yes / No
              </option>
              <option>Yes</option>
              <option>No</option>
            </SelectInput>
            <SelectInput label={"Movements"}>
              <option>xx</option>
              <option>yy</option>
            </SelectInput>
            <Input label={"Case Size"} type={"text"} placeholder={"43 mm"} />
            <SelectInput label={"Case"}>
              <option disabled selected>
                Select Case
              </option>
              <option>xxx</option>
            </SelectInput>
            <Input label={"Dial"} type={"text"} placeholder={"Black"} />
            <SelectInput label={"Bracelet"}>
              <option disabled selected>
                Select Bracelet Type
              </option>
            </SelectInput>
          </div>
          <Input
            label={"Tags"}
            type={"text"}
            placeholder={"Add Tags"}
            className={"mt-6"}
          />
          <div className="px-3 p-6">
            <p className="text-[16px] text-[#00271C] font-[500] leading-[24px]">
              Gender
            </p>
            <span className="flex gap-4 w-[220px] text-[16px] text-[#00271C] font-[500]">
              <span className="flex gap-2">
                <input type="checkbox" id="male" />
                <label for="male">Male</label>
              </span>
              <span className="flex gap-2">
                <input type="checkbox" id="female" />
                <label for="female">Female</label>
              </span>
              <span className="flex gap-2">
                <input type="checkbox" id="kids" />
                <label for="kids">Kids</label>
              </span>
            </span>
          </div>
          <div class="border-t border-dashed border-gray-400 my-4 mx-3"></div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
