import React from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
//
import { useGlobalList } from "../../../context/GlobalListContext";

export default function GlobalAddLinkForm() {
  // const navTabsState = "Global";
  const { addLink, listObjectId, changeListGroupObject } = useGlobalList();

  return (
    <div>
      {listObjectId === "" ? (
        <p className="text-center text-sm font-medium py-6 text-gray-500">
          First give the Group a name...
        </p>
      ) : (
        <Formik
          initialValues={{
            platform: "",
            username: "",
            profile_link: "",
          }}
          validationSchema={object().shape({
            platform: string()
              .min(2, "Platform name is too short!")
              .max(32, "Platform name is too long!")
              .required("You seems from nowhere."),
            username: string()
              .min(2, "Username name is too short!")
              .max(64, "Username name is too short!")
              .required("What! no username?"),
            profile_link: string().url(
              "This does not seem like a valid url. Give valid one or remove."
            ),
          })}
          onSubmit={(values, { resetForm }) => {
            addLink(values);
            resetForm();
          }}
        >
          {({ values, errors, handleChange, handleBlur, isValid, dirty }) => (
            <Form>
              <div className="p-6 mb-2 rounded-md shadow-md flex flex-col md:grid md:grid-cols-3 lg:grid-cols-1 md:gap-4">
                <div className="mb-4 md:mb-0">
                  <input
                    name="platform"
                    id="platform"
                    className="form-text w-full"
                    type="text"
                    placeholder="platform"
                    value={values.platform}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-red-500 text-sm font-semibold">
                    {!dirty || errors?.platform}
                  </p>
                </div>
                <div className="mb-4 md:mb-0">
                  <input
                    name="username"
                    id="username"
                    className="form-text w-full"
                    type="text"
                    value={values.username}
                    placeholder="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-red-500 text-sm font-semibold">
                    {!dirty || errors?.username}
                  </p>
                </div>
                <div className="mb-4 md:mb-0">
                  <input
                    name="profile_link"
                    id="profile_link"
                    className="form-text w-full"
                    type="text"
                    value={values.profile_link}
                    placeholder="http://example.com/user"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-red-500 text-sm font-semibold">
                    {!dirty || errors?.profile_link}
                  </p>
                </div>
                <button
                  className="btn btn-standard md:col-span-3 lg:col-span-1"
                  type="submit"
                  disabled={!dirty || !isValid}
                  onClick={() => {
                    fetch(
                      process.env.NEXT_PUBLIC_API_HOST + "/global/addlink",
                      {
                        method: "POST",
                        body: JSON.stringify({
                          _id: listObjectId,
                          link: values,
                        }),
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        changeListGroupObject(data.result.value);
                      });
                  }}
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
