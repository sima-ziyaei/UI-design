import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../../utilities/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

type SignUpSchema = z.infer<typeof signupSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });
  function handleSubmitForm() {
    navigate("/");
    reset({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });
  }
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex items-center w-86 h-80 justify-around flex-col"
    >
      <div className="w-[500px] flex flex-col items-center ">
        <img className="mb-[30px]" src="/assets/icons/logo.svg" />
        <p className="mb-12 text-[63px] "> ساخت حساب </p>

        <div className="w-full flex gap-6 mb-8">
          <div className="w-[45%] flex flex-col items-center">
            <div className="relative w-full">
              <input
                {...register("username")}
                className="w-full h-14 peer pl-14  bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
                placeholder=" نام کاربری "
              />
              <img
                className="absolute top-[18%] opacity-40 peer-focus:opacity-100 left-5"
                src="/assets/icons/user-2.svg"
              />
            </div>

            {errors.username && (
              <p className="text-orange-400 mt-2 text-xs w-full text-right">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="w-[45%] flex flex-col items-center">
            <div className="relative w-full">
              <input
                {...register("email")}
                className="w-full h-14 peer pl-14  bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
                placeholder="  ایمیل "
              />
              <img
                className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 "
                src="/assets/icons/envelop.svg"
              />
              {errors.email && (
                <p className="text-orange-400 mt-2 text-xs w-full text-right  pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6">
          <div className="relative w-1/2 flex flex-col items-center">
            <div className="relative w-full">
              <input
                type="password"
                {...register("password")}
                className="w-full h-14 peer pl-14  bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
                placeholder=" کلمه عبور "
              />
              <img
                className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 "
                src="/assets/icons/lock.svg"
              />
            </div>
            {errors.password && (
              <p className="text-orange-400 mt-2 text-xs w-full pr-2 text-right ">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative w-1/2 flex flex-col items-center">
            <div className="relative w-full ">
              <input
                type="password"
                {...register("confirmPassword")}
                className="w-full h-14 peer pl-14  bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
                placeholder=" تکرار کلمه عبور "
              />
              <img
                className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 "
                src="/assets/icons/lock.svg"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-orange-400 mt-2 text-xs w-full pr-2 text-right ">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <button className="w-full rounded-full py-6 mt-6 bg-[#9C50FB]">
          ساخت حساب جدید
        </button>
        <p className="mt-6 text-[#979797] ">
          حساب کاربری دارید؟
          <a className="underline text-purple " href="/signin">
            ورود
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
