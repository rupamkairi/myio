import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import LinksList from "../../components/dashboard/LinksList";

export default function Dashboard() {
  const navTabs = ["Social", "Developer", "Hacker"];
  const [navTabsState, setNavTabsState] = useState();
  const [links, setLinks] = useState([]);

  return (
    <div className="container mx-auto">
      <p className="text-4xl mb-8 font-bold">Admin Dashboard</p>

      <p className="text-2xl font-semibold">Nav Tabs</p>
      <span className="flex bg-gray-100 max-w-min rounded-md p-2">
        {navTabs.map((data, key) => (
          <div
            key={key}
            className={
              "btn btn-nav-tabs " +
              (navTabsState === data ? "btn-nav-tabs-selected" : "")
            }
            onClick={() => {
              setNavTabsState(data);
            }}
          >
            {data}
          </div>
        ))}
      </span>
      <div>
        <p className="py-4 text-gray-400 text-sm font-normal">{navTabsState}</p>

        {navTabsState && (
          <LinksList
            links={links.filter((link) => link.category == navTabsState)}
          />
        )}

        {navTabsState && (
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
                  className="form-text"
                  type="text"
                  placeholder="platform"
                />
                <Field
                  name="username"
                  className="form-text"
                  type="text"
                  placeholder="username"
                />
                <button className="btn btn-standard" type="submit">
                  Add
                </button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        )}
      </div>

      <p className="text-2xl font-semibold">Global List</p>
      <pre>{JSON.stringify(links, null, 2)}</pre>
    </div>
  );
}
