import Header from "@/components/shared/header";
import React from "react";
import { transformationTypes } from "@/components/constants";
import TransformationForm from "@/components/shared/transformation-form";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationType = async ({params: {type}}: SearchParamProps) => {
  const {userId} = auth();
  const transformation: any = transformationTypes[type];
  if(!userId) redirect("/login")
  const user = await getUserById(userId)
  return <div>
      <Header title={transformation.title} subtitle={transformation.subTitle}/>
      <TransformationForm 
      action="Add" 
      userId={user._id}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance}
       />
  </div>;
};

export default AddTransformationType;
