import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import LinksList from "../../components/dashboard/LinksList";

export default function Dashboard() {
  const navTabs = ["Social", "Developer", "Hacker", "Professional"];
  const [navTabsState, setNavTabsState] = useState();
  const [links, setLinks] = useState([]);

  return (
    <div className="container mx-auto px-4">
      <p className="text-4xl mb-8 font-bold">Admin Dashboard</p>

      <div className="py-4 flex justify-center md:justify-start">
        <button className="btn btn-standard">Add Link</button>
        <button className="btn btn-standard ml-4">Add Group</button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-9">
        <div className="col-span-2 container">
          <div className="mx-auto bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-wrap justify-center md:justify-start items-center">
              {navTabs.map((data, key) => (
                <div
                  key={key}
                  className={
                    "m-2 btn btn-nav-tabs " +
                    (navTabsState === data ? "btn-nav-tabs-selected" : "")
                  }
                  onClick={() => {
                    setNavTabsState(data);
                  }}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="pt-4 pl-2 text-gray-400 text-sm font-normal">
              {navTabsState}
            </p>

            {navTabsState && (
              <LinksList
                links={links.filter((link) => link.category == navTabsState)}
              />
            )}

            <p className="pt-4 pl-2 text-gray-400 text-sm font-normal">
              Add to {navTabsState}
            </p>

            {navTabsState && (
              <Formik
                initialValues={{
                  platform: "",
                  username: "",
                }}
                validationSchema={Yup.object().shape({
                  platform: Yup.string()
                    .min(2, "Too Short!")
                    .max(32, "Too Long!")
                    .required("You seems from nowhere."),
                  username: Yup.string()
                    .min(2, "Too Short!")
                    .max(64, "Too Long!")
                    .required("What! no username?"),
                })}
                onSubmit={(values, { resetForm }) => {
                  setLinks((prevLinks) => [
                    {
                      category: navTabsState,
                      ...values,
                    },
                    ...prevLinks,
                  ]);
                  resetForm();
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleBlur,
                  isValid,
                  dirty,
                }) => (
                  <Form>
                    <div className="my-2 p-4 rounded-md shadow-md grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
                      <div>
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
                      <div>
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
                      <button
                        className="btn btn-standard"
                        type="submit"
                        disabled={!dirty || !isValid}
                      >
                        Add to {navTabsState}
                      </button>
                    </div>
                    {/* <pre>
                  {JSON.stringify({ values, errors, isValid, dirty }, null, 2)}
                </pre> */}
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold">Global List</p>
          {/* <pre>{JSON.stringify(links, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
}
