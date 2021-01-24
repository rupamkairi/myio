import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export default function GroupedForm(props) {
  return (
    <div>
      Grouped Form
      {/* <Formik
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
              category: props.navTabsState,
              ...values,
            },
            ...prevLinks,
          ]);
          resetForm();
        }}
      >
        {({ values, errors, handleChange, handleBlur, isValid, dirty }) => (
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
                Add to {props.navTabsState}
              </button>
            </div>

          </Form>
        )}
      </Formik> */}
    </div>
  );
}