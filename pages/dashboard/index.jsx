import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

export default function Dashboard() {
  const [navTabsState, setNavTabsState] = useState();
  const [links, setLinks] = useState([]);

  return (
    <div className="container mx-auto">
      <p className="text-4xl font-bold">Admin Dashboard</p>

      <p className="text-2xl font-semibold">Nav Tabs</p>
      <div>
        <ul className="flex ">
          <li className="text-xl px-2 font-medium cursor-pointer">
            <span
              onClick={() => {
                setNavTabsState("Social");
              }}
            >
              Social
            </span>
          </li>
          <li className="text-xl px-2 font-medium cursor-pointer">
            <span
              onClick={() => {
                setNavTabsState("Developer");
              }}
            >
              Developer
            </span>
          </li>
          <li className="text-xl px-2 font-medium cursor-pointer">
            <span
              onClick={() => {
                setNavTabsState("Professional");
              }}
            >
              Professional
            </span>
          </li>
        </ul>
        <div>
          <p>{navTabsState}</p>
          {navTabsState && (
            <div>
              <Formik
                initialValues={{
                  platform: "",
                  username: "",
                }}
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
                {({ values }) => (
                  <Form>
                    <Field
                      name="platform"
                      className="bordedr-2 border-blue-300"
                      type="text"
                      placeholder="platform"
                    />
                    <Field
                      name="username"
                      className="bordedr-2 border-blue-300"
                      type="text"
                      placeholder="username"
                    />
                    <button className="bg-blue-300 px-4 rounded" type="submit">
                      Add
                    </button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>

      <p className="text-2xl font-semibold">Global List</p>
      <pre>{JSON.stringify(links, null, 2)}</pre>
    </div>
  );
}
