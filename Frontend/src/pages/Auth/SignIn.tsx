import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoMdPerson, IoMdLock } from "react-icons/io";
import BankLogo from "../../images/logo/bank.png";
import PhoneImage from "../../images/3d/bank-signin.png";
import { login as LoginAuthService } from "../../services/auth";
import { useAuth } from "../../hook/AuthContext";
import Loader from "../../common/Loader";

const SignIn: React.FC = () => {
  const { login, isLoggedIn } = useAuth();
  const [nif, setNif] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const start = Date.now();

    try {
      const response = await LoginAuthService({ nif, password });
      const token = response.data.data.token;
      const elapsed = Date.now() - start;

      setTimeout(
        () => {
          setLoading(false);
          login(token);
        },
        Math.max(1000 - elapsed, 0)
      );
    } catch (error) {
      const elapsed = Date.now() - start;

      setTimeout(
        () => {
          setLoading(false);
          if (error.message === "Invalid credentials") {
            console.log("alert alert, wrong data");
          } else {
            console.log("An error occurred:", error);
          }
        },
        Math.max(1000 - elapsed, 0)
      );
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen flex items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap items-center w-full">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="dark:hidden mx-auto w-1/2" src={BankLogo} alt="Logo" />
              </Link>
              <p className="2xl:px-20">Um banco que investe no seu futuro, com soluções financeiras feitas sob medida para cada cliente.</p>
              <span className="mt-15 inline-block">
                <img src={PhoneImage} alt="Bank 3D" width="500" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">Bem Vindo ao Banco Barcelos</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">NIF</label>
                  <div className="relative">
                    <input type="number" placeholder="Insere o teu NIF" className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" value={nif} onChange={(e) => setNif(e.target.value)} required />
                    <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
                      <IoMdPerson className="fill-current text-gray-400 text-lg" /> {/* Using IoMdPerson icon */}
                    </span>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">Password</label>
                  <div className="relative">
                    <input type="password" placeholder="Insere a password" className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
                      <IoMdLock className="fill-current text-gray-400 text-lg" /> {/* Using IoMdLock icon */}
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input type="submit" value="Entrar" className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90" />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Ainda não fazes parte do banco?{" "}
                    <Link to="/auth/signup" className="text-primary">
                      Cria já uma conta
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
