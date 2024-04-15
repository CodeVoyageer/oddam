import React, { useState } from "react";
import Navigation from "./Home/Navigation";
import Start from "./LogedHome/Start";
import FormFourthStep from "./LogedHome/FormFourthStep";
import FormSummary from "./LogedHome/FormSummary";
import ThanksForm from "./LogedHome/ThanksForm";
import FormFirstStep from "./LogedHome/FormFirstStep";
import FormSecondStep from "./LogedHome/FormSecondStep";
import FormThirdStep from "./LogedHome/FormThirdStep";

const LogedHome = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [setFormData] = useState({});

  const handleNextClick = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentPage((page) => page + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((page) => page - 1);
  };
  const renderForm = () => {
    switch (currentPage) {
      case 1:
        return <FormFirstStep onNext={handleNextClick} />;
      case 2:
        return (
          <FormSecondStep onNext={handleNextClick} onPrev={handlePrevClick} />
        );
      case 3:
        return (
          <FormThirdStep onNext={handleNextClick} onPrev={handlePrevClick} />
        );
      case 4:
        return (
          <FormFourthStep onNext={handleNextClick} onPrev={handlePrevClick} />
        );
      case 5:
        return (
          <FormSummary onNext={handleNextClick} onPrev={handlePrevClick} />
        );
      case 6:
        return <ThanksForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation />
      <Start />
      {renderForm()}
    </>
  );
};

export default LogedHome;
