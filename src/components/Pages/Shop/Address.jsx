import React, { useState } from 'react'
import Input from '../../UI/Form/Input'
import { useForm } from 'react-hook-form'
import Payment from './payment';
import Order from './order';


export default function Adress({submit}) {
  const [value, setValue] = useState({
    fullName: "",
    lastname: "",
    region: "",
    cityname: "",
    streetname: "",
    zipname: "",
    email: "",
    phonenumber: "",
    });

   

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      phonenumber: "+99890"
    }
  });

const errorMessage = "This is required field";

const ErrorMessage = ({ error }) => {
  return <div className="text-[red]">{error}</div>;
};


  const onSubmit = (value) => {
    console.log("e", value);
  };


  return (
    <>
        <form onSubmit={handleSubmit(onsubmit)} className="flex">
        <div>
        <h1 className="mb-5 text-xl font-bold">Billing Address</h1>
          <div className="flex gap-6 pb-6">
            <div className="flex flex-col gap-2">
              <label for="firstname">First Name <span className="text-red-500 text-2xl">*</span></label>
              <Input 
                className={`${errors.firstname?.message && "border-red-500"}`}
                type="text"
                name="firstname"
                id="firstname"
                {...register("firstname", {
                  required: errorMessage,
                })}
              />


            <ErrorMessage error={errors?.firstname?.message} />

            </div>

            <div className="flex flex-col gap-2">
              <label for="lastname">Last Name <span className="text-red-500 text-2xl">*</span></label>
              <Input 
                className={`${errors.lastname?.message && "border-red-500"}`}
                type="text"
                name="lastname"
                id="lastname"
                {...register("lastname", {
                  required: errorMessage,
                })}
              />

            <ErrorMessage error={errors?.lastname?.message} />

            </div>
          </div>



          <div className="flex gap-6 pb-6">
            <div className="flex flex-col gap-2">
              <label>Country / Region <span className="text-red-500 text-2xl">*</span></label>
              <select
                name="region"
                className={`${errors.lastname?.message && "border-red-500"} border border-[#EAEAEA] p-2 rounded-[3px] focus:outline-none focus:border-green-500 w-[350px] h-10 text-sm text-gray-700` }
                {...register("region", {required: errorMessage})}
                >
              <option disabled value="" selected><span className="text-gray-400 text-[12px]">Select a country / region</span></option>
              <option value="Tashkent">Tashkent</option>
              <option value="Samarkand">Samarkand</option>
              <option value="Khorezm">Khorezm</option>
              <option value="Bukhara">Bukhara</option>
              </select>

              <ErrorMessage error={errors?.region?.message} />
            </div>
            <div className="flex flex-col gap-2">
              <label for="cityname">Town / City <span className="text-red-500 text-2xl">*</span></label>
              <Input 
                className={`${errors.cityname?.message && "border-red-500"}`}
                type="text"
                name="cityname"
                id="cityname"
                {...register("cityname", {required: errorMessage})}
              />

              <ErrorMessage error={errors?.cityname?.message} />
            </div>

          </div>



          <div className="flex gap-6 pb-6">
            <div className="flex flex-col gap-2">
              <label for="streetname">Street Address <span className="text-red-500 text-2xl">*</span></label>
              <Input 
                className={`${errors.streetname?.message && "border-red-500"}`}
                type="text"
                name="streetname"
                id="streetname"
                placeholder="House number and street name"
                {...register("streetname", {required: errorMessage})}
              />

              <ErrorMessage error={errors?.streetname?.message} />

            </div>
            <div className="flex flex-col gap-2">
              <label></label>
              <Input 
                className="mt-8"
                type="text"
                name="appartment"
                placeholder="Appartment, suite, unit, etc. (optional)"
                {...register("appartment")}

              />
            </div>
          </div>

          <div className="flex gap-6 pb-6">
            <div className="flex flex-col gap-2">
              <label>State <span className="text-red-500 text-2xl">*</span></label>
              <select
                className={`${errors.state?.message && "border-red-500"} border border-[#EAEAEA] p-2 rounded-[3px] focus:outline-none focus:border-green-500 w-[350px] h-10 text-sm text-gray-700` }
                {...register("state", {required: errorMessage})}

                >
              <option disabled value="" selected><span className="text-gray-400 text-[12px]">Select state</span></option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Tadjikistan">Tadjikistan</option>
              </select>

              <ErrorMessage error={errors?.state?.message} />
            </div>
            <div className="flex flex-col gap-2">
              <label for="zipname">Zip<span className="text-red-500 text-2xl">*</span></label>
              <Input 
                className={`${errors?.zipname?.message && "border-red-500"}`}
                type="text"
                name="zipname"
                id="zipname"
                {...register("zipname", {required: errorMessage})}

              />

              <ErrorMessage error={errors?.zipname?.message} />
            </div>
          </div>



          <div className="flex gap-6 pb-6">
            <div className="flex flex-col gap-2">
              <label for="email">Email Address<span className="text-red-500 text-2xl">*</span></label>
              <Input
                className={`${errors?.email?.message && "border-red-500"}`} 
                type="email"
                name="email"
                id="email"
                {...register("email", {required: errorMessage})}

              />

              <ErrorMessage error={errors?.email?.message} />
            </div>
            <div className="flex flex-col gap-2">
              <label for="phonenumber">Phone Number<span className="text-red-500 text-2xl">*</span></label>
              <Input 
                className={`${errors?.phonenumber?.message && "border-red-500"}`}
                type="phonenumber"
                name="phonenumber"
                id="phonenumber"
                {...register("phonenumber", {required: errorMessage})}

              />

              <ErrorMessage error={errors?.phonenumber?.message} />
            </div>
          </div>
          
            <div className="flex flex-col gap-2">
              <label for="textarea">Order notes (optional)</label>
              <textarea 
                type="text"
                name="textarea"
                id="textarea"
                className="w-[350px] h-[152px] border border-[#EAEAEA] p-2 rounded-[3px] focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
          <div>
            <Order />
            <Payment />
          </div>

        </form>
    </>
  )
}
