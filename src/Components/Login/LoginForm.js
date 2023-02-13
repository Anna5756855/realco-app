import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/preloader/formControls/formControls";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Username"
          name={"login"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder="Password"
          name={"password"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <label>
        {" "}
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        Remember me
      </label>
      <div>
        <button className={styles.btn}>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

export default ReduxLoginForm;
