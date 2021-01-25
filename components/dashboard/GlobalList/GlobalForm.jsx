import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
//
import { useGlobalList } from "../../../context/GlobalListContext";

export default function GlobalForm() {
  const navTabsState = "Global";
  const { addLink } = useGlobalList();

  return (
    <div>
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
              <button
                className="btn btn-standard"
                type="submit"
                disabled={!dirty || !isValid}
              >
                Add to {navTabsState}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
