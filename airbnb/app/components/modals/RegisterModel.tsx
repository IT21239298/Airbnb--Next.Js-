"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { error } from "console";
import Modal from "./Modal";

const RegisterModel = () => {
  const RegisterModel = useRegisterModal();
  const [isLoading, setisLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);

    axios
      .post("api/register", data)
      .then(() => {
        RegisterModel.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModel.isOpen}
      title="Register"
      actionLabel={"Continue"}
      onClose={RegisterModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModel;
