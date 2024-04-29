import { useContext, useState } from "react";
import { Mycontext } from "../contexts/ContextElement";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    theme,
    registerWithEmailPass,
    updateUserProfile,
    logInWithGoogle,
    logInWithGithub,
  } = useContext(Mycontext);

  const [toglePass, setTogglePass] = useState(true);

  const handleToggle = () => {
    setTogglePass(!toglePass);
  };

  function validatePassword(password) {
    return password.length >= 6;
  }

  const [successRegisterUser, setSuccessRegisterUser] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.Email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const data = { email, password, name, photo };

    if (!validatePassword(password)) {
      setRegisterError("Please provide at least 6 digits password");
      toast.error("Please provide at least 6 digits password");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Please provide at least 1 uppercase latter");
      toast.error("Please provide at least 1 uppercase latter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setRegisterError("Please provide at least 1 lowercase latter");
      toast.error("Please provide at least 1 lowercase latter");
      return;
    }
    if (
      validatePassword(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password)
    ) {
      setRegisterError("");
    }

    console.log(data, successRegisterUser);

    registerWithEmailPass(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            setRegisterError("");
            setSuccessRegisterUser("Registration successful");
            toast.success(`Registration successful`);
            if (location.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          })
          .catch((error) => {
            setSuccessRegisterUser("");
            setRegisterError(error.message.split(":")[1]);
            toast.error(error.message.split(":")[1]);
          });
      })
      .catch((error) => {
        setSuccessRegisterUser("");
        setRegisterError(error.message.split(":")[1]);
        toast.error(error.message.split(":")[1]);
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        setRegisterError("");
        setSuccessRegisterUser("Registration successful");
        toast.success(`Registration successful`);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setSuccessRegisterUser("");
        setRegisterError(error.message.split(":")[1]);
        toast.error(error.message.split(":")[1]);
      });
  };

  const handleGitHubLogIn = () => {
    logInWithGithub()
      .then(() => {
        setRegisterError("");
        setSuccessRegisterUser("Registration successful");
        toast.success(`Registration successful`);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setSuccessRegisterUser("");
        setRegisterError(error.message.split(":")[1]);
        toast.error(error.message.split(":")[1]);
      });
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "w-[70%] md:w-1/2 my-8 p-8 space-y-3 rounded-xl bg-indigo-300 mx-auto"
          : "w-[70%] md:w-1/2 my-8 p-8 space-y-3 rounded-xl bg-indigo-700 mx-auto"
      }`}>
      <h1 className="text-2xl font-bold text-center text-secondary">
        Register
      </h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label
            htmlFor="name"
            className={`${
              theme === "light" ? "block text-gray-600" : "block text-gray-900"
            }`}>
            Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="Email"
            className={`${
              theme === "light" ? "block text-gray-600" : "block text-gray-900"
            }`}>
            Email :
          </label>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="photo"
            className={`${
              theme === "light" ? "block text-gray-600" : "block text-gray-900"
            }`}>
            Photo Url :
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="photo url"
            className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className={`${
              theme === "light" ? "block text-gray-600" : "block text-gray-900"
            }`}>
            Password
          </label>
          <div className="relative">
            <input
              type={`${toglePass ? "password" : "text"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800"
            />
            <div className="absolute top-3 right-5">
              <FaEye
                className="text-xl text-secondary"
                onClick={handleToggle}
              />
            </div>
          </div>
        </div>
        <div>
          {registerError ? (
            <p className="text-red-500">{registerError}</p>
          ) : (
            <p></p>
          )}
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-secondary hover:bg-fuchsia-500">
          Register
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p
          className={`${
            theme === "light" ? "block text-gray-600" : "block text-gray-900"
          }`}>
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log in with Google"
          className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>

        <button
          onClick={handleGitHubLogIn}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current">
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p
        className={`${
          theme === "light"
            ? "block text-gray-600 text-xs text-center sm:px-6"
            : "block text-gray-900 text-xs text-center sm:px-6"
        }`}>
        Already have an account?
        <Link to="/login" className="underline dark:text-gray-900 ml-1">
          LogIn
        </Link>
      </p>
    </div>
  );
};

export default Register;
