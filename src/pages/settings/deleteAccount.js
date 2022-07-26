import React from "react";

const DeleteAccount = () => {
  return (
    <div className="Form deleteAccount">
      <h4 className="mb-28px">Deleting your account</h4>
      <form>
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="confirmationMessage">
            <label
              htmlFor="deleteAccount"
              className="customRadio flex flex-row"
            >
              <input type="radio" name="deleteAccount" id="deleteAccount" />
              <i className="flex-shrink-0"></i>

              <p className="text-sm leading-6 pl-20px">
                <span className="block w-full font-semibold">
                  Delete your Zipcap account permanently
                </span>
                <span className="block w-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been. printing and
                  typesetting industry. Lorem Ipsum has been.
                </span>
              </p>
            </label>
          </div>
          <div>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns">
              <button
                type="reset"
                className="viewAllBtn w-full sm:w-max text-center rounded-md py-3 px-6 text-white text-base cancelBtn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="viewAllBtn w-full sm:w-max text-center rounded-md py-3 px-6 text-white text-base"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteAccount;
