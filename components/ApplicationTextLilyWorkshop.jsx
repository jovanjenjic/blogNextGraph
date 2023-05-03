import React from "react";
import PropTypes from "prop-types";
import AlertMessageError from "./AlertMessageError";
import AlertMessageSuccess from "./AlertMessageSuccess";

function ApplicationTextLilyWorkshop({ showSuccessMessage, showErrorMessage }) {
  return (
    <div className="lg:col-span-3 text-red justify-between flex flex-col relative lg:pr-4 pb-10 lg:pb-0">
      <div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="30px"
            height="30px"
          >
            <path
              fill="#8bb7f0"
              d="M40,77.5C19.322,77.5,2.5,60.678,2.5,40S19.322,2.5,40,2.5S77.5,19.322,77.5,40S60.678,77.5,40,77.5 z"
            />
            <path
              fill="#4e7ab5"
              d="M40,3c20.402,0,37,16.598,37,37S60.402,77,40,77S3,60.402,3,40S19.598,3,40,3 M40,2 C19.013,2,2,19.013,2,40s17.013,38,38,38s38-17.013,38-38S60.987,2,40,2L40,2z"
            />
            <path fill="#fff" d="M40 21A3 3 0 1 0 40 27A3 3 0 1 0 40 21Z" />
            <g>
              <path
                fill="#fff"
                d="M43 56L43 31 35 31 35 33 37 33 37 56 35 56 35 58 45 58 45 56z"
              />
            </g>
          </svg>
          <p className="font-medium text-lg ml-4 mb-6 lg:mg-0">
            Radionica Lily 021
          </p>
        </div>
        {showSuccessMessage && <AlertMessageSuccess />}
        {showErrorMessage && <AlertMessageError />}
        <br />
      </div>
      <div>
        <br />
        <b>
          Prijavi se za radionicu koja te očekuje 15.05.2023. ispred kompanije
          LILY 021 - Kako postati junior programer, a zatim i senior?
        </b>
        <br />
        <br />
        Cilj radionice je da približi studentima kako u realnosti izgleda razvoj
        karijere i kroz koje faze prolazi profesija programera. Jednostavnim,
        razumljivim informacijama i pristupom zasnovanim na praksi ćemo pružiti
        informacije o tome kako izgleda pozicija programera u različitim fazama
        njegove karijere. Koje su dileme i odluke koje se u tom procesu donose.
        Predviđeno vreme za radionicu je 90 minuta i u tom periodu će moderatori
        izložćiti svoja iskustva i diskutovati sa studentima o pitanjima i
        dilemama koja se pojave tokom radionice. Moderatori: Nebojša Bobić i
        Marija Krsmanović
        <br />
        <br />
        Broj mesta je ograničen zato se požuri i prijavi se što pre.
        <br />
        <br />
        P.S. Nije potreban laptop ili dodatna oprema za učestvovanje
      </div>
      <br />
      <br />
      <p className="mt-6">
        Za sve probleme pri prijavi kontaktirajte nas na email:{" "}
        <b>codeference@gmail.com</b>.
      </p>
      <div className="-ml-0.5 lg:w-0.5 h-full right-0 bg-gray-300 absolute" />
    </div>
  );
}

ApplicationTextLilyWorkshop.propTypes = {
  showSuccessMessage: PropTypes.bool.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
};

export default ApplicationTextLilyWorkshop;
