import React, { useState } from 'react';
import {
  SelectLang,
  LangList,
  GlobeBtn,
  FlagBtn,
  FlagItem,
} from './Languages.styled';
import i18n from 'i18next';
import { CiGlobe } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import Flag from 'react-world-flags';
import { useDispatch } from 'react-redux';
import { setLenguage } from 'redux/lenguages/lenguageSlice';

const Languages = () => {
  const dispatch = useDispatch();
  const locales = [
    {
      code: 'en',
      title: 'Eng',
      country_code: 'gb',
    },
    {
      code: 'uk',
      title: 'Ukr',
      country_code: 'ua',
    },
  ];
  const [isOpen, setOpen] = useState(false);
  const closeLang = () => setOpen(!isOpen);

  return (
    <>
      <SelectLang>
        <div>
          <GlobeBtn onClick={() => setOpen(!isOpen)}>
            <CiGlobe color="white" size={28} />
            <IoIosArrowDown color="white" />
          </GlobeBtn>
          {isOpen && (
            <LangList>
              {locales.map(({ code, title, country_code }) => (
                <FlagItem key={code}>
                  <FlagBtn
                    type="submit"
                    onClick={() => {
                      i18n.changeLanguage(code);
                      dispatch(setLenguage(code));
                      closeLang();
                    }}
                  >
                    <>
                      <Flag code={country_code} />
                    </>

                    <p>{title}</p>
                  </FlagBtn>
                </FlagItem>
              ))}
            </LangList>
          )}
        </div>
      </SelectLang>
    </>
  );
};

export default Languages;
