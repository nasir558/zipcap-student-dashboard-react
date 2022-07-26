import React, { useState } from "react";
import EditIcon from "../../assets/images/dashboard/pencil-icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";

const Personal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [formEdit, setFormEdit] = useState(true);
  
  return (
    <div className="perosnal xl:px-50px mt-40px">
      <form>
        <div className="bg-lightGreen px-15px py-15px lg:px-40px lg:py-33px rounded-xl formTtitle">
          <h4 className="flex flex-row items-center justify-between">
            <span>Personal</span>
            <button
              type="button"
              onClick={() => setFormEdit(false)}
              className="focus:outline-none w-17px h-17px overflow-hidden flex-shrink-0"
            >
              <img
                src={EditIcon}
                className="w-full h-auto cursor-pointer"
                alt=""
              />
            </button>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20px">
            <div>
              <p className="pl-10px text-sm font-semibold">Gender</p>
              <select name="gender" className="block w-full" disabled={formEdit}>
                <option selected>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <p className="pl-10px text-sm font-semibold">Date of Birth</p>
              <DatePicker
                className="block w-full transition-all duration-300"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                disabled={formEdit}
              />
            </div>
            <div>
              <p className="pl-10px text-sm font-semibold">City</p>
              <Autocomplete
                apiKey={"AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI"}
                style={{ width: "100%" }}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
                options={{
                  types: ["(regions)"],
                  componentRestrictions: { country: "USA" },
                }}
                defaultValue="New York"
                disabled={formEdit}
              />
            </div>
            <div>
              <p className="pl-10px text-sm font-semibold">Zip</p>
              <input
                type="text"
                name="zip"
                value="25000"
                disabled={formEdit}
                className="block w-full transition-all duration-300"
              />
            </div>
           
          </div>
          {!formEdit ? (
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns mt-4">
              <button
                type="submit"
                className="viewAllBtn w-full sm:w-max text-center rounded-md py-3 px-6 text-white text-base"
              >
                Save Changes
              </button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Personal;
