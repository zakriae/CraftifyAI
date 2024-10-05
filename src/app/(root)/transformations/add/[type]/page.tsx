import Header from "@/components/shared/header";
import React from "react";
import { transformationTypes } from "@/components/constants";

const AddTransformationType = ({params: {type}}: SearchParamProps) => {

  const transformation: any = transformationTypes[type];
  return <div>
      <Header title={transformation.title} subtitle={transformation.subTitle}/>
  </div>;
};

export default AddTransformationType;
